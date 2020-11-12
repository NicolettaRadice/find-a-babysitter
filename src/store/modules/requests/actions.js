export default {
  async contactSitter(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(`https://babysitters-3cae5.firebaseio.com/requests/${payload.sitterId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.sitterId = payload.sitterId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const sitterId = context.rootGetters.userId;
    const response = await fetch(`https://babysitters-3cae5.firebaseio.com/requests/${sitterId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        sitterId: sitterId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
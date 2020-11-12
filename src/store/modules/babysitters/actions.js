export default {
    async registerSitter(context, data) {
      const userId = context.rootGetters.userId;
      const sitterData = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
  
      const response = await fetch(
        `https://babysitters-3cae5.firebaseio.com/sitters/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(sitterData)
        }
      );
  
      // const responseData = await response.json();
  
      if (!response.ok) {
        // error ...
      }
  
      context.commit('registerSitter', {
        ...sitterData,
        id: userId
      });
    },
    async loadSitters(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        return;
      }

      const response = await fetch(
        `https://babysitters-3cae5.firebaseio.com/sitters.json`
      );
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch');
        throw error;
      }
  
      const sitters = [];
  
      for (const key in responseData) {
        const sitter = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        sitters.push(sitter);
      }
  
      context.commit('setSitters', sitters);
      context.commit('setFetchTimeStamp');
    }
  };
  
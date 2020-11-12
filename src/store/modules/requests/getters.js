export default {
  requests(state, _, _2, rootGetters) {
    const sitterId = rootGetters.userId;
    return state.requests.filter(req => req.sitterId === sitterId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
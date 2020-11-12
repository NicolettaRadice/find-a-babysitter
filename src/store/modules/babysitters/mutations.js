export default {
    registerBabysitter(state, payload) {
        state.sitters.push(payload);
    },
    setSitters(state,payload) {
        state.sitters = payload;
    },
    setFetchTimeStamp(state) {
        state.lastFetch = new Date().getTime();
    }
}
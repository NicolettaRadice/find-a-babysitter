export default {
    sitters(state) {
        return state.sitters;
    },
    hasSitted(state) {
        return state.sitters && state.sitters.length > 0;
    },
    isSitter(_, getters, _2, rootGetters) {
        const sitters = getters.sitters;
        const userId = rootGetters.userId;
        return sitters.some(sitter => sitter.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch)/1000 > 60;
    }
};
export const getCardContent = {
    state: {
        id: null,
        iconUrl: null,
        nameCard: null,
        nameProfile: null,
        title: null,
        body: null,
        popularity: null,
    },
    mutations: {
        changeContentState(state, [id, iconURL, nameCard, nameProfile, titleCard, contentBody, popularityCard]) {
            state.id = id,
            state.iconURL = iconURL,
            state.nameCard = nameCard,
            state.nameProfile = nameProfile,
            state.title = titleCard,
            state.body = contentBody,
            state.popularity = popularityCard
        }
    },
    actions: {
    },
    getters: {
    },
}
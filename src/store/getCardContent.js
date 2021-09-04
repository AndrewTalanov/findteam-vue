export const getCardContent = {
    state: {
        id: null,
        iconUrl: null,
        nameCard: null,
        nameProfile: null,
        title: null,
        body: null,
        popularity: null,
        sphera: null,
        sum: null
    },
    mutations: {
        changeContentState(state, [id, iconURL, nameCard, nameProfile, titleCard, contentBody, popularityCard, sphera, sum]) {
            state.id = id,
            state.iconURL = iconURL,
            state.nameCard = nameCard,
            state.nameProfile = nameProfile,
            state.title = titleCard,
            state.body = contentBody,
            state.popularity = popularityCard,
            state.sphera = sphera,
            state.sum = sum
        }
    },
    actions: {
    },
    getters: {
    },
}
export const getCardContent = {
    state: {
        id: null,
        iconUrl: null,
        nameCard: null,
        nameProfile: null,
        title: null,
        body: null,
        popularity: null,
        sphere: null,
        sum: null
    },
    mutations: {
        changeContentState(state, [id, iconURL, nameCard, nameProfile, titleCard, contentBody, popularityCard, sphere, sum]) {
            state.id = id,
            state.iconURL = iconURL,
            state.nameCard = nameCard,
            state.nameProfile = nameProfile,
            state.title = titleCard,
            state.body = contentBody,
            state.popularity = popularityCard,
            state.sphere = sphere,
            state.sum = sum
        }
    },
    actions: {
    },
    getters: {
    },
}
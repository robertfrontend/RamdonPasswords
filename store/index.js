export const state = () => ({
    usuario: null,
})

export const getters = {

}

export const mutations = {

    guararUsuario(state, payload) {
        state.usuario = payload

        if (payload === '') {
            state.usuario = null
        } else {
            state.usuario = payload
            localStorage.setItem('token', payload.jwt)
            localStorage.setItem('username', payload.user.username)
        }
    }

}

export const actions = {
    async login({ commit }, payload) {
        commit('guararUsuario', payload)
    }
}


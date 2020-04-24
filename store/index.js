/* eslint-disable prettier/prettier */
export const state = () => ({
    countries: [],
    current: {},
    connectionStatus: true
})

export const getters = {
    getCountries: (state) => state.countries,
    getCurrent: (state) => state.current,
    getConnectionStatus: (state) => state.connectionStatus
}

export const mutations = {
    SET_COUNTRIES: (state, countries) => (state.countries = countries),
    CURRENT_COUNTRY: (state, payload) => (state.current = payload),
    SET_CONNECTION_STATUS: (state, status) => (state.connectionStatus = status)
}

export const actions = {
    async fetchCountries({ commit }) {
        try {
            const response = await this.$axios.get('https://api.covid19api.com/summary');
            // const response = await this.$axios.get('/data.json');
            commit('SET_COUNTRIES', response.data.Countries);
            commit('CURRENT_COUNTRY', response.data.Global);
            commit('SET_CONNECTION_STATUS', true);
            console.log(
                'Seccess request to https://api.covid19api.com/summary has been sent'
            )
        } catch (error) {
            commit('SET_COUNTRIES', []);
            commit('SET_CONNECTION_STATUS', false);
            console.log(
                'Error request to https://api.covid19api.com/summary has not been sent'
            )
            console.log(error);
        }
    },

    setCurrentCountry({ commit }, country) {
        commit('CURRENT_COUNTRY', country);
    }
}

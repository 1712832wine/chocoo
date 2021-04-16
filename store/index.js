import { BASE_URL } from "@/plugins/api.js";
export const state = () => ({
  carousel: [],
  desc: []
});
export const mutations = {
  setCarousel(state, data) {
    state.carousel = data;
  },
  setDesc(state, data) {
    state.desc = data;
  }
};
export const actions = {
  async callCarousel({ commit }) {
    const data = await this.$axios.$get(`${BASE_URL}/carousel`);
    commit("setCarousel", data);
  },
  async callDesc({ commit }) {
    const data = await this.$axios.$get(`${BASE_URL}/desc`);
    commit("setDesc", data);
  }
};

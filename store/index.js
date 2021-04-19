import { BASE_URL } from "@/plugins/api.js";
import desc from "@/data/home/desc.json";
import carousel from "@/data/home/carousel.json";
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
    //const data = await this.$axios.$get(`${BASE_URL}/carousel`);
    const data = carousel.data;
    commit("setCarousel", data);
  },
  async callDesc({ commit }) {
    //const data = await this.$axios.$get(`${BASE_URL}/desc`);
    const data = desc.data;
    commit("setDesc", data);
  }
};

export const state = () => ({
  carousel: []
});
export const mutations = {
  setCarousel(state, carousel) {
    state.carousel = carousel;
  }
};
export const actions = {
  async callCarousel({ commit }) {
    const res = await this.$axios.$get("http://127.0.0.1:8000/carousel");
    console.log(res);
    commit("setCarousel", res);
  }
};

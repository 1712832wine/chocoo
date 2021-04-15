// export const state = () => ({
//   carousel: []
// });
// export const mutations = {
//   setCarousel(state, carousel) {
//     state.carousel = carousel;
//   }
// };
// export const actions = {
//   async getCarousel({ commit }) {
//     // console.log("this is action");
//     // const api = "http://127.0.0.1:8000/carousel";
//     // const data = await this.$axios.$get(api, {
//     //   headers: {
//     //     "Content-Type": "application/json"
//     //   }
//     // });
//     const data = [
//       {
//         id: 1,
//         src: "https://chocoo.newzen.site/images/banner-img.png"
//       },
//       {
//         id: 2,
//         src:
//           "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg"
//       },
//       {
//         id: 3,
//         src: "https://chocoo.newzen.site/images/banner-img.png"
//       }
//     ];
//     console.log(data);
//     commit("setCarousel", data);
//   }
// };
// export const getters = {
//   carousel(state) {
//     return state.carousel;
//   }
// };

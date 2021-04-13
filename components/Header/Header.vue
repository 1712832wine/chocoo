<template>
  <div class="header">
    <nuxt-link to="/">
      <div class="logo"></div>
    </nuxt-link>
    <div class="menu">
      <div class="search-box">
        <div><div class="search"></div></div>
      </div>

      <div class="titles">
        <nuxt-link
          v-for="item in menu"
          :key="item.id"
          :to="item.to"
          class="title"
          >{{ item.title }}</nuxt-link
        >
      </div>
      <nuxt-link v-for="item in logo" :key="item.id" :to="item.to">
        <div class="icon-box">
          <div
            class="icon"
            :style="{ 'background-image': 'url(' + item.url + ')' }"
          ></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "new arrival",
          to: "/new-arrival",
        },
        {
          id: 2,
          title: "collections",
          to: "/collections",
        },
        {
          id: 3,
          title: "best seller",
          to: "/best-seller",
        },
        {
          id: 4,
          title: "clothings",
          to: "/clothings",
        },
        {
          id: 5,
          title: "accessories",
          to: "/accessories",
        },
      ],
      logo: [
        {
          id: 1,
          url: "https://chocoo.newzen.site/images/nav-heart-icon.png",
          to: "/login",
        },
        {
          id: 2,
          url: "https://chocoo.newzen.site/images/cart-icon.png",
          to: "/cart",
        },

        {
          id: 3,
          url: "https://chocoo.newzen.site/images/user-icon.png",
          to: "/register",
        },
      ],
    };
  },
  props: {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/header.scss";
</style>
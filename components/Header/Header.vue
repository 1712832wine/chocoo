<template>
  <b-navbar class="header">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }" class="logo">
        <img
          src="https://chocoo.newzen.site/images/chocoo-logo.png"
          alt="Go to homepage"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        tag="nuxt-link"
        v-for="item in menu"
        :key="item.id"
        :to="{ path: item.to }"
        class="list-title"
      >
        {{ item.title }}
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link class="button is-primary" to="/register">
            <strong>Sign up</strong>
          </nuxt-link>
          <nuxt-link class="button is-light" to="/login"> Log in </nuxt-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
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
    };
  },
  props: {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/header.scss";
</style>
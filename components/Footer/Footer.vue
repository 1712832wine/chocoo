<template>
  <div class="footer">
    <div class="footer__top container">
      <nuxt-link to="/"><div class="logo"></div></nuxt-link>
      <div class="columns is-centered">
        <!-- CHOCOO OFFICIAL -->
        <div class="column is-half official">
          <h1>chocoo official</h1>

          <div class="input__group">
            <input
              type="text"
              placeholder="Customer@chocoo.com.vn"
              class="input"
            />
            <button class="button is-warning">Search</button>
          </div>
        </div>
        <!-- ABOUT US -->
        <div class="column">
          <h1>about us</h1>
          <nuxt-link
            v-for="item in aboutData"
            :key="item.id"
            :to="item.to"
            class="about__item"
            >{{ item.title }}</nuxt-link
          >
        </div>
        <!-- SOCIAL -->
        <div class="column social">
          <h1>social</h1>
          <div class="block">
            <a href="https://www.facebook.com/chocoo.official/" target="_blank">
              <b-icon icon="facebook" class="icon icon__fb"></b-icon>
            </a>
            <a
              href="https://www.instagram.com/chocoo.official/"
              target="_blank"
            >
              <b-icon icon="instagram" class="icon icon__insta"></b-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>Copyright © 2020 by Smart Digi-tech</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutData: [
        { id: 1, title: "Contact us", to: "/contact-us" },
        { id: 2, title: "Clothing storage", to: "/clothings" },
        { id: 3, title: "Returns & refund", to: "/return-policy" },
        { id: 4, title: "Delivery Policy", to: "/delivery-policy" },
        { id: 5, title: "Payment options", to: "/payment-options" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/footer.scss";
</style>
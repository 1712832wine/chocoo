<template>
  <div class="footer">
    <div class="footer__top">
      <nuxt-link to="/"><div class="logo"></div></nuxt-link>
      <div class="container">
        <!-- CHOCOO OFFICIAL -->
        <div>
          <h1>chocoo official</h1>
          <div class="input__group">
            <input type="text" class="input" />
            <button>Send</button>
          </div>
        </div>
        <!-- ABOUT US -->
        <div>
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
        <div>
          <h1>social</h1>
          <div class="d-flex">
            <div>
              <div class="icon icon__insta mr"></div>
            </div>
            <div>
              <div class="icon icon__fb"></div>
            </div>
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
<style lang="scss" scoped>
@import "@/assets/footer.scss";
</style>
<template>
  <div class="homepage">
    <!-- CAROUSEL -->
    <Carousel :carousel="carousel">
      <Description v-for="item in desc" :key="item.id" :desc="item" />
    </Carousel>
    <!-- NEW ARRIVAL -->
    <Description :desc="desc_arrival" class="arrdecs padding-top" />
    <NewArrival />
    <!-- BANNER -->
    <Banner class="padding-top">
      <Description :desc="desc_banner" />
    </Banner>
    <!-- BEST SELLER -->
    <Description :desc="desc_bestseller" class="arrdecs padding-top" />
    <NewArrival class="best-seller" :responsive="best_seller_responsive" />
  </div>
</template>

<script>
import Description from "@/components/Description/Description.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import NewArrival from "@/components/NewArrival/NewArrival.vue";
import Banner from "@/components/Banner/Banner.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { Carousel, Description, NewArrival, Banner },
  data() {
    return {
      best_seller_responsive:
        "is-one-third-desktop is-half-tablet is-12-mobile",
      desc_bestseller: {
        title: "best seller",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        seemore: {
          text: "see more",
          to: "/best-seller",
        },
      },
      desc_arrival: {
        title: "new Arrival",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        seemore: {
          text: "see more",
          to: "/new-arrival",
        },
      },
      desc_banner: {
        subtitle: "new arrival",
        title: "VOIE LACTÉE",
        seemore: {
          text: "seemore",
          to: "/collection",
        },
      },
    };
  },
  computed: {
    ...mapState({
      carousel: (state) => state.carousel,
      desc: (state) => state.desc,
    }),
  },
  methods: {
    ...mapActions(["callCarousel", "callDesc"]),
  },
  created() {
    this.callCarousel();
    this.callDesc();
  },
};
</script>

<style lang="scss">
@import "@/assets/page_home.scss";
</style>
<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section class="images__box">
        <b-image :src="carousel.url" alt="" responsive class="phong"></b-image>
        <!-- <img :src="carousel.url" /> -->
      </section>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
export default {
  data() {
    return {
      carousels: [
        {
          text: "Slide 1",
          color: "primary",
          url: "https://chocoo.newzen.site/images/banner-img.png",
        },
        {
          text: "Slide 2",
          color: "info",
          url:
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg",
        },
        {
          text: "Slide 3",
          color: "success",
          url: "https://chocoo.newzen.site/images/banner-img.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/carousel.scss";
</style>
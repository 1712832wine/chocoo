<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="item in carousel" :key="item.id">
      <section class="images__box">
        <b-image :src="item.src" alt="" responsive></b-image>
        <slot :name="item.id"></slot>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
export default {
  props: { carousel: { required: true, type: Array } },
};
</script>
<style lang="scss">
@import "@/assets/carousel.scss";
</style>
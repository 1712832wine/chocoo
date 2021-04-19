<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="item in carousel" :key="item.id" v-model="test">
      <section class="images__box">
        <b-image :src="item.src" alt="" responsive>
          <template #placeholder>Loading... </template>
        </b-image>
        <slot></slot>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
export default {
  data() {
    return {
      test: 0,
    };
  },
  props: {
    carousel: { required: false, type: Array },
  },
};
</script>
<style lang="scss">
@import "@/assets/carousel.scss";
</style>
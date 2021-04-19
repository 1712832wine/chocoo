<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="item in carousel" :key="item.id">
      <section class="images__box">
        <b-image :src="item.src" alt="" responsive>
          <template #placeholder>
            <b-skeleton class="skeleton-placeholder" height="100%"></b-skeleton>
          </template>
        </b-image>
        <slot></slot>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
export default {
  props: { carousel: { required: false, type: Array } },
};
</script>
<style lang="scss">
@import "@/assets/carousel.scss";
</style>
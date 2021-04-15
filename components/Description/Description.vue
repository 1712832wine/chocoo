<template>
  <div class="desc">
    <div class="subtitle">{{ desc.subtitle }}</div>
    <div class="title">{{ desc.title }}</div>
    <div class="content">{{ desc.content }}</div>
    <nuxt-link :to="desc.seemore.to" class="seemore">{{
      desc.seemore.text
    }}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    desc: { required: true, type: Object },
  },
};
</script>
<style lang="scss">
@import "@/assets/description.scss";
</style>
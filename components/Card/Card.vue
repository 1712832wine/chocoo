<template>
  <nuxt-link class="card" tag="div" :to="`/item-detail/${card.id}`">
    <div class="card-image">
      <b-image :src="card.src" alt="An image"> </b-image>
    </div>
    <div class="card-content has-text-centered">
      <p class="title">{{ card.title }}</p>
      <p class="subtitle">{{ card.price }}</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: { card: { required: true, type: Object } },
};
</script>
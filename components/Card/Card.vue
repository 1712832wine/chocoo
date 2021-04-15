<template>
  <div class="card">
    <div class="card-image">
      <b-image :src="card.src" alt="An image" ratio="4by3"> </b-image>
    </div>
    <div class="card-content has-text-centered">
      <p class="title">{{ card.title }}</p>
      <p class="subtitle">{{ card.price }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: { card: { required: true, type: Object } },
};
</script>
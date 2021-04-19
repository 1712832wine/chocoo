<template>
  <div class="new-arrival container box">
    <div class="columns is-multiline is-mobile">
      <div
        v-for="item in card"
        :key="item.id"
        class="column"
        :class="responsive"
      >
        <Card :card="item" />
      </div>
    </div>
  </div>
</template>                         
<script>
import Card from "@/components/Card/Card.vue";
export default {
  components: { Card },
  props: {
    responsive: {
      type: String,
      default: "is-one-quarter-desktop is-one-third-tablet is-half-mobile",
    },
  },
  data() {
    return {
      card: [
        {
          id: 1,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 2,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 3,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 4,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 5,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 6,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 7,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 8,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 9,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 10,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },

        {
          id: 11,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
        {
          id: 12,
          src: "https://picsum.photos/400/300",
          title: "Quần kaki",
          price: 40000,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/new_arrival.scss";
</style>
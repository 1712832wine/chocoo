<template>
  <div class="new-arrival container">
    <Description :desc="desc" class="arrdecs" />
  </div>
</template>
<script>
import Description from "@/components/Description/Description.vue";
export default {
  components: { Description },
  data() {
    return {
      desc: {
        id: 1,

        title: "new Arrival",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        seemore: {
          text: "see more",
          to: "/new-arrival",
        },
      },
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/new_arrival.scss";
</style>
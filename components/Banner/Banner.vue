<template>
  <div class="banner">
    <b-image
      src="https://chocoo.newzen.site/images/middle-banner-img.png"
      alt=""
      class="banner__image"
    >
    </b-image>
    <slot> </slot>
  </div>
</template>
<style lang="scss">
.banner {
  position: relative;

  .desc {
    position: absolute;
    top: 50%;
    right: 25%;
    .subtitle {
      font-size: 1.4vw;
      text-transform: uppercase;
      letter-spacing: 0.4vw;
      color: white;
    }
    .title {
      font-size: 3.76vw;
    }
    .seemore {
      color: #363636;
      text-decoration: underline;
      font-style: italic;
    }
  }
}
</style>
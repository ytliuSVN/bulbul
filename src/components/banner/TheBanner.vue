<template>
  <div class="banner">
    <img src="@/assets/wallpaper.svg" alt="Banner Image" class="banner-image" />
    <div class="banner-content">
      <h1>
        <slot name="title">Default Title</slot>
      </h1>
      <p>
        <slot name="subtitle">Default Subtitle</slot>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  display: flex;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  object-fit: cover;
  transform: scale(1.8);

  @include mixins.in-mobile {
    height: 375px;
    transform: scale(2);
  }
}

.banner-content {
  position: absolute;
  bottom: 5%;
  right: 5%;
  text-align: right;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;

  @include mixins.in-mobile {
    bottom: 5%;
    right: 10%;
    margin-left: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
  }
}
</style>

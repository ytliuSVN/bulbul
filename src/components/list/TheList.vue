<template>
  <div class="list-container">
    <div v-for="(item, key) in listItems" :key="key" class="list-item">
      <div class="list-content">
        <div class="title-container">
          <h2>{{ item.TITLE }}</h2>
          <img
            src="@/assets/icons/donus-icon.svg"
            alt="Donut icon"
            class="donut-icon"
          />
        </div>
        <p>{{ item.DESCRIPTION }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TEXT_CONSTANTS } from "@/utility/textConstants";

defineProps({
  listItems: {
    type: Object,
    required: true,
    default: () => TEXT_CONSTANTS.Lorem_LIST,
  },
});
</script>

<style scoped lang="scss">
.list-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem 3rem;

  @include mixins.in-mobile {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
}

.list-item {
  padding: 1.5rem;

  .list-content {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    align-items: start;

    .title-container {
      position: relative;
      width: 60px;

      h2 {
        writing-mode: vertical-rl;
        margin: 0;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
      }

      .donut-icon {
        position: absolute;
        bottom: -12px;
        right: 5px;
        width: 25px;
        height: 25px;
        margin-top: auto;
      }
    }

    p {
      font-weight: 400;
      font-size: 16px;
    }

    @include mixins.in-mobile {
      grid-template-columns: 60px 1fr;
      gap: 1rem;
    }
  }
}
</style>

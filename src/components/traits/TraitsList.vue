<template>
  <h2 class="page-title">{{ TEXT_CONSTANTS.NAVBAR.TRAITS }}</h2>
  <the-list :list-items="TEXT_CONSTANTS.TRAITS_LIST" />
</template>

<script setup>
import TheList from "@/components/list/TheList.vue";
import { TEXT_CONSTANTS } from "@/utility/textConstants";
</script>

<style scoped lang="scss">
.page-title {
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 28px;
  font-weight: 700;
}
</style>

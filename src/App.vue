<template>
  <div>
    <HeaderView></HeaderView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script lang="ts" setup>
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";
</script>

<style lang="scss">
.hide-header-footer {
  display: none;
}
</style>

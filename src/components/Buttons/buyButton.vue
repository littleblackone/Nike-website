<template>
  <div>
    <button class="rounded-full hover:bg-opacity-60 bg-black text-white py-[6px] px-[22px]">
      {{ text }}
    </button>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

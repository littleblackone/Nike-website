<template>
  <div class=" flex mt-[1.5rem] justify-center bg-white">
    <div class=" relative">
      <nikelogoSvg class="scale-[2.8] translate-x-4 mb-5"></nikelogoSvg>
      <h1 class="text-[1.8rem] mb-4">输入你的电子邮箱加入或登录</h1>
      <span class=" absolute top-[5.7rem] left-[.8rem] text-[12px] p-1 text-gray-400 bg-white z-10">电子邮件</span>
      <input type="email" placeholder="Email" class=" outline-none rounded-[6px] py-4 px-4 w-[400px] border border-black">
      <div class="flex gap-6 items-center mt-8">
        <input type="checkbox" class="outline-none scale-150 rounded-md">
        <span>
          我同意Nike的
          <a href="#" class=" font-semibold border-b border-black">隐私政策</a>和
          <a href="#" class=" font-semibold border-b border-black">使用条款</a>
        </span>
      </div>
      <router-link to="/">
        <buyButton text="继续" class="mt-8 float-right"></buyButton>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import nikelogoSvg from '@/components/SvgIcons/nikelogoSvg.vue';
import buyButton from '@/components/Buttons/buyButton.vue';
</script>

<style scoped></style>
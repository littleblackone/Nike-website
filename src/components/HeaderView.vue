<template>
  <!-- 位置固定的header部分 -->
  <div class="fixed top-0 w-full">
    <div class="h-[36px] w-full bg-[#F5F5F5] py-1 px-12 items-center flex">
      <div class="flex gap-6 items-center">
        <JordanSvg class="cursor-pointer hover:fill-[#767575]" />
        <ArrowSvg class="cursor-pointer hover:fill-[#767575]" />
      </div>
      <div class="flex items-center ml-auto">
        <a href="#" class="text-[12px] hover:text-gray-500">帮助 <span class="mx-[10px]">|</span></a>
        <a href="#" class="text-[12px] hover:text-gray-500">立即加入 <span class="mx-[10px]">|</span></a>
        <a href="#" class="text-[12px] hover:text-gray-500">登录</a>
      </div>
    </div>
    <div class="h-[64px] w-full bg-white flex px-12 py-4 items-center">
      <NikelogoSvg class="scale-[3.3] ml-[20px] cursor-pointer hover:fill-[#767575]" />
      <nav class="flex items-center gap-6 text-base list-none mx-auto pl-[12rem]">
        <li>
          <span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">玩转酷夏</span>
        </li>
        <li>
          <span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">新品尝鲜</span>
        </li>
        <li><span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">男子</span></li>
        <li><span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">女子</span></li>
        <li><span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">儿童</span></li>
        <li>
          <span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">专属定制</span>
        </li>
        <li>
          <span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">Jordan</span>
        </li>
      </nav>
      <!-- 搜索框和图标-->
      <div class="flex items-center gap-6 translate-x-[10px]">
        <div class="relative group">
          <button
            class="hover:bg-[#E5E5E5] group-hover:bg-[#E5E5E5] outline-none rounded-full p-[0.5rem] bg-[#F5F5F5] absolute top-0 left-0">
            <SearchSvg />
          </button>
          <input type="text"
            class="w-[180px] hover:bg-[#E5E5E5] outline-none placeholder-gray-300 py-2 px-[2.5rem] rounded-full bg-[#F5F5F5]"
            placeholder="搜索" />
        </div>
        <a href="#" class="rounded-full p-[6px] hover:bg-gray-200">
          <HeartSvg />
        </a>
        <a href="#" class="rounded-full p-[6px] hover:bg-gray-200">
          <ShopSvg />
        </a>
      </div>
    </div>
  </div>
  <!-- 位置不固定的header部分 -->
  <div class="h-[60px] bg-[#F5F5F5] w-full mt-[100px] text-[10px] text-center">
    <p class="pt-4">
      逢考必胜T恤热血上线,&nbsp;&nbsp;好运Buff加持,&nbsp;&nbsp;助你考场所向披靡,全对上岸!&nbsp;&nbsp;
      <a href="#" class="cursor-pointer border-b-[1px] border-b-black">即刻入手 </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import JordanSvg from "./SvgIcons/jordanSvg.vue";
import ArrowSvg from "./SvgIcons/arrowSvg.vue";
import NikelogoSvg from "./SvgIcons/nikelogoSvg.vue";
import HeartSvg from "./SvgIcons/heartSvg.vue";
import ShopSvg from "./SvgIcons/shopSvg.vue";
import SearchSvg from "./SvgIcons/searchSvg.vue";
</script>

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
    <div class="h-[64px] w-full bg-white flex px-12 py-4 items-center relative">
      <NikelogoSvg class="scale-[3.3] ml-[20px] cursor-pointer hover:fill-[#767575]" />
      <nav class="flex items-center gap-6 text-base list-none mx-auto pl-[12rem]">
        <li class="playNav">
          <span class="cursor-pointer hover:border-b-2 border-b-black pb-[14px]">玩转酷夏</span>
          <div class="playSummer absolute top-[4rem] left-0 bg-white w-full z-10">
            <div class="flex justify-center gap-[8rem] pt-4 pb-[2rem] pl-[15rem] pr-[20rem]">
              <ul>
                <li><a href="#">正肩Tee</a></li>
                <li><a href="#">玩趣图案Tee</a></li>
                <li><a href="#">百搭纯色Tee</a></li>
                <li><a href="#">经典Logo Tee</a></li>
                <li><a href="#">户外Tee</a></li>
              </ul>
              <ul>
                <li><a href="#">今夏风潮</a></li>
                <li><a href="#">工装风</a></li>
                <li><a href="#">美式复古风</a></li>
                <li><a href="#">畅动速干</a></li>
                <li><a href="#">无惧烈日</a></li>
              </ul>
              <ul>
                <li><a href="#">夏日精选服饰</a></li>
                <li><a href="#">防晒衣</a></li>
                <li><a href="#">球衣</a></li>
                <li><a href="#">背心</a></li>
                <li><a href="#">运动内衣Bra</a></li>
                <li><a href="#">紧身裤Legging</a></li>
                <li><a href="#">短裤/骑行裤</a></li>
                <li><a href="#">连衣裙/半裙</a></li>
                <li><a href="#">棒球帽/渔夫帽</a></li>
              </ul>
              <ul>
                <li><a href="#">夏日精选鞋款</a></li>
                <li><a href="#">拖鞋 & 凉鞋</a></li>
                <li><a href="#">透气网眼鞋</a></li>
                <li><a href="#">百搭帆布鞋</a></li>
                <li><a href="#">🔥经典白球鞋</a></li>
                <li><a href="#">复古跑鞋</a></li>
                <li><a href="#">潮流尖货</a></li>
              </ul>
              <ul>
                <li><a href="#">夏日调色盘</a></li>
                <li><a href="#">薄荷绿</a></li>
                <li><a href="#">柚子色</a></li>
                <li><a href="#">天空蓝</a></li>
                <li><a href="#">玛奇朵棕</a></li>

                <li class="summerRun"><a href="#">夏日开跑</a></li>
                <li><a href="#">新手跑者</a></li>
                <li><a href="#">进阶跑者</a></li>
                <li><a href="#">精英跑者</a></li>
                <li><a href="#">跑步服饰</a></li>
                <li><a href="#">Vaporfly</a></li>
              </ul>
            </div>
          </div>
          <div class="mask"></div>
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

<style lang="scss" scoped>
.playNav a {
  white-space: nowrap;
}

.playNav ul li:not(:first-child) {
  color: #767575;
  font-size: 14px;
  margin-bottom: 2px;

  &:hover {
    color: black;
  }
}

.playNav ul li:first-child {
  margin-bottom: 1.2rem;
  font-size: 16px;
}

.summerRun {
  // mt-8 mb-[1.2rem] text-[16px]
  margin-top: 2rem;
  margin-bottom: 1.2rem !important;
  font-size: 1rem !important;
  color: black !important;
}

.playSummer {
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
}

.mask {
  width: 100%;
  height: 50%;
  top: 53%;
  position: fixed;
  left: 0;
  z-index: 9;
  backdrop-filter: blur(0px);
  transition: all .3s;
  background-color: rgba($color: #000000, $alpha: 0);
}

.playNav span:hover~.playSummer,
.playSummer:hover {
  visibility: visible;
  height: 399px;
  opacity: 1;
}

.playNav span:hover~.playSummer~.mask,
.playSummer:hover~.mask {
  width: 100%;
  height: 70%;
  top: 53%;
  position: fixed;
  z-index: 9;
  backdrop-filter: blur(4px);
  background-color: rgba($color: #000000, $alpha: .3);
}
</style>
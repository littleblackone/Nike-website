<template>
  <div class="footerPart w-full h-full bg-[#111111] relative px-44 m7:px-4">
    <div class="pt-8 pb-32 pl-14 list-none flex gap-[10rem] justify-start m7:flex-col m7:gap-[2rem]">
      <ul class="text-white flex flex-col gap-4 text-[14px]">
        <a href="#">
          <li>电子礼品卡</li>
        </a>
        <a href="#">
          <li>企业团购</li>
        </a>
        <a href="#">
          <li>注册NIKE会员</li>
        </a>
      </ul>
      <ul class="footerNav text-[#7e7e7e] text-[10px] flex flex-col gap-4 m7:gap-2">
        <a href="#">
          <li class="text-white text-[14px]">获得帮助</li>
        </a>
        <a href="#">
          <li>订单状态</li>
        </a>
        <a href="#">
          <li>配送方式</li>
        </a>
        <a href="#">
          <li>退换货</li>
        </a>
        <a href="#">
          <li>付款选项</li>
        </a>
        <a href="#">
          <li>联系我们</li>
        </a>
      </ul>
      <ul class="footerNav text-[#7e7e7e] text-[10px] flex flex-col gap-4 m7:gap-2">
        <a href="#">
          <li class="text-[14px] text-white">关于NIKE</li>
        </a>
        <a href="#">
          <li>新闻</li>
        </a>
        <a href="#">
          <li>投资者</li>
        </a>
        <a href="#">
          <li>招纳贤士</li>
        </a>
      </ul>
    </div>
    <div class="flex items-center absolute bottom-3 left-[14rem] m7:flex-col m7:bottom-1 m7:left-[1rem] m7:items-start">
      <locationSvg class=" m7:absolute m7:translate-x-[-2]"></locationSvg>
      <span class="text-[12px] text-white pl-2 m7:pl-4">中国大陆</span>
      <span class="text-[#7e7e7e] text-[6px] pl-6 m7:pl-1">© 2023 Nike, Inc. 保留所有权利</span>
    </div>
    <!-- footer 右边部分 -->
    <div class="flex items-center absolute top-8 right-16 gap-6">
      <div class="weChat rounded-full group cursor-pointer">
        <weChatSvg class="group-hover:fill-[#ffffff] duration-150 cursor-pointer scale-[1.5]"></weChatSvg>
      </div>
      <div class="rounded-full group cursor-pointer">
        <a href="#">
          <weiboSvg class="group-hover:fill-[#ffffff] duration-150 scale-[1.5]"></weiboSvg>
        </a>
      </div>
      <img src="@/assets/images/qrCode.png" alt="二维码"
        class="qrCode w-full h-auto scale-[1.8] absolute bottom-[-8.2rem] left-[-1.2rem]">
    </div>
    <div class="bottom-14 right-16 absolute list-none m7:right-4 m7:bottom-[12rem]">
      <ul class="footerNav2 flex gap-4 text-[10px] text-[#7e7e7e] m7:grid m7:grid-cols-1">
        <a href="#">
          <li>分类浏览</li>
        </a>
        <a href="#">
          <li>使用条款</li>
        </a>
        <a href="#">
          <li>销售条款</li>
        </a>
        <a href="#">
          <li>隐私政策</li>
        </a>
        <a href="#">
          <li>沪ICP备14009339号-3</li>
        </a>
        <a href="#">
          <li class="flex gap-1 items-center"><img src="@/assets/images/business.png" alt="上海工商" class="">
            上海工商
          </li>
        </a>
      </ul>
    </div>
    <div class="bottom-2 right-16 absolute text-[10px] text-[#7e7e7e] m7:right-2 m7:bottom-[10rem]">
      <a href="#" class="flex gap-1 items-center">
        <img src="@/assets/images/police.png" alt="网安" class="">
        <span class="hover:text-white">沪公网安备31011002000177号</span>
      </a>
    </div>
    <div class="categoryhover absolute bottom-[52px] right-[472px] bg-transparent w-[4rem] h-[1.5rem]"></div>
    <div
      class="categoryLinks z-9999 absolute bottom-8 right-8 flex gap-[5rem] bordg border-[2px] pt-6 pl-8 pb-4 pr-32 text-[10px] text-[#7e7e7e] bg-[#111111]">
      <ul class="category">
        <li><a href="#">儿童</a></li>
        <li><a href="#">Nike FlyEase</a></li>
        <li><a href="#">Nike React</a></li>
        <li><a href="#">NBA</a></li>
      </ul>
      <ul class="category">
        <li><a href="#">Nike Air Force 1</a></li>
        <li><a href="#">Nike Flyknit</a></li>
        <li><a href="#">Nike ZoomX</a></li>
      </ul>
      <ul class="category">
        <li><a href="#">Nike Air Max</a></li>
        <li><a href="#">Nike Free</a></li>
        <li><a href="#">Nike Zoom Fly</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import locationSvg from './SvgIcons/locationSvg.vue';
import weChatSvg from './SvgIcons/weChatSvg.vue';
import weiboSvg from './SvgIcons/weiboSvg.vue';
</script>

<style scoped>
.footerNav a:not(:first-child):hover {
  color: white;
}

.qrCode {
  opacity: 0;
  transition: all .3s;
}

.weChat:hover~.qrCode {
  opacity: 1;
}

.footerNav2 li:hover {
  color: white;
}

.category li:not(:last-child) {
  margin-bottom: 1rem;
}

.category li:hover {
  color: white;
}

.categoryLinks {
  opacity: 0;
  height: 0;
  width: 0;
  /* padding: 0; */
  border: none;
  overflow: hidden;
  transform: scale(0);
  transition: all .3s;
}

.categoryhover:hover~.categoryLinks,
.categoryLinks:hover {
  opacity: 1;
  height: fit-content;
  width: fit-content;
  /* padding: 1.5rem 8rem 1rem 2rem; */
  border: 2px solid white;
  overflow: visible;
  transform: scale(1);
}
</style>

<template>
  <!-- 超级主题日部分 -->
  <div class="px-12">
    <figure>
      <a href="#">
        <img src="@/assets/images/hero.png" alt="超级主题日img" class="w-full h-full m8:hidden" />
        <img src="@/assets/images/smallhero.jpg" alt="超级主题日img" class="w-full h-full hidden m8:block" />
        <figcaption class="mx-auto mt-12 text-center m5:text-start m7:mt-6">
          <h1 class="text-[2rem] mb-6 m4:text-[1.8rem] m8:text-[1.6rem]">超级主题日 女生玩趣单品</h1>
          <h2 class="mb-6 m4:text-[.8rem] m8:text-[.6rem]">臻选产品低至5折,&nbsp;指定产品至高享2件5折优惠。</h2>
          <buyButton text="即刻选购"></buyButton>
        </figcaption>
      </a>
    </figure>
  </div>
  <!-- 男鞋推荐榜单 -->
  <div class="px-8 mt-[5rem]">
    <h1 class="pl-4 mb-6 text-[1.5rem]">6.18男鞋推荐榜单</h1>
    <carousel :items-to-show="isWideScreen ? 1 : 3" :mouseDrag="false" class="z-1">
      <slide v-for="shoe in shoes" :key="shoe.name">
        <div @click="checkOut(shoe)">
          <router-link to="/">
            <img :src="`${shoe.src}`" :alt="`${shoe.name}`" class="w-[30vw] z-0 m6:w-[50vw]">
            <div class="mt-4 flex justify-between m6:flex-col">
              <div class=" flex flex-col gap-2 items-start">
                <span class=" m3:text-[8px]">{{ shoe.name }}</span>
                <span class=" text-gray-500 m3:text-[8px]">{{ shoe.name_cn }}</span>
              </div>
              <div class="flex gap-1 m6:mt-2">
                <span class="old_price relative m3:text-[8px]">
                  {{ shoe.old_price }}
                </span>
                <span class="m3:text-[8px]">{{ shoe.new_price }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <!-- 心选好物多件多折 -->
  <div class="px-12 mt-[5rem]">
    <h1 class="text-2xl mb-5">心选好物多件多折</h1>
    <h2 class="mb-4">(全站商品可参与凑单，部分商品除外)</h2>
    <div class="flex gap-3 m6:flex-col">
      <a href="#"><img src="@/assets/images/ad1.png" alt="鞋子广告img1" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
      <a href="#"><img src="@/assets/images/ad2.png" alt="鞋子广告img2" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
    </div>
  </div>
  <!-- 超级主题日 -->
  <div class="px-12 mt-[5rem]">
    <h1 class="text-2xl mb-5">超级主题日</h1>
    <div class="flex gap-3 m6:flex-col">
      <a href="#"><img src="@/assets/images/ad4.png" alt="鞋子广告img3" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
      <a href="#"><img src="@/assets/images/hp.jpg" alt="衣服广告img1" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
    </div>
  </div>
  <!-- 街舞系列 -->
  <div class="px-12 mt-[5rem]">
    <a href="#">
      <img src="@/assets/images/hero2.png" alt="街舞系列img" class="h-full w-full" />
      <div class="text-center mt-12 m5:text-start">
        <h1 class="text-3xl mb-8 m4:text-[1.6rem] m8:text-[1.4rem]">新一季街舞专属系列登场</h1>
        <buyButton text="立即入手"></buyButton>
      </div>
    </a>
  </div>
  <!-- 六一 系列-->
  <div class="px-12 mt-[5rem] relative">
    <!-- <img src="@/assets/images/hero3.png" alt="六一系列img" class="h-full w-full" /> -->
    <video src="@/assets/videos/61ad.mp4" poster="@/assets/images/hero3.png" preload="auto" class="h-full w-full"
      ref="videoRef" @playing="handleVideoPlaying" @loadedmetadata="handleVideoLoaded" :controls="isPlaying"></video>
    <div class="text-center mt-12 m5:text-start m8:mt-6">
      <h1 class="text-3xl mb-8 m4:text-[1.6rem] m8:text-[1.4rem]">爸妈说GO | 卡卡 有办法</h1>
      <h2 class="mb-8 m4:text-[.8rem] m8:text-[.6rem]">爸爸妈妈，这个六一，来看我的超能力!</h2>
      <buyButton text="逆袭装备,即刻GET"></buyButton>
    </div>
    <span v-show="!isPlaying"
      class="text-white text-[1.4rem] absolute top-[2rem] m8:top-[1rem] left-[6rem] m8:left-[4.5rem] m8:text-[4px]">
      {{ formattedTime }}
    </span>
    <button @click="playVideo" v-show="!isPlaying"
      class="outline-none hover:bg-gray-300 rounded-full flex items-center justify-center gap-2 px-[22px] py-[6px] m8:px-[6px] m8:py-[1px] m8:text-[4px] bg-white absolute bottom-[16rem] left-[7rem] m8:bottom-[12rem] m8:left-[4rem] ">
      <span>观看</span>
      <smallArrow />
    </button>
  </div>
  <!-- 女足国家队 -->
  <div class="px-12 mt-[5rem]">
    <a href="#">
      <img src="@/assets/images/ad5.png" alt="女足img" class="h-full w-full" />
      <div class="text-center mt-12 m8:mt-6 m5:text-start">
        <h1 class="text-3xl mb-8 m4:text-[1.6rem] m8:text-[1.4rem]">共襄盛事 为女足国家队助威</h1>
        <buyButton text="立即购买"></buyButton>
      </div>
    </a>
  </div>
  <!-- nike motiva -->
  <div class="px-12 mt-[5rem]">
    <a href="#">
      <img src="@/assets/images/hp2.jpg" alt="Nike motiva img" class="h-full w-full" />
      <div class="text-center mt-12 m5:text-start m8:mt-6">
        <h1 class="text-3xl mb-8 m4:text-[1.6rem] m8:text-[1.4rem]">跟着 Nike Motiva 开启城市漫游</h1>
        <h2 class="mb-8 m4:text-[.8rem] m8:text-[.6rem]">上脚即舒适，浪感不掉线，随你怎么走</h2>
        <buyButton text="立即选购"></buyButton>
      </div>
    </a>
  </div>
  <!-- 这夏天,有看头 -->
  <div class="px-12 mt-[5rem]">
    <h1 class="text-2xl mb-5">这夏天 有看头</h1>
    <div class="flex gap-3 m6:flex-col">
      <a href="#"><img src="@/assets/images/hp3.jpg" alt="男子装备img" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
      <a href="#"><img src="@/assets/images/hp4.jpg" alt="女子装备img" class="h-auto min-w-[20rem] m8:min-w-[16rem]" /></a>
    </div>
  </div>
  <!-- 定制广告 -->
  <div class="mt-[5rem]">
    <a href="#"><img src="@/assets/images/customAd.png" alt="定制鞋子img" class="h-full w-full" /></a>
  </div>
  <!-- Nike App 专属福利 -->
  <div class="px-12 mt-[5rem]">
    <h1 class="text-2xl mb-5">Nike App专属福利</h1>
    <div class="flex gap-3 m6:flex-col">
      <div class="flex-1 h-full w-full">
        <img src="@/assets/images/hp.webp" alt="Nike App img" class="" />
      </div>
      <div class="overflow-hidden z-1 h-full w-full flex-1 relative cursor-pointer" @mousemove="isHover = true"
        @mouseleave="waitAndHideIcon">
        <video ref="videoRef2" src="@/assets/videos/hiphop.mp4" autoplay :muted="videoState.isMuted" loop preload="auto"
          @click="toggleVideo"></video>
        <!-- 自定义音量控制组件 -->
        <transition name="fade" mode="out-in">
          <div class="" v-show="isHover" @click="toggleAudio">
            <div v-show="videoState.isMuted" class="absolute bottom-[10px] left-[1rem] cursor-pointer">
              <muteSvg></muteSvg>
            </div>
            <div v-show="!videoState.isMuted" class="absolute bottom-[10px] left-[1rem] cursor-pointer">
              <unMuteSvg></unMuteSvg>
            </div>
          </div>
        </transition>
        <!-- <transition name="fade" mode="out-in">
          <div @mouseup.stop="stopDrag" class="absolute w-[68px] h-[6px] bottom-[46px] left-[68px] p-1"
            v-show="isHover && !videoState.isMuted">
            <div @click.stop="adjustVolumeClick" @mousemove.stop="adjustVolumeDrag"
              class="z-10 absolute bottom-[1px] left-[1px] w-[68px] h-[6px] bg-gray-400 rounded-full"></div>
            <div @click.stop="adjustVolumeClick" :style="{ width: (volumePercentage + 15) + '%' }"
              @mousemove.stop="adjustVolumeDrag"
              class=" z-20 absolute bottom-[1px] left-[1px] h-[6px] bg-gray-700 rounded-full"></div>
            <div :style="{ left: (volumePercentage - 3) + '%' }" @mousedown.stop="startDrag" @mouseup.stop="stopDrag"
              class=" z-30 w-[12px] h-[12px] rounded-full bg-black absolute bottom-[0.5px]">
            </div>
          </div>
        </transition> -->
        <transition name="fade" mode="out-in">
          <div v-show="isHover" class="absolute">
            <el-slider v-model="volumeValue" vertical height="50px" />
          </div>
        </transition>
      </div>
    </div>
  </div>
  <!-- 底部菜单 -->
  <div
    class="bottomMenu mt-[5rem] mb-[4rem] justify-center flex gap-16 list-none px-12 m6:flex-col m6:gap-2 m6:pointer-events-none">
    <div class="bottomNav">
      <h2 class="mb-6">经典系列</h2>
      <ul class=" text-gray-500 m6:hidden">
        <li><a href="#">AF1</a></li>
        <li><a href="#">AJ1</a></li>
        <li><a href="#">BLAZER</a></li>
        <li><a href="#">老爹鞋</a></li>
        <div class="hiddenNav">
          <li><a href="#">AIR MAX</a></li>
          <li><a href="#">NIKE</a></li>
          <li><a href="#">SPORTSWEAR</a></li>
          <li><a href="#">NikeLab</a></li>
        </div>
      </ul>
    </div>
    <div class="bottomNav">
      <h2 class="mb-6">鞋类</h2>
      <ul class="text-gray-500 m6:hidden">
        <li><a href="#">所有鞋类</a></li>
        <li><a href="#">Jordan</a></li>
        <li><a href="#">休闲</a></li>
        <li><a href="#">跑步</a></li>
        <div class="hiddenNav">
          <li><a href="#">篮球</a></li>
          <li><a href="#">拖鞋</a></li>
          <li><a href="#">足球</a></li>
          <li><a href="#">健身/训练</a></li>
        </div>
      </ul>
    </div>
    <div class="bottomNav">
      <h2 class="mb-6">服装</h2>
      <ul class="text-gray-500 m6:hidden">
        <li><a href="#">所有服装</a></li>
        <li><a href="#">上衣/T恤</a></li>
        <li><a href="#">短裤</a></li>
        <li><a href="#">短裤/连衣裙</a></li>
        <div class="hiddenNav">
          <li><a href="#">休闲裤</a></li>
          <li><a href="#">连衣帽/卫衣</a></li>
          <li><a href="#">外套/夹克</a></li>
          <li><a href="#">运动裤/紧身裤</a></li>
          <li><a href="#">球衣</a></li>
          <li><a href="#">运动内衣</a></li>
        </div>
      </ul>
    </div>
    <div class="bottomNav">
      <h2 class="mb-6">配件</h2>
      <ul class="text-gray-500 m6:hidden">
        <li><a href="#">包</a></li>
        <li><a href="#">袜子</a></li>
        <li><a href="#">帽子和头戴</a></li>
        <li><a href="#">球类</a></li>
      </ul>
    </div>
    <div class="bottomNav">
      <h2 class="mb-6">儿童</h2>
      <ul class="text-gray-500 m6:hidden">
        <li><a href="#">所有儿童鞋类</a></li>
        <li><a href="#">儿童穿脱自如鞋类</a></li>
        <li><a href="#">儿童休闲鞋类</a></li>
        <li><a href="#">儿童跑步鞋类</a></li>
        <div class="hiddenNav">
          <li><a href="#">所有儿童服装</a></li>
          <li><a href="#">儿童上衣和T恤</a></li>
          <li><a href="#">儿童长裤和紧身裤</a></li>
          <li><a href="#">儿童短裤</a></li>
          <li><a href="#">儿童短裙和连衣裙</a></li>
          <li><a href="#">儿童夹克和马甲</a></li>
          <li><a href="#">所有儿童配件</a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, Ref, ref, toRefs, watch } from "vue";
import buyButton from "./Buttons/buyButton.vue";
import smallArrow from "@/components/SvgIcons/smallArrow.vue";
import unMuteSvg from "./SvgIcons/unMuteSvg.vue";
import muteSvg from "./SvgIcons/muteSvg.vue";
import { formatTime } from "@/utils/helperFun";
import shoes from "@/assets/shoes.json";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from "axios";

//61儿童节活动视频自定义功能
const formattedTime = ref("00:00");
const isPlaying = ref(false);
const videoRef: Ref<HTMLVideoElement | null> = ref(null);
const handleVideoPlaying = () => {
  isPlaying.value = true;
};
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
    isPlaying.value = true;
  }
};
const handleVideoLoaded = () => {
  if (videoRef.value) {
    const videoDuration = videoRef.value.duration;
    formattedTime.value = formatTime(videoDuration);
  }
};
//hip-hop视频自定义功能
const videoRef2: Ref<HTMLVideoElement | null> = ref(null);
const isHover = ref(false);
const videoState = reactive({
  isMuted: true,
  isPlaying2: true
});
const toggleAudio = () => {
  videoState.isMuted = !videoState.isMuted;
};
const toggleVideo = () => {
  if (videoRef2.value) {
    if (!videoRef2.value.paused) {
      videoRef2.value.pause();
    } else {
      videoRef2.value.play();
    }
  }
};
const waitAndHideIcon = () => {
  setTimeout(() => {
    isHover.value = false;
  }, 3000);
};
// Element plus的slider组件
const volumeValue = ref(0);
const { isMuted } = toRefs(videoState);
//利用监听函数 只要slider组件的值发生变化，就改变视频实例的volume值，达到控制音量的效果。
// 这里使用watch可以更加精确的控制某一个值，如果要监听多个，建议用watchEffect
watch(volumeValue, (newValue) => {
  if (videoRef2.value && newValue > 0) {
    isMuted.value = false;
    videoRef2.value.volume = newValue / 100
  }
})
// const isMutedRef = toRef(videoState, "isMuted")
// const isMutedRef = ref(videoState.isMuted)
//监听是不是静音，如果是，就重置slider的值为0，否则将视频实例的音量值赋给slider的值
watch(isMuted, () => {
  if (videoRef2.value) {
    if (isMuted.value) {
      volumeValue.value = 0
    } else {
      volumeValue.value = videoRef2.value.volume
    }
  }
})

//发送stripe请求
const checkOut = async (shoe) => {
  try {
    const response = await axios.post('http://localhost:3000/create-checkout-session', { shoe });
    window.location.href = response.data.redirectUrl;
  } catch (error) {
    console.log(error);
  }
};

//轮播图动态显示
const isWideScreen = ref(false);
onMounted(() => {
  const minWidth = window.matchMedia('(max-width: 800px)').matches;
  isWideScreen.value = minWidth;

  const handleResize = () => {
    const minWidth = window.matchMedia('(max-width: 800px)').matches;
    isWideScreen.value = minWidth;
  };

  window.addEventListener('resize', handleResize);
});

//自定义调整音量组件
// const isDragging = ref(false);
// // const smallBar: Ref<HTMLDivElement | null> = ref(null);
// const volumePercentage = ref(0);
// const startDrag = () => {
//   isDragging.value = true;
//   console.log("开始拖动");
// };
// const stopDrag = () => {
//   isDragging.value = false;
//   console.log("结束拖动");
// };
// const calculatePercentage = (e: MouseEvent) => {
//   // const volumeBar = e.target as HTMLElement;
//   // const boundingRect = volumeBar.getBoundingClientRect();
//   // const offsetX = e.clientX - boundingRect.left;
//   // const width = boundingRect.width;
//   // return Math.max(0, Math.min(1, offsetX / width));
//   const volumeBar = e.target as HTMLElement;
//   const offsetX = e.offsetX;
//   const width = volumeBar.clientWidth;
//   return Math.max(0, Math.min(1, offsetX / width));
// };
// const adjustVolumeClick = (e: MouseEvent) => {
//   console.log(e.target);
//   const percentage = calculatePercentage(e);
//   volumePercentage.value = Math.round(percentage * 100);
//   console.log('点击：', volumePercentage.value, percentage);
//   if (videoRef2.value) {
//     videoRef2.value.volume = percentage;
//   }
// };
// const adjustVolumeDrag = (e: MouseEvent) => {
//   if (isDragging.value) {
//     const percentage = calculatePercentage(e);
//     volumePercentage.value = Math.round(percentage * 100);
//     console.log('拖动：', volumePercentage.value, percentage);

//     if (videoRef2.value) {
//       videoRef2.value.volume = percentage;
//     }
//   }
// };
</script>

<style lang="scss" >
/* 过渡样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter {
  opacity: 0;
  /* display: none; */
}

.fade-enter-active {
  opacity: 1;
  /* display: block; */
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
}

/* slider样式 */
.el-slider {
  --el-slider-button-size: 12px;
  --el-slider-main-bg-color: #ffffff;
  bottom: 88px;
  left: 6px;
}

.bottomNav ul>li:not(:last-child) {
  margin-bottom: .8rem;
}

.bottomNav {
  width: 128px;
}

.bottomNav li {
  transition: all .3s;
}

.bottomNav li:hover {
  color: #111;
}

.hiddenNav li:not(:last-child) {
  margin-bottom: .8rem;
}

.hiddenNav {
  opacity: 0;
  transition: all .4s;
  height: 0;
}

.bottomMenu:hover .hiddenNav {
  opacity: 1;
  height: fit-content;
}

.bottomMenu {
  height: 195px;
  transition: all .4s;
}

.bottomMenu:hover {
  height: 454px;
}

//old price
.old_price::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #111;
  position: absolute;
  top: 21%;
}

@media (max-width: 800px) {
  .old_price::before {
    top: 40%;
  }
}

.carousel__prev,
.carousel__next {
  top: 41% !important;
}
</style>

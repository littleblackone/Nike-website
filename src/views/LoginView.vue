<template>
  <div class=" flex mt-[1.5rem] justify-center bg-white">
    <div class=" relative flex flex-col">
      <nikelogoSvg class="scale-[2.8] translate-x-4 mb-5"></nikelogoSvg>
      <h1 class="text-[1.8rem] mb-4">输入你的电子邮箱加入或登录</h1>
      <!-- 用户名 -->
      <div class="mb-8">
        <span class=" absolute top-[5.7rem] left-[.8rem] text-[12px] p-1 text-gray-400 bg-white z-10">用户名</span>
        <input type="text" placeholder="name" v-model="name"
          class=" outline-none rounded-[6px] py-4 px-4 w-[400px] border border-black">
        <!-- name验证信息 -->
        <p v-if="errors.name" class="text-red-500 mt-2 text-sm">{{ errors.name }}</p>
      </div>
      <!-- 电子邮件 -->
      <div class=" relative">
        <span class=" absolute top-[-1rem] left-[.8rem] text-[12px] p-1 text-gray-400 bg-white z-10">电子邮件</span>
        <input type="email" v-model="email" placeholder="Email"
          class=" outline-none rounded-[6px] py-4 px-4 w-[400px] border border-black">
        <!-- email验证信息 -->
        <p v-if="errors.email" class="text-red-500 mt-2 text-sm">{{ errors.email }}</p>
      </div>
      <!-- checkbox -->
      <div class="flex gap-6 items-center mt-8">
        <input type="checkbox" v-model="checked" class="outline-none scale-150 rounded-md">
        <span>
          我同意Nike的
          <a href="#" class=" font-semibold border-b border-black">隐私政策</a>和
          <a href="#" class=" font-semibold border-b border-black">使用条款</a>
        </span>
      </div>
      <!-- 显示登录失败信息 -->
      <p v-if="loginError" class="text-red-500 mt-2">{{ loginError }}</p>
      <router-link to="/register" class=" ml-auto">
        <span class=" text-gray-400 hover:text-gray-500 border-b border-b-gray-400">注册</span>
      </router-link>
      <button type="submit" @click="handleLogin"
        class="mt-8 float-right rounded-full hover:bg-opacity-60 bg-black text-white py-[6px] px-[22px]">
        继续
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import nikelogoSvg from '@/components/SvgIcons/nikelogoSvg.vue';
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useUserStore } from '@/stores/user'

const name = ref("")
const email = ref("")
const checked = ref(false);
const errors = ref({
  name: '',
  email: ''
});
//使用封装在pinia中的login方法登录。
const userStore = useUserStore();

//初次进入登录页面时，清空loginError
onBeforeMount(() => {
  userStore.loginError = ""
});

let loginError = computed(() => userStore.loginError)
// const loginError = ref(userStore.loginError)
const handleLogin = async (): Promise<void> => {
  await userStore.Login(name.value, email.value, checked.value)
}

watch([name, email], ([newName, newEmail]) => {
  if (!newName.trim()) {
    // 如果用户名为空，显示错误信息
    errors.value.name = '请输入用户名';
  } else {
    errors.value.name = '';
  }

  if (!newEmail.trim()) {
    // 如果电子邮件为空，显示错误信息
    errors.value.email = '请输入电子邮件地址';
  } else if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
    // 如果电子邮件格式不正确，显示错误信息
    errors.value.email = '电子邮件格式不正确';
  } else {
    errors.value.email = '';
  }
});
</script>

<style scoped></style>
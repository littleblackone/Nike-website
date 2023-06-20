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
      <!-- 验证码 -->
      <div class="flex gap-1 items-center mt-8 justify-start">
        <span class="">验证码:</span>
        <div class="flex items-center">
          <input type="text" v-model="code" class="outline-none rounded-[2px] py-2 px-1 w-[200px] border border-black">
          <button @click="handleSendCode" :disabled="showResendCode"
            class="hover:bg-opacity-60 bg-black rounded-r-[2px] text-white py-[8px] px-[16px] translate-x-[-4rem] mr-1">发送</button>
          <span v-show="showResendCode" class=" translate-x-[-60px]">{{ resendCodeTimeout }}s后重新发送</span>
        </div>
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
      <!-- 显示注册失败信息 -->
      <p v-if="registerError" class="text-red-500 mt-2">{{ registerError }}</p>
      <button type="submit" @click="handleRegister"
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
import axios from "axios"

const name = ref("")
const email = ref("")
const checked = ref(false);
const code = ref("")
const resendCodeTimeout = ref(60);
const showResendCode = ref(false)
const errors = ref({
  name: '',
  email: ''
});


//初次进入登录页面时，清空loginError
onBeforeMount(() => {
  userStore.registerError = ""
});

let registerError = computed(() => userStore.registerError)

//发送验证码
const handleSendCode = async () => {
  //如果正在倒计时，则什么都不做
  if (showResendCode.value) {
    return
  }
  //发送验证码
  await axios.post("http://localhost:3000/sendCode");
  //倒计时
  resendCodeTimeout.value = 60
  showResendCode.value = true;
  const interval = setInterval(() => {
    resendCodeTimeout.value--
    if (resendCodeTimeout.value == 0) {
      showResendCode.value = false
      clearInterval(interval)
    }
  }, 1000)
}

//使用封装在pinia中的register方法登录。
const userStore = useUserStore();
const handleRegister = async () => {
  await userStore.register(name.value, email.value, checked.value, code.value)
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
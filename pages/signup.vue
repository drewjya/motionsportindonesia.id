import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
import { ref } from "vue";

import VOtpInput from "vue3-otp-input";

enum Step {
  signup,
  verif,
  signupsucces,
}
let stepForm = ref(Step.signup);
const signUp = () => {
  //.... do validation
  //.... do sign up trans
  var isSuccess = true;
  if (isSuccess) {
    stepForm.value = Step.verif;
  }
};

const verif = () => {
  //.... do validation
  //.... do verif trans
  var isSuccess = true;
  if (isSuccess) {
    stepForm.value = Step.signupsucces;
  }
};

const signupsucces = () => {
  var isSuccess = true;
  if (isSuccess) {
  }
};

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value: string) => {
  console.log("OTP changed: ", value);
};

const clearInput = () => {
  otpInput.value?.clearInput();
};

const fillInput = (value: string) => {
  console.log(value);
  otpInput.value?.fillInput(value);
};
</script>

<template>
  <div class="w-full flex items-center justify-center h-full">
    <div
      class="rounded-[4rem] border w-[60%] py-2"
      style="background-color: #ebeef3"
    >
      <div
        v-if="stepForm === Step.signup"
        id="dForm"
        class="flex flex-col m-12 h-full gap-5"
      >
        <div class="font-bold font-sans text-4xl text-center">Sign Up</div>

        <div class="flex flex-col gap-4">
          <UFormGroup label="Nama">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput input-class="focus:ring-0 rounded-2xl" />
          </UFormGroup>

          <UFormGroup label="Email">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput input-class="focus:ring-0 rounded-2xl" />
          </UFormGroup>

          <UFormGroup label="Password">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput input-class="focus:ring-0 rounded-2xl" />
          </UFormGroup>
          <UFormGroup label="Confirm Password">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput input-class="focus:ring-0 rounded-2xl" />
          </UFormGroup>

          <UButton
            id="btnSignUp"
            @click="signUp"
            variant="solid"
            color="black"
            class="px-5 justify-center text-white hover:bg-gray-500 mt-2"
            style="he"
            >Submit</UButton
          >
        </div>
        <NuxtLink to="/login" class="hover:underline"
          >Sudah Punya Akun</NuxtLink
        >
      </div>

      <div
        v-if="stepForm === Step.verif"
        id="dVerif"
        class="flex flex-col m-12 h-full gap-5 justify-center items-center"
      >
        <div class="font-bold font-sans text-4xl text-center">Verification</div>

        <div class="font-sans text-lg whitespace-normal w-[85%] text-center">
          Please verify your account on your email. Enter the codes we've sent
          to your account.
        </div>

        <div class="flex justify-center">
          <v-otp-input
            ref="otpInput"
            v-model:value="bindModal"
            input-classes="w-10 border-2 border-black rounded-lg h-10 flex justify-center items-center text-2xl font-bold text-center"
            separator="-"
            :num-inputs="6"
            :should-auto-focus="true"
            input-type="letter-numeric"
            :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
            :placeholder="['*', '*', '*', '*', '*', '*']"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        </div>
        <div class="w-full h-[8%] flex justify-center">
          <UButton
            @click="verif"
            variant="solid"
            color="black"
            class="justify-center text-white hover:bg-gray-500 text-lg px-5"
            style="he  "
            >Submit</UButton
          >
        </div>
      </div>

      <div
        v-if="stepForm === Step.signupsucces"
        id="dSuccess"
        class="flex flex-col m-6 h-full items-center gap-4"
      >
        <span class="font-semibold font-sans text-3xl flex justify-center">
          NICE!</span
        >

        <div class="font-sans text-xl whitespace-normal w-[85%] text-center">
          Your email account has been registered. Now you can login using your
          email account. Keep your credential safe and enjoy your shopping time.
        </div>

        <div class="w-full h-[8%] flex justify-center">
          <NuxtLink to="/login" class="w-full flex justify-center">
            <UButton
              variant="solid"
              color="black"
              class="flex justify-center text-white hover:bg-gray-500 text-xl"
              >Go to Login Page</UButton
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.2rem;
  font-family: sans-serif;
}
</style>

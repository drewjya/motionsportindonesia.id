import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
</script>

<template>
  <div class="w-full flex items-center justify-center  h-full">
    <div class="rounded-[4rem] border w-[40%]  h-[70%]" style="background-color: #EBEEF3;">

      <div id="dForm"  class="flex flex-col m-12 h-full" style="display: none;">
        <span class="font-bold font-sans text-4xl"> Sign Up</span> 

        <label class="font-sans text-3xl mt-4"> Name</label> 
        <input
          type="text"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <label class="font-sans text-3xl mt-4"> Email</label> 
        <input
          type="text"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <label class="font-sans text-3xl mt-4"> Password</label> 
        <input
          type="text"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <label class="font-sans text-3xl mt-4"> Confirm Password</label> 
        <input
          type="text"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <div class="w-full h-full mt-10 flex justify-center">
      <UButton
        variant="solid"
        color="black"
        class="w-1/4 h-1/2 justify-center text-white hover:bg-gray-500" style="he  "
        >Submit</UButton
      >
    </div>
      </div>


      <div id="dVerif"  class="flex flex-col m-12 h-full" style="display: none;">
        <span class="font-semibold font-sans text-5xl flex justify-center"> VERIFICATION</span> 

        <div class="flex justify-center mt-6">
          <label class="font-sans text-3xl mt-4 whitespace-normal w-[85%] "> Please verify your account on your email. Enter the codes we've sent to your account.</label> 
        </div>

        <div class="flex justify-center  mt-16 h-24">
          <div class="flex w-[85%] justify-between text-3xl">
            <input
              id="pinInput"
              name="pinInput"
              class="border rounded-2xl w-[15%] text-center"
              maxlength="1"
            />
            <input
              id="pinInput2"
              name="pinInput2"
              class="border rounded-2xl w-[15%] text-center" 
              maxlength="1"
            />
            <input
              id="pinInput3"
              name="pinInput3"
              class="border rounded-2xl w-[15%] text-center"
              maxlength="1"
            />
            <input
              id="pinInput4"
              name="pinInput4"
              class="border rounded-2xl w-[15%] text-center" 
              maxlength="1"
            />

            <input
              id="pinInput4"
              name="pinInput4"
              class="border rounded-2xl w-[15%] text-center" 
              maxlength="1"
            />

            <input
              id="pinInput4"
              name="pinInput4"
              class="border rounded-2xl w-[15%] text-center" 
              maxlength="1"
            />
        </div>
      </div>

        <div class="w-full h-[8%] mt-[15%]  flex justify-center">
      <UButton
        variant="solid"
        color="black"
        class="w-[30%] justify-center text-white hover:bg-gray-500 text-3xl" style="he  "
        >Submit</UButton
      >
    </div>
      </div>

      <div id="dSuccess"  class="flex flex-col m-12 h-full">
        <span class="font-semibold font-sans text-5xl flex justify-center"> NICE!</span> 

        <div class="flex justify-center mt-10">
          <label class="font-sans text-3xl mt-4 whitespace-normal w-[85%] "> Your email account has been registered. Now you can login using your email account. Keep your credential safe and enjoy your shopping time.</label> 
        </div>
        <div class="w-full h-[8%] mt-[28%]  flex justify-center">
          <NuxtLink to="/login" class="w-full flex justify-center" >
      <UButton
        variant="solid"
        color="black" 
        class="w-[40%] flex justify-center text-white hover:bg-gray-500 text-2xl" 
        >Go to Login Page</UButton
      >
    </NuxtLink>
    </div>
      </div>

      </div>
  </div>



</template>

<style scoped></style>

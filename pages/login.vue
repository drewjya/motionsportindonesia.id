import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
</script>

<template>
  <div class="w-full flex items-center justify-center  h-full">
    <div class="rounded-[4rem] border w-[40%]  h-[70%]" style="background-color: #EBEEF3;">

      <div id="dForm"  class="flex flex-col m-12 h-full">
        <span class="font-bold font-sans text-4xl"> Login</span> 

        <label class="font-sans text-3xl mt-4"> Name</label> 
        <input
          type="text"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <label class="font-sans text-3xl mt-4"> Email</label> 
        <input
          type="email"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <label class="font-sans text-3xl mt-4"> Password</label> 
        <input
          type="password"
          id="myInput"
          name="myInput"
          class="mt-2 p-2 border rounded-3xl w-full text-xl"
        />

        <div class="w-full h-[8%] mt-[10%]  flex justify-center">
          <NuxtLink to="/" class="w-full flex justify-center" >
            <UButton
              variant="solid"
              color="black" 
              class="w-[40%] flex justify-center text-white hover:bg-gray-500 text-2xl" 
              >Submit</UButton>
         </NuxtLink>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped></style>

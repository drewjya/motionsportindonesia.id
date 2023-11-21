<script lang="ts" setup></script>

<template>
  <div class="py-4">
    <div
      class="w-ful h-[50vh] bg-neutral-800 rounded-md border-2 grid grid-cols-2"
    >
      <div class="col-span-1 flex flex-col text-white">
        <div class="text-white about-title px-3 pt-4 pb-2">About Us</div>
        <div class="mx-3 w-20 h-7 border border-white"></div>
        <div class="grow bg-zinc-300 m-3 mt-2">
          <div class="text-black text-xl font-normal font-['ABeeZee']">
            Motion Sports Indonesia adalah sebuah ......................
          </div>
        </div>
      </div>
      <div class="col-span-1 relative">
        <nuxt-img
          src="/image_tes.png"
          class="absolute w-full h-full opacity-60"
        ></nuxt-img>

        <div class="absolute text-white bottom-2 left-2">
          <div class="text-white text-lg font-normal font-['DM Sans']">
            Debits - 03 June 2023
          </div>
          <div
            class="text-white text-2xl font-normal font-['ABeeZee'] capitalize italic"
          >
            Worn by Famous team <br />members in tournament
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-title {
  font-family: "Poppins";

  font-style: italic;
  font-weight: 400;
}

.image_data {
  background: url("~/assets/image_tes.png"), lightgray 50% / cover no-repeat;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>

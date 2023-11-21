<script lang="ts" setup>
let color = ["bg-[#D93F3F]", "bg-[#73DBE2]", "bg-[#6978FF]"];
</script>

<template>
  <div class="py-4 pb-8">
    <div class="h-[30vh] lg:h-[45vh] w-full grid grid-cols-2 gap-4 lg:gap-6">
      <div class="col-span-1 flex flex-col gap-4">
        <div
          class="text-neutral-800 text-xl font-normal font-['ABeeZee'] italic"
        >
          Customize your Jersey here
        </div>
        <div class="grow grid grid-cols-2 gap-2">
          <div class="col-span-1 relative">
            <nuxt-img src="/customize_jersey.png" class="h-full"></nuxt-img>
            <div
              class="absolute bottom-0 h-14 lg:h-24 w-full bg-gradient-to-t from-slate-50 to-indigo-600"
            ></div>
          </div>
          <div class="col-span-1 bg-gray-100 p-2">
            <div
              v-for="(i, index) in color"
              :key="i"
              class="flex gap-4 lg:gap-5"
            >
              <div>
                <div :class="i" class="w-14 lg:w-20 h-14 lg:h-20"></div>

                <div class="h-2" v-if="index != color.length - 1"></div>
              </div>
              <div
                class="text-sm lg:text-base text-neutral-800 font-['ABeeZee']"
              >
                <div
                  class="text-xs text-neutral-800 text-opacity-60 font-['DM Sans']"
                >
                  50% OFF
                </div>
                <div>Jersey</div>
                <div>100K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <div
          class="text-neutral-800 text-xl font-normal font-['ABeeZee'] italic"
        >
          News
        </div>
        <nuxt-img class="grow" src="/news.png"></nuxt-img>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

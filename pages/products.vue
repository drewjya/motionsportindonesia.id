import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
];

let datas: any[] = [];
for (let i=0;i<16;i++){
  datas.push({
    ProductName: "Product " + i,
    Price: (10000 * (1+i)).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    Status: i%2==0? "Sold Out": "Available"
  }) 
}

const gridval = computed(() => {
  console.log(Math.round(datas.length / 4));
  return Math.round(datas.length / 4);
});

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="relative">
    <img src="~/assets/product_test.png" class="w-screen h-60 lg:h-96" />
    <div
      class="absolute h-full w-full top-0 bg-gradient-to-b from-zinc-300 to-neutral-800 opacity-[0.35] z-50"
    ></div>
    <div
      class="text-white text-4xl font-normal capitalize absolute bottom-0 z-[99] px-10 pb-8"
      style="font-family: Jockey One"
    >
      Customizable Jerseys<br />for you and your homies
    </div>
  </div>
  <div class="flex justify-between px-9 bg-gray-50 py-4 sticky">
    <div class="flex space-x-3">
      <UButton color="black" icon="i-heroicons-squares-2x2" />
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          class="bg-zinc-300 text-black hover:text-white w-52 justify-between items-center"
          color="black"
          variant="solid"
          block
          trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          Aturkan Berdasarkan
        </UButton>
      </UDropdown>
    </div>
    <div class="flex space-x-3">
      <UButton color="black" icon="i-heroicons-funnel" />
      <UDropdown
        :items="items"
        mode="hover"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          block
          class="bg-zinc-300 text-black w-52 justify-between hover:text-white items-center"
          color="black"
          variant="solid"
          :trailing="true"
          icon="i-heroicons-chevron-down-20-solid"
        >
          Filter</UButton
        >
      </UDropdown>
    </div>
  </div>
  <div class="m-12">
    <div v-for="(i, index) in gridval">
      <div class="text-red flex space-x-4 justify-star mb-4">
        <div v-for="(e, index2) in 4">
          <div v-if="datas[4 * index + index2] !== undefined" class="flex-1">
            <div class="relative transition-transform ease-in-out duration-300">
            <img
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt=""
            />
          </div>
            <div class="w-full bg-gray-300 rounded-b-3xl p-1 py-2"></div>
            <NuxtLink to="/product_details">
            <div class="mt-1 text-center text-base">
              <div class="font-sans font-semibold ">
                <a> {{ datas[4 * index + index2].ProductName }} </a><br />
                 Rp. {{ datas[4 * index + index2].Price }} <br />
                 {{ datas[4 * index + index2].Status }}
              </div>
            </div>
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-64 bg-red-200 relative">
      <img src="/products/1.png" alt="" class="h-full w-full absolute" />
    </div>
    <div class="w-[28rem] h-8 mt-12 mx-auto flex justify-between">
      <UButton
        variant="solid"
        color="black"
        class="w-28 justify-center text-white hover:bg-gray-500"
        icon="i-heroicons-backward"
        >Prev</UButton
      >
      <UButton
        variant="solid"
        color="black"
        class="w-28 justify-center hover:bg-gray-500"
        icon="i-heroicons-forward"
        >Next</UButton
      >
    </div>
  </div>
</template>

<style scoped></style>

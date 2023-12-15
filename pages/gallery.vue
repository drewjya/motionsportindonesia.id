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

const gallery_items = ref([
  { url: '/gallery/gallery-item1.png' }, 
  { url: '/gallery/gallery-item1.png' },
  { url: '/gallery/gallery-item1.png' },
  { url: '/gallery/gallery-item1.png' },
]);


definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="w-full">
    <div class="mx-32 flex-col">

      <!-- Image -->
      <img src="~/assets/gallery_img.png" class="w-full h-2/5"  />

      <!-- Filter & DropDown-->
      <div class="flex px-5 bg-gray-50 py-10 sticky">
        <div class="flex space-x-6">
          <UButton color="black" icon="i-heroicons-squares-2x2" size="xl"  />
          <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton
              class="bg-zinc-300 text-black hover:text-white w-96 justify-between items-center"
              color="black"
              variant="solid"
              block
              trailing-icon="i-heroicons-chevron-down-20-solid"
            >
              Aturkan Berdasarkan
            </UButton>
          </UDropdown>
        </div>
      </div>

      <!-- Section -->
      <div class="mx-26">
        <div class="w-1/5 border-2 border-solid border-black p-5 text-4xl text-center font-bold" style="font-family: DM Sans">
          Galeri Terbaru
        </div>
      </div>

      <!-- Gallery List-->
      <div class="flex-col my-16">
          <div v-for="(item, index) in gallery_items" :key="index" class="my-12 w-11/12">
            <div class="flex">

              <!-- Image Box-->
              <div class="relative">
                <img :src="item.url" class="w-screen h-full" :alt="`Image ${index}`" />
                <div
                  class="absolute w-full h-full bottom-0 bg-gradient-to-t from-black via-opacity-8 to-transparent"
                ></div>
                <div
                  class="text-white text-3xl font-normal capitalize absolute bottom-0 z-[99] px-10 pb-8"
                  style="font-family: Jockey One">
                  Ballers wear motion sports on court
                </div>
              </div>

              <!-- Image Description -->
              <div class="align-middle flex-col">
                  <div
                    class="text-black text-2xl font-bold capitalize pl-10 py-8"
                    style="font-family: DM Sans">
                    20 Sept 2023
                  </div>
                  <div
                    class="text-black text-2xl font-bold capitalize pl-10 pb-8 h-2/3"
                    style="font-family: DM Sans">
                    Trainer and fam are attending basketball match 
                    with basketball jerseys made in Indonesia. this brand is ...
                  </div>
                  <div class="pl-10">
                    <div class="bg-gradient-to-b from-transparent to-gray-300 p-5" >
                      <div
                        class="text-black text-3xl font-normal italic capitalize"
                        style="font-family: ABeeZee">
                        BACA SELENGKAPNYA >>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
      </div>
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

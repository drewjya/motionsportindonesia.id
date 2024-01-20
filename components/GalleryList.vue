<script lang="ts" setup>
import type { Gallery } from "~/type/model/product";

const props = defineProps<{
  datas: Gallery[];
}>();
</script>

<template>
  <div class="py-3 flex flex-col gap-2">
    <div v-for="(i, index) in props.datas">
      <div class="grid gallery_grid">
        <div class="relative">
          <img :src="i.url" class="gallery-image" :alt="`Image ${index}`" />
          <div
            class="absolute w-full h-full bottom-0 bg-gradient-to-t from-black via-opacity-8 to-transparent"
          ></div>
          <p
            class="text-white text-3xl font-normal capitalize absolute bottom-0 z-[99] px-10 pb-8"
            style="font-family: Jockey One"
          >
            {{ i.title }}
          </p>
        </div>

        <div class="flex flex-col justify-between">
          <div class="p-2 px-5">
            <p
              class="text-black text-lg font-bold capitalize"
              style="font-family: DM Sans"
            >
              {{ i.tanggal }}
            </p>
            <div class="text-xl font-bold capitalize text-justify">
              {{ i.preview }}
            </div>
          </div>
          <div>
            <div class="bg-gradient-to-b from-transparent to-gray-300 p-5">
              <div
                class="text-black text-xl font-normal italic capitalize"
                style="font-family: ABeeZee"
              >
                BACA SELENGKAPNYA >>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery_grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 748px) {
  .gallery_grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.img {
  position: relative;
}

.gallery-image {
  min-height: 200px;
  max-height: 300px;
  width: 100%;
  aspect-ratio: 5/3;
  object-fit: cover;

  background-color: #262626;
}
</style>

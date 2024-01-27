<script lang="ts" setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { type Product } from "~/type/model/product";

const props = defineProps<{
  datas: Product[];
}>();
</script>

<template>
  <div class="px-24 py-8 w-full">
    <div class="w-full grid products-data">
      <NuxtLink v-for="i in props.datas" :to="`/products/${i.product_name}`">
        <div class="gap-[0.1rem] flex flex-col">
          <img :src="i.image_link" alt="" class="border border-zinc-300" />
          <div class="w-full h-5 bg-zinc-300 rounded-b-xl"></div>
        </div>
        <div
          class="text-center text-black text-sm font-medium font-['DM Sans'] capitalize"
        >
          <p>{{ i.product_name }}</p>
          <p>{{ i.price }}</p>
          <p>{{ i.status }}</p>
        </div>
      </NuxtLink>
    </div>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <img
          class="carousel__item"
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/1/12/d92cd9d7-6fd0-4148-800c-30677da5ece3.jpg.webp?ect=4g"
        />
      </Slide>
    </Carousel>
    <div class="flex justify-between">
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
        >Next
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.products-data {
  column-gap: 4rem;
  row-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
}

@media (min-width: 1440px) {
  .products-data {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 1024px) {
  .products-data {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .products-data {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 548px) {
  .products-data {
    grid-template-columns: repeat(2, 1fr);
  }
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  aspect-ratio: 5/1;
  object-fit: contain;

  background-color: #262626;
  border-radius: 8px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

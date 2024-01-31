<script lang="ts" setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { type Product } from "~/type/model/product";
import type { State } from "~/type/response/server_response";

const props = defineProps<{
  state: State<Product[] | undefined>;
}>();
</script>

<template>
  <div class="px-24 py-8">
    <div v-if="props.state.loading" class="w-full grid products-data">
      <div v-for="i in 6" class="animate-pulse">
        <div class="gap-[0.1rem] flex flex-col">
          <div class="bg-zinc-300 h-20"></div>
          <div class="w-full h-5 bg-zinc-300 rounded-b-xl"></div>
          <div class="grid grid-rows-3 gap-2 place-items-center">
            <div class="h-3 w-[75%] bg-zinc-400 rounded"></div>
            <div class="h-3 w-[75%] bg-zinc-400 rounded"></div>
            <div class="h-3 w-[75%] bg-zinc-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="props.state.data">
      <div class="w-full">
        <div
          v-if="props.state.data.length === 0"
          class="w-full grid place-items-center h-40"
        >
          <div>Tidak Ada Produk Tersedia</div>
        </div>
        <div v-else class="w-full grid products-data">
          <NuxtLink v-for="i in props.state.data" :to="`/products/${i.id}`">
            <div class="gap-[0.1rem] flex flex-col">
              <NuxtImg
                loading="lazy"
                :src="i.image"
                alt=""
                class="border border-zinc-300 bg-zinc-300 h-max"
              />
              <div class="w-full h-5 bg-zinc-300 rounded-b-xl"></div>
            </div>
            <div
              class="text-center text-black text-sm font-medium font-['DM Sans'] capitalize"
            >
              <p>{{ i.name }}</p>
              <p>{{ i.price }}</p>
              <p>{{ i.stock != 0 ? "Available" : "Not Avaliable" }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="">
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
          :disabled="state.loading || state.meta?.page === 1"
          variant="solid"
          color="black"
          class="w-28 justify-center text-white hover:bg-gray-500"
          icon="i-heroicons-backward"
          @click="
            () => {
              const product = useProductsStore();
              product.page = product.page - 1;
            }
          "
          >Prev</UButton
        >
        <UButton
          :disabled="
            state.loading ||
            state.meta?.page === state.meta?.total_page ||
            state.meta?.total_page === 0
          "
          @click="
            () => {
              const product = useProductsStore();
              product.page = product.page + 1;
            }
          "
          variant="solid"
          color="black"
          class="w-28 justify-center hover:bg-gray-500"
          icon="i-heroicons-forward"
          >Next
        </UButton>
      </div>
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

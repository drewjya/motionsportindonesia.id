<script lang="ts" setup>
import type { Product } from "~/type/model/product";

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

const filter = ["Available", "Sold Out"];
const sortValues = ["Price", "Name", "Date"];
let datas = ref<Product[]>([]);
onMounted(() => {
  for (let i = 0; i < 12; i++) {
    datas.value.push({
      product_name: "Product " + i,
      price: (10000 * (1 + i)).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      image_link: "https://avatars.githubusercontent.com/u/739984?v=4",
      status: i % 2 == 0 ? "Sold Out" : "Available",
    });
  }
});

const gridval = computed(() => {
  return Math.round(datas.value.length / 4);
});

definePageMeta({
  colorMode: "light",
});

const filterValue = ref();
const sortBy = ref();
</script>

<template>
  <div class="relative">
    <img src="~/assets/product_test.png" class="title-image" />
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
  <div class="grid px-9 bg-gray-50 py-4 sticky item-filter">
    <div class="flex w-full">
      <UFormGroup label="Aturkan Berdasarkan" class="w-full">
        <template #label="{ label }">
          <p class="text-black">{{ label }}</p>
        </template>
        <div class="flex">
          <UButton color="black" icon="i-heroicons-squares-2x2" />
          <USelectMenu
            class="w-full focus-visible:!ring-0"
            placeholder="Filter"
            :ui-menu="{
              width: '  w-full',
            }"
            select-class="bg-zinc-300 !ring-0 w-full"
            :options="sortValues"
            v-model="sortBy"
          >
            <template #label>
              <p>{{ sortBy ? sortBy : "Aturkan Berdasarkan" }}</p>
            </template>

            <template #trailing>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </USelectMenu>
        </div>
      </UFormGroup>
    </div>

    <div class="flex w-full item">
      <UFormGroup label="Filter" class="w-full">
        <template #label="{ label }">
          <p class="text-black">{{ label }}</p>
        </template>
        <div class="flex w-full">
          <UButton color="black" icon="i-heroicons-funnel" />
          <USelectMenu
            :ui-menu="{
              width: '  w-full',
            }"
            select-class="bg-zinc-300 !ring-0 w-full"
            class="w-full focus-visible:!ring-0"
            placeholder="Filter"
            :options="filter"
            v-model="filterValue"
          >
            <template #label>
              <p>{{ filterValue ? filterValue : "Filter" }}</p>
            </template>

            <template #trailing>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </USelectMenu>
        </div>
      </UFormGroup>
    </div>
  </div>

  <ProductList :datas="datas" />
</template>

<style scoped>
.item-filter {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
}
.item {
  grid-column-start: 3;
}

.menu-w {
  width: 100%;
}

@media (max-width: 748px) {
  .item-filter {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;
  }
  .item {
    grid-column-start: 2;
  }
}
@media (max-width: 548px) {
  .item-filter {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
    column-gap: 0rem;
  }
  .item {
    grid-column-start: 1;
  }

  .menu-w {
    width: 100%;
  }
}

.title-image {
  min-height: 200px;
  width: 100%;
  aspect-ratio: 5/1;
  object-fit: contain;

  background-color: #262626;
}
</style>

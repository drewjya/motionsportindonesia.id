<script lang="ts" setup>
const data = ref([
  {
    type: "Merch",
    title: "Jersey MSI",
    image: "products/1.png",
  },
  {
    type: "Merch",
    title: "Celana MSI",
    image: "products/2.png",
  },
  {
    type: "Merch Tee",
    title: "Shirt MSI",
    image: "products/3.png",
  },
  {
    type: "Merch S",
    title: "Shirt MSI",
    image: "products/4.png",
  },
]);
</script>

<template>
  <div class="product_tile pb-6">
    <div
      class="border border-black w-max p-1 text-center text-neutral-800 text-xl font-normal font-['Poppins'] italic"
    >
      Products
    </div>
    <div>
      <div class="mx-2 italic">Category</div>
      <div class="grid grid-cols-4 gap-4 lg:gap-8">
        <div
          class="col-span-1 bg-gray-100"
          v-for="(item, index) in data"
          :key="item.title"
        >
          <div class="flex flex-col items-center">
            <nuxt-img
              v-if="index % 2 != 0"
              :src="item.image"
              class="float-left w-60 h-40 object-cover"
              quality="30"
            />

            <div
              class="text-center uppercase text-neutral-800 rounded-md p-5 font-['ABeeZee'] italic"
            >
              <div>{{ item.type }} <br />{{ item.title }}</div>
            </div>

            <nuxt-img
              v-if="index % 2 != 1"
              :src="item.image"
              class="float-left margin-fleche w-60 h-40 object-cover"
              quality="30"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

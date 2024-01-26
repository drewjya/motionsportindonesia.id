import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const query = route.query

const items =
{
  name: "PERBANAS JERSEY",
  desc: "A new made T-Shirt inspired by Andre Wijaya's brilliant idea as a creator of carried mage in Mobile Legends",
  image: [
    "https://avatars.githubusercontent.com/u/739984?v=4",
    "https://avatars.githubusercontent.com/u/739984?v=4",
  ],
  tag: [
    "S-Shirt",
    "SERIAL CODE",
  ],
  price: ref(1000000),
  promo: [
    "Free Ongkir",
    "Promo Code",
  ],
  size: "XL",
  qty: ref(2)
};
const getPrice = (): string => {
  return (items.qty.value * items.price.value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- Button -->
    <div id="ctgProduct" class="flex overflow-hidden relativem-12 m-4">
      <span class="mr-4">
        Category :
      </span>
      <div class="border border-solid border-black w-32 h-8 mr-4 rounded-full text-center text-base">
        {{ items.tag[0] }}
      </div>
    </div>

    <!-- Product Detail -->
    <div id="body" class="flex flex-col h-[65%]">

      <div id="productDtl" class="flex justify-center">
        <div class="w-[25%] flex justify-center">
          <img class="w-[65%] h-[80%]" src="~/assets/product-details.png" alt="">
        </div>
        <!-- Product Name and Tag -->
        <div id="productName" class="w-[30%] font-semibold font-sans text-2xl mb-2">
          {{ items.name }}

          <div class="flex flex-wrap">
            <div v-for="(tag, index) in items.tag"
              class="border border-solid border-black w-32 h-8 rounded-full mt-4 mr-6 py-1 text-center text-sm">
              {{ tag }}
            </div>
          </div>

          <div class="text-base font-normal flex justify-between my-[5%]">
            <span>
              Size {{ items.size }}, BLACK PURPLE CO
            </span>
            <span>
              {{ items.qty }}X
            </span>
          </div>


          <div class="text-base font-normal flex justify-between my-[5%]">
          </div>

          <div class="border-t border-solid border-black my-4"></div>
          <div class="text-base font-normal flex my-[5%]">
            PRICE:
            <span class="font-bold ml-4">
              Rp. {{ getPrice() }}
            </span>
          </div>
        </div>
      </div>

      <!-- Payment Method -->
      <div class="flex space-x-4">
        <div class="w-[26%]"></div>
        <div class="flex flex-col w-[20%]">
          <div class="relative text-center text-lg">
            <select id="size" name="size" class="mt-1 p-2 pl-6 pr-8 border rounded-full w-full appearance-none">
              <option value="JNE">
                <div class="flex w-full justify-between">
                  <div class="flex-grow w-30">JNE</div> 
                  <div> Rp. 10.000,00</div>
                </div>
              </option>
              <option value="SCPT">SICEPAT Rp. 10.000,00</option>
              <option value="NINJA">NINJAXPRESS Rp. 10.000,00</option>
              <option value="TIKI">TIKI Rp. 10.000,00</option>
            </select>
            <div class="absolute inset-y-0 right-4 flex items-center px-2 pointer-events-none">
              <div class="h-4/6 w-[2px] bg-gray-200 mt-1 mr-2"></div>
              <svg class="h-4 w-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>

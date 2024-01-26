import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
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

//Handler Button
const increment = (): void => {
  items.qty.value++;
};

const decrement = (): void => {
  if (items.qty.value > 1) {
    items.qty.value--;
  }
};

const back = () => {
  router.go(-1);
};

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- Button -->
    <div class="rounded-full overflow-hidden border w-1/6 mt-8 h-12 relative border-black m-12">
      <NuxtLink to="/products">
        <UButton color="white"
          class="rounded-full absolute w-full h-full text-lg text-semibold hover:bg-gray-300 focus:bg-gray-300">
          <div class="mx-auto items-center ">
            <img src="~/assets/icons/icon-add-to-cart.svg" alt="" class="left-5 absolute" width="29" />
            <p>Shop For More</p>
          </div>
        </UButton>
      </NuxtLink>
    </div>

    <div class="flex flex-col h-[65%] justify-center">
      <div id="productImg" class="flex justify-center">
        <div class="w-[25%] flex justify-center">
          <img class="w-[70%]" src="~/assets/product-details.png" alt="">
        </div>
        <!-- Product Name and Tag -->
        <div id="productName" class="w-[30%] font-semibold font-sans text-4xl my-2">
          {{ items.name }}

          <div class="flex flex-wrap ">
            <div v-for="(tag, index) in items.tag"
              class="border border-solid border-black w-32 h-8 rounded-full mt-4 mr-6 text-center text-base">
              {{ tag }}
            </div>
          </div>

          <div class="text-xl font-normal flex justify-between my-[5%]">
            <span>
              Size {{ items.size }}, BLACK PURPLE CO
            </span>
            <span>
              {{ items.qty }}X
            </span>
          </div>


          <div class="text-xl font-normal flex justify-between my-[5%]">
            <button @click="decrement" class="bg-gray-300 px-4 py-2 rounded">-</button>
            <button @click="increment" class="bg-gray-300  px-4 py-2 rounded">+</button>
          </div>

          <div class="border-t border-solid border-black my-4"></div>

          <div class="text-xl font-normal flex my-[5%]">
            PRICE:
            <span class="font-bold ml-4">
              Rp. {{ getPrice() }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="rounded-full sticky border w-[12%] mt-8 h-12 mx-[6%]">
          <UButton @click="back" color="black" class="w-full h-full text-lg text-semibold">
            <div class="mx-auto items-center text-white">
              <p>Back</p>
            </div>
          </UButton>
      </div>
      <div class="rounded-full sticky border w-[12%] mt-8 h-12 mx-[6%]">
        <NuxtLink to="/checkout">
        <UButton color="black" class="w-full h-full text-lg text-semibold">
          <div class="mx-auto items-center text-white">
            <p>Check Out</p>
          </div>
        </UButton>
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const items = {
  name: "PERBANAS JERSEY",
  desc: "A new made T-Shirt inspired by Andre Wijaya's brilliant idea as a creator of carried mage in Mobile Legends",
  image: [
    "https://avatars.githubusercontent.com/u/739984?v=4",
    "https://avatars.githubusercontent.com/u/739984?v=4",
  ],
  tag: ["S-Shirt", "SERIAL CODE"],
  price: ref(1000000),
  promo: ["Free Ongkir", "Promo Code"],
  size: "XL",
  qty: ref(2),
};
const getPrice = (): string => {
  return (items.qty.value * items.price.value).toLocaleString("id-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

const back = () => {
  router.go(-1);
};

type OldProduct = {
  nama: string;
  category: string;
  serialCode: string;
  price: number;
  sizeList: string[];
  size: string;
  desc: string;
  image: string;
  quantity: number;
};

const cartItems = <OldProduct[]>[
  {
    category: "T-Shirt",
    desc: "BLACK, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY",
    price: 250000,
    quantity: 1,
    serialCode: "123456789",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
  {
    category: "S-Shirt",
    desc: "GREEN, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY +",
    price: 280000,
    quantity: 1,
    serialCode: "1234567",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
  {
    category: "S-Shirt",
    desc: "GREEN, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY +",
    price: 280000,
    quantity: 1,
    serialCode: "1234567",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
  {
    category: "S-Shirt",
    desc: "GREEN, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY +",
    price: 280000,
    quantity: 1,
    serialCode: "1234567",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
  {
    category: "S-Shirt",
    desc: "GREEN, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY +",
    price: 280000,
    quantity: 1,
    serialCode: "1234567",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
  {
    category: "S-Shirt",
    desc: "GREEN, PURPLE CO",
    image: "/product-details.png",
    nama: "PERBANAS JERSEY +",
    price: 280000,
    quantity: 1,
    serialCode: "1234567",
    size: "XL",
    sizeList: ["S", "M", "L", "XL"],
  },
];

definePageMeta({
  layout: "cart",
});
</script>

<template>
  <div class="w-full h-full  overflow-y-auto items-start">
    <div class="px-8 py-4 flex justify-between">
      <!-- <NuxtLink to="/products"
        ><UButton
          :ui="{
            rounded: 'rounded-full border-1 border-gray-300',
          }"
          icon="i-heroicons-shopping-cart"
          size="sm"
          color="white"
          variant="solid"
          :trailing="false"
          >Shop For More</UButton
        ></NuxtLink
      > -->
      <div class="flex gap-4">
        <UButton
          @click="
            () => {
              router.go(-1);
            }
          "
          label="Back"
          icon="i-heroicons-arrow-left"
          color="black"
          variant="solid"
          :trailing="false"
          class="px-6"
        />
        <!-- <NuxtLink to="/checkout">
          <UButton
            label="Check Out"
            color="black"
            trailing-icon="i-heroicons-shopping-bag"
            variant="solid"
            class="px-6"
          />
        </NuxtLink> -->
      </div>
    </div>
  
    <div class="flex">
      <div class="h-[calc(100%-6.5rem)] bg-yellow-300 overflow-y-auto w-[70%]">
        <div class="flex flex-col gap-[0.35rem] bg-gray-100 px-2 pb-4">
          <CheckOutItem
            v-for="i in cartItems"
            :product="i"
          />
        </div>
      </div>
      
      <div class="h-[dvh] flex justify-center w-[30%] sticky top-0">
        <div class="flex-col w-[70%]">
          <h1 class="font-bold text-lg my-4"> Payment Details </h1>
          <div class="flex-col w-[100%] my-4">
            <label for="first_name" class="lbForm block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address* </label>
            <input type="text" id="first_name" class="inputForm" required>
          </div>

          <div class="flex-col w-[100%] my-4">
            <label for="first_name" class="lbForm block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number*</label>
            <input type="text" id="first_namess" class="inputForm" required>
          </div>

          <div class="flex-col w-[100%] my-4">
            <label for="first_name" class="lbForm block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Method*</label>
            <input type="text" id="first_names" class="inputForm " required>
          </div>


          <h1 class="font-bold text-lg mt-10"> Payment Summary </h1>
          <div class="flex justify-between my-3">
            <label for="first_name" class="">Sub Total</label>
            <label for="first_name" class="">Rp. 200,000.00</label>
          </div>

          <div class="flex justify-between my-3">
            <label for="first_name" class="">Delivery</label>
            <label for="first_name" class="">Rp. 10,000.00</label>
          </div>

          <div class="flex justify-between my-3">
            <label for="first_name" class="">Tax</label>
            <label for="first_name" class="">Rp. 3,000.00</label>
          </div>

          <div class="flex justify-between my-3">
            <label for="first_name" class="">Total</label>
            <label for="first_name" class="">Rp. 213,000.00</label>
          </div>
          <div class="flex justify-center my-8">
          <UButton
            @click="
              () => {
                router.go(-1);
              }
            "
            label="Bayar"
            color="black"
            variant="solid"
            :trailing="false"
            class="px-24"
          />
        </div>
      </div>
      </div>
    </div>
    <Footer />
</div>
</template>

<style scoped>

.inputForm {
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #1f2937;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  outline: 1px solid transparent;
  outline-offset: 1px;
  border-color: #696666;
  display: block;
  width: 100%;
  padding: 0.625rem;
}
.inputForm:focus {
  outline-color: #008dcf;
  border-color: #e0eff4;
}
</style>


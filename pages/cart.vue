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

const cartProvider = useCartStore();
onMounted(() => {
  cartProvider.fetchCart();
});
</script>

<template>
  <div class="w-full h-full">
    <div class="px-8 py-4 flex justify-between">
      <NuxtLink to="/products"
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
      >
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
        <NuxtLink to="/checkout">
          <UButton
            label="Check Out"
            color="black"
            trailing-icon="i-heroicons-shopping-bag"
            variant="solid"
            class="px-6"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="px-8 flex justify-between pb-2 text-black items-center">
      <div class="flex items-center gap-3">
        <UCheckbox />
        <p>Pilih Semua</p>
      </div>
      <div>
        <UButton
          label="Hapus Semua"
          trailing-icon="i-heroicons-trash"
          color="black"
        />
      </div>
    </div>

    <div class="h-[calc(100%-6.54rem)] bg-yellow-300 overflow-y-auto">
      <div
        class="flex flex-col gap-[0.35rem] bg-gray-100 px-2 pb-4"
        v-if="
          cartProvider.cartState.data !== undefined ||
          cartProvider.cartState.data !== null
        "
      >
        <CartItem
          v-for="item in cartProvider.cartState.data"
          :cart-item="item"
          :on-decrement="(data) => {}"
          :on-increment="(data) => {}"
          :on-remove="(data) => {}"
        />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>

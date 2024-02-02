<script lang="ts" setup>
import type { Cart, Category } from "~/type/model/product";

type CartItemProps = {
  cartItem: Cart;
  onIncrement: (cartItem: Cart) => void;
  onDecrement: (cartItem: Cart) => void;
  onRemove: (cartItem: Cart) => void;
};

const props = defineProps<CartItemProps>();
const getPrice = (qty: number, price: number): string => {
  return (qty * price).toLocaleString("id-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};
</script>

<template>
  <div class="text-black mx-5 px-4 bg-white py-2 rounded-md border">
    <div class="grid-val gap-5">
      <div class="flex fl gap-5">
        <div class="flex items-center">
          <UCheckbox />
        </div>
        <img
          :src="`${props.cartItem.product.image}`"
          :alt="props.cartItem.product.name"
          class="w-40"
        />
      </div>
      <div class="flex fr">
        <div class="flex flex-col">
          <h2 class="font-bold">{{ props.cartItem.product.name }}</h2>
          <div class="keterangan">
            <p v-for="i in (props.cartItem.product.categories??<Category[]>[])">
              {{ i.name }}
            </p>
            <p>{{ props.cartItem.product.serial_code }}</p>
          </div>
          <p>{{ "XL" }}, {{ props.cartItem.product.description }}</p>
        </div>
        <div class="grow flex flex-col items-end justify-end gap-4">
          <p class="text-sm font-bold">
            Rp
            {{
              getPrice(props.cartItem.product.price, props.cartItem.quantity)
            }}
          </p>
          <div class="flex gap-5 items-center">
            <UButton
              icon="i-heroicons-trash"
              size="sm"
              class="!bg-black !text-white"
              square
              variant="solid"
            />
            <UButton
              icon="i-heroicons-plus"
              size="sm"
              class="!bg-gray-400 !text-white"
              square
              variant="solid"
            />
            <div>{{ props.cartItem.quantity }}</div>
            <UButton
              icon="i-heroicons-minus"
              size="sm"
              class="!bg-gray-400 !text-white"
              square
              variant="solid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-val {
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .grid-val {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.fl {
  grid-column: span 1 / span 1;
}

.fr {
  grid-column: span 4 / span 4;
}

.keterangan {
  font-size: 0.9rem;
  display: flex;
  font-family: sans-serif;
  gap: 0.5rem;
  font-weight: 600;
}

.keterangan p {
  padding: 3px 20px;
  border: 0.5px solid black;
  border-radius: 50px;
}
</style>

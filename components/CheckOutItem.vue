<script lang="ts" setup>
type CheckOutItemProps = {
  product: Product;
};
type Product = {
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
const props = defineProps<CheckOutItemProps>();
const getPrice = (qty: number, price: number): string => {
  return (qty * price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
</script>

<template>
  <div class="text-black mx-5 px-4 bg-white py-2 rounded-md border">
    <div class="flex gap-5">
      <img
        :src="`${props.product.image}`"
        :alt="props.product.nama"
        class="w-40"
      />
      <div class="flex flex-col">
        <h2 class="font-bold">{{ props.product.nama }}</h2>
        <div class="keterangan">
          <p>{{ props.product.category }}</p>
          <p>{{ props.product.serialCode }}</p>
        </div>
        <p>{{ props.product.size }}, {{ props.product.desc }}</p>
      </div>
      <div class="grow flex flex-col items-end justify-end gap-4">
        <p class="text-sm font-bold">
          Rp {{ getPrice(props.product.price, props.product.quantity) }}
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
          <div>{{ props.product.quantity }}</div>
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
</template>

<style scoped>
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

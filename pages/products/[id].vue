<script lang="ts" setup>
const { getRoutes, beforeEach } = useRouter();
const { redirectedFrom, params } = useRoute();
const productStore = useProductDetailStore(Number(`${params.id}`))();
const quantity = ref(1);
onMounted(() => {
  productStore.fetchData();
});
beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

const options = ["XL", "L", "M", "S"];
const selected = ref(options[0]);

definePageMeta({
  colorMode: "light",
  layout: "cart",
});

const price = computed(
  () => Number(quantity.value) * (productStore.productState.data?.price ?? 0)
);
</script>

<template>
  <div class="w-full h-full pt-12 flex flex-col">
    <div
      class="grow grid grid-cols-2 px-12 gap-8 overflow-y-auto"
      v-if="productStore.productState.data"
    >
      <div class="img-proudct">
        <img :src="productStore.productState.data.image" alt="" class="w-80" />
        <p class="font-semibold text-xl">Product Description</p>
        <p>{{ productStore.productState.data.description }}</p>
      </div>
      <div class="product-data">
        <div class="pb-2">
          <p class="text-xl font-bold">
            {{ productStore.productState.data.name }}
          </p>
        </div>
        <div class="cartegory">
          <div v-for="i in productStore.productState.data.categories">
            {{ i.name }}
          </div>
        </div>
        <div>
          <div
            class="w-max"
            style="
              margin-top: 10px;
              padding: 0.2rem 1rem;
              border: 1px solid #000;
              border-radius: 1rem;
            "
          >
            <div>{{ productStore.productState.data.serial_code }}</div>
          </div>
        </div>
        <div class="flex gap-2">
          <p>Price</p>

          <p class="transition-all">
            Rp.
            {{
              price.toLocaleString("id-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })
            }}
          </p>
        </div>
        <div class="flex gap-2">
          <div class="px-1 py-0.5 bg-gray-300 rounded-md">Free Ongkir</div>
          <div class="px-1 py-0.5 bg-gray-300 rounded-md">Promo Code</div>
        </div>
        <div>
          <UFormGroup label="Size" class="pt-2">
            <template #label="{ label }">
              <p class="text-base font-semibold">{{ label }}</p>
            </template>
            <USelectMenu v-model="selected" :options="options" class="w-40" />
          </UFormGroup>
        </div>
        <UFormGroup label="Quantity" class="pt-2">
          <template #label="{ label }">
            <p class="text-base font-semibold">{{ label }}</p>
          </template>

          <div class="flex items-center gap-2">
            <UButton
              icon="i-heroicons-plus"
              size="sm"
              :disabled="quantity === productStore.productState.data?.stock"
              class="!bg-gray-400 !text-white"
              square
              @click="
                () => {
                  quantity += 1;
                }
              "
              variant="solid"
            />

            <Quantity
              class-input="!bg-white focus:ring-0 border border-black w-20 text-center"
              :init-value="0"
              :max-val="productStore.productState.data?.stock"
              :raw-value="quantity"
              @update:raw-value="
                (value) => {
                  quantity = value;
                }
              "
            />

            <UButton
              icon="i-heroicons-minus"
              size="sm"
              class="!bg-gray-400 !text-white"
              square
              variant="solid"
              :disabled="quantity === 1"
              @click="
                () => {
                  quantity -= 1;
                }
              "
            />
          </div>
        </UFormGroup>

        <div>
          <div
            class="flex bg-white border border-black rounded-3xl w-max text-xs mt-2"
          >
            <NuxtLink to="/cart">
              <button class="px-2 py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <p>Add To Cart</p>
              </button>
            </NuxtLink>
            <NuxtLink to="/checkout">
              <button
                class="px-5 py-1 bg-gray-400 rounded-3xl border-l border-black flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <p>Buy Now</p>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.cartegory {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  font-weight: 600;
}
.cartegory div {
  padding: 0.2rem 1rem;
  border: 1px solid #000;
  border-radius: 1rem;
}
</style>

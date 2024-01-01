import { UButton } from '../.nuxt/components';
<script lang="ts" setup>
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
      price: (1000000).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      promo: [
        "Free Ongkir",
        "Promo Code",
      ],
    };


definePageMeta({
  layout: "products",
});
</script>

<template>
  <div class="w-full flex">

    <!-- Left-->
    <!-- Product Image and Desc -->
    <div id="productImg" class="flex  w-3/6 flex-col mt-24">
      <div class="w-full flex justify-scenter">
      <img class="m-auto" src="~/assets/product-details.png" alt="" width="500" height="500">
    </div>
      <div id="productDesc" class="font-sans  my-8 flex justify-center">
        <div class="mx-auto min-w-[500px] max-w-[500px]" >
            <p class="font-semibold text-xl">Product Description</p>
            <p>{{ items.desc }}</p>
        </div>
      </div>
    </div>

     <!-- Right-->
    <div id="productDetail" class="ml-16 mt-24 w-3/6">
      <!-- Product Name and Tag -->
      <div id="productName" class="font-semibold font-sans text-4xl my-2">
        {{ items.name }} 
        <div class="flex flex-wrap " > 
          <div v-for="(e, index) in items.tag" 
          class="border border-solid border-black w-32 h-8 rounded-full mt-4 mr-6 text-center text-base" >
          {{ e }} 
          </div>
        </div>
      </div>

      <!-- Product Price and Promo -->
      <div class="flex text-xl mt-6">
          PRICE :  <div class="font-bold font-sans ml-2"> Rp. {{ items.price }}</div>
      </div>
      <div class="flex flex-wrap font-semibold mt-2">
        <div v-for="(e, index) in items.promo" class="bg-gray-300 flex text-center items-center  w-32 h-8 mr-4 file:rounded-sm mb-4">
         <div class="m-auto"> {{  e }} </div>
        </div>
      </div>

       <!-- Size -->
       <div class="flex flex-col text-2xl mt-6 font-semibold font-sans">
          Size
      </div>
      <div class="w-1/2 relative text-center text-lg">
        <select id="size" name="size" class="mt-1 p-2 pl-6 pr-8 border rounded-full w-full appearance-none">
          <option value="S">S (Small)</option>
          <option value="M">M (Medium)</option>
          <option value="L">L (Large)</option>
          <option value="XL">XL (Extra Large)</option>
          <option value="XXL">XXL (2 Extra Large)</option>
          <option value="XXXL">XXXL (3 Extra Large)</option>
        </select>
        <div class="absolute inset-y-0 right-4 flex items-center px-2 pointer-events-none">
          <div class="h-4/6 w-[2px] bg-gray-200 mt-1 mr-2"></div>
          <svg class="h-4 w-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      <!-- Quantity -->
      <div class="flex flex-col text-2xl mt-6 font-semibold font-sans">
          Quantity
      </div>
      <div class="w-1/2 relative text-center text-lg">
        <select id="qty" name="qty" class="mt-1 p-2 pl-6 pr-8 border rounded-full w-full appearance-none">
          <option v-for="(index) in 50"  :value=" index+1">{{index+1}}</option>
        </select>
        <div class="absolute inset-y-0 right-4 flex items-center px-2 pointer-events-none">
          <div class="h-4/6 w-[2px] bg-gray-200 mt-1 mr-2"></div>
          <svg class="h-4 w-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

       <!-- Button -->
      <div class="rounded-full overflow-hidden border w-1/2 mt-8 h-12 relative ">
        <NuxtLink to="/cart" >
      <UButton color="white"  class="rounded-full absolute w-6/12 h-full text-lg text-semibold hover:bg-gray-300 focus:bg-gray-300">
        <div class="mx-auto items-center ">
          <img src="~/assets/icons/icon-add-to-cart.svg" alt="" class="left-5 absolute" width="29"/>
          <p >Add to Cart</p>
        </div>
      </UButton>
    </NuxtLink>
    <NuxtLink to="/cart" >
      <UButton color="gray" class="rounded-full absolute right-0 w-7/12 h-full text-lg text-semibold hover:bg-gray-300 focus:bg-gray-300">
        <div class="mx-auto items-center " >
          <img src="~/assets/icons/icon-buy-now.svg" alt=""  class="left-6 absolute"  width="32"/>
          <p >Buy Now</p>
        </div>
      </UButton>
    </NuxtLink>
      </div>

    </div>

  </div>



</template>

<style scoped></style>

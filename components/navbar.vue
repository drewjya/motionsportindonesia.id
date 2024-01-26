<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { watch } from "vue";
import { useRoute } from "vue-router";
const isActive = ref(false);
const navIcon = ref(null);

const route = useRoute();
watch(route, () => {
  console.log(route);
  isActive.value = false;
});

onMounted(() => {
  onClickOutside(navIcon, (e) => {
    if (e.target instanceof HTMLElement) {
      const el = e.target;
      if (el.classList.contains("item-nav")) {
        return;
      }
    }

    isActive.value = false;
  });
});
</script>

<template>
  <div class="h-16 w-screen bg-black text-white flex items-center px-10">
    <div class="title grow flex items-center">
      <div class="flex-col justify-center">
        <img src="~/assets/logo.png" alt="" class="w-20 h-15 mt-4" />
      </div>
      <div>Motion Sports IDN</div>
    </div>
    <div class="hidden lg:block">
      <div class="flex items-center space-x-4 justify-center w-full">
        <NuxtLink to="/">
          <div
            class="item-nav hover:bg-slate-300 hover:text-black hover:rounded-lg p-1"
            :class="route.fullPath === '/' ? 'text-sky-300' : ''"
          >
            Home
          </div>
        </NuxtLink>
        <NuxtLink to="/products">
          <div
            class="item-nav hover:bg-slate-300 hover:text-black hover:rounded-lg p-1"
            :class="route.fullPath === '/products' ? 'text-sky-300' : ''"
          >
            Products
          </div>
        </NuxtLink>
        <NuxtLink to="/gallery">
          <div
            class="item-nav hover:bg-slate-300 hover:text-black hover:rounded-lg p-1"
            :class="route.fullPath === '/gallery' ? 'text-sky-300' : ''"
          >
            Gallery
          </div>
        </NuxtLink>
        <NuxtLink to="/about">
          <div
            class="item-nav hover:bg-slate-300 hover:text-black hover:rounded-lg p-1"
            :class="route.fullPath === '/about' ? 'text-sky-300' : ''"
          >
            About Us
          </div>
        </NuxtLink>

        |

        <NuxtLink to="/cart" class="ml-10">
          <img
            src="~/assets/icons/icon-cart.svg"
            alt=""
            class=""
            width="20"
            height="60"
          />
        </NuxtLink>

        <NuxtLink to="/signup" class="ml-10">
          <img
            src="~/assets/icons/icon-account.svg"
            alt=""
            class=""
            width="20"
            height="60"
          />
        </NuxtLink>

        <NuxtLink to="/signup" class="ml-10">
          <img
            src="~/assets/icons/icon-order.svg"
            alt=""
            class=""
            width="20"
            height="60"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="block lg:hidden">
      <button
        class="flex flex-col h-12 w-12 justify-center items-center group"
        @click="isActive = !isActive"
        ref="navIcon"
      >
        <div
          class="h-0.5 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300"
          :class="isActive ? 'rotate-45 translate-y-1.5' : ''"
        ></div>
        <div
          class="h-0.5 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300"
          :class="isActive ? 'opacity-0' : ''"
        ></div>
        <div
          class="h-0.5 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300"
          :class="isActive ? '-rotate-45 -translate-y-1.5' : ''"
        ></div>
      </button>
      <div class="relative">
        <div
          v-if="isActive"
          class="absolute w-[calc(50vw)] bg-black top-2 -right-9 z-[100]"
        >
          <ul>
            <NuxtLink to="/">
              <li
                :class="
                  route.fullPath === '/' ? 'bg-slate-100 !text-black' : ''
                "
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                Home
              </li></NuxtLink
            >
            <NuxtLink to="/products">
              <li
                :class="
                  route.fullPath === '/products'
                    ? 'bg-slate-100 !text-black'
                    : ''
                "
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                Products
              </li></NuxtLink
            >
            <NuxtLink to="/gallery">
              <li
                :class="
                  route.fullPath === '/gallery'
                    ? 'bg-slate-100 !text-black'
                    : ''
                "
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                Gallery
              </li></NuxtLink
            >
            <NuxtLink to="/about">
              <li
                :class="
                  route.fullPath === '/about' ? 'bg-slate-100 !text-black' : ''
                "
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                About Us
              </li></NuxtLink
            >

            <NuxtLink to="/signup">
              <li
                :class="
                  route.fullPath === '/signup' ? 'bg-slate-100 !text-black' : ''
                "
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                Sign Up
              </li></NuxtLink
            >
            <NuxtLink to="/login">
              <li
                class="p-2 item-nav text-white hover:bg-slate-100 hover:text-black m-2"
              >
                Log In
              </li></NuxtLink
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: "Jokey One";

  font-size: 1.85rem;
  font-style: normal;
  font-weight: 400;
}

.item-nav {
  font-family: "DM Sans", sans-serif;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
}
</style>

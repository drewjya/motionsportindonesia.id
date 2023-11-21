<script lang="ts" setup>
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
];
</script>

<template>
  <div class="relative">
    <nuxt-img src="/product_test.png" class="w-screen"></nuxt-img>
    <div
      class="absolute h-full w-full top-0 bg-gradient-to-b from-zinc-300 to-neutral-800 opacity-[0.35] z-50"
    ></div>
    <div
      class="text-white text-4xl font-normal capitalize absolute bottom-0 z-[99] px-10 pb-8"
      style="font-family: Jockey One"
    >
      Customizable Jerseys<br />for you and your homies
    </div>
  </div>
  <div class="flex justify-between px-9 bg-gray-50">
    <div class="flex">
      <div>Button 1</div>
      <UDropdown
        :items="items"
        mode="hover"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
    </div>
    <div class="flex">
      <div>Button 1</div>
      <UDropdown
        :items="items"
        mode="hover"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
    </div>
  </div>
</template>

<style scoped></style>

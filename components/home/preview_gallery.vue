<script lang="ts" setup></script>

<template>
  <div class="py-4 pt-2">
    <div class="h-[37vh] w-full relative">
      <img class="absolute w-full h-full" src="~/assets//preview_gallery.png" />

      <div class="absolute w-full h-full z-10">
        <div class="relative w-full h-full">
          <div class="top-2 left-2 absolute">
            <div
              class="text-gray-100 text-base font-medium capitalize border border-gray-100 max-w-fit px-5 py-[2px] jokey"
            >
              Gallery
            </div>
          </div>
          <div class="bottom-5 left-2 absolute">
            <div
              class="text-gray-50 text-2xl font-normal font-['ABeeZee'] uppercase italic"
            >
              well made products<br />with excellent craftsmanship
            </div>
            <div class="text-white text-sm font-medium font-['DM Sans']">
              lorem ipsum dolor amet
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-14 lg:h-20 w-full bg-gray-100"></div>
  </div>
</template>

<style scoped>
.jokey {
  font-family: "DM Sans", sans-serif;

  font-style: normal;
  font-weight: 400;
}
</style>

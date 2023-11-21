<script lang="ts" setup>
let color = [1, 2, 3];
</script>

<template>
  <div
    class="bg-black grid grid-cols-2 text-gray-100 font-normal font-['ABeeZee'] uppercase p-3 pb-7"
  >
    <div class="col-span-1">
      <div>Contact Us</div>
      <div class="" v-for="item in color">
        <div>{{ item }}</div>
      </div>
    </div>
    <div class="col-span-1">
      <div>Follow Us</div>
      <div class="" v-for="item in color">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

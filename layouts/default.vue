<script lang="ts" setup></script>

<template>
  <Navbar />
  <div class="h-[calc(100vh-4rem)] bg-[#f9fafc] overflow-y-auto">
    <slot />

    <Footer />
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import type { Gallery } from "~/type/model/gallery";
import type { State } from "~/type/response/server_response";

const props = defineProps<{
  state: State<Gallery[] | undefined>;
}>();
</script>

<template>
  <div class="py-2 flex flex-col gap-2">
    <div
      v-if="props.state.loading"
      class="flex justify-center items-center h-32"
    >
      <p>Loading</p>
    </div>
    <div v-else-if="props.state.data">
      <div v-if="props.state.data.length === 0"></div>
      <div v-else class="flex flex-col divide-y-1">
        <div v-for="(i, index) in props.state.data" class="px-10">
          <GalleryItem :item="i" />
          <GalleryItem :item="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery_grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 748px) {
  .gallery_grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.img {
  position: relative;
}

.gallery-image {
  min-height: 200px;
  max-height: 450px;

  aspect-ratio: 5/4;
  object-fit: cover;
}
.shadow {
  min-height: 200px;
  max-height: 450px;
  width: 100%;
}
</style>

<script lang="ts" setup>
const sortValues = ["Price", "Name", "Date"];
const sortBy = ref();
const galleryStore = useGalleryStore();
onMounted(() => {
  galleryStore.fetchData();
});
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="w-full">
    <img src="~/assets/gallery_img.png" class="title-image" />
    <div class="px-9 py-4">
      <UFormGroup label="Aturkan Berdasarkan" class="w-full">
        <div class="flex">
          <UButton color="black" icon="i-heroicons-squares-2x2" />
          <USelectMenu
            class="w-full focus-visible:!ring-0"
            placeholder="Filter"
            :ui-menu="{
              width: '  w-full',
            }"
            select-class="bg-zinc-300 !ring-0 w-full"
            :options="sortValues"
            v-model="sortBy"
          >
            <template #label>
              <p>{{ sortBy ? sortBy : "Aturkan Berdasarkan" }}</p>
            </template>

            <template #trailing>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </USelectMenu>
        </div>
      </UFormGroup>
    </div>
    <div class="">
      <div class="w-full">
        <p
          class="w-max border-2 border-solid border-black p-2 text-sm font-semibold mx-14"
          style="font-family: 'DM Sans', sans-serif"
        >
          Galleri Terbaru
        </p>
        <div>
          <GalleryList :state="galleryStore.galleryState" />
        </div>
        <div class="flex justify-between py-2 pb-16 mx-16">
          <UButton
            variant="solid"
            color="black"
            class="w-28 justify-center text-white hover:bg-gray-500"
            icon="i-heroicons-backward"
            >Prev</UButton
          >
          <UButton
            variant="solid"
            color="black"
            class="w-28 justify-center hover:bg-gray-500"
            icon="i-heroicons-forward"
            >Next</UButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-image {
  min-height: 200px;
  width: 100%;
  aspect-ratio: 5/1;
  object-fit: contain;

  background-color: #262626;
}
</style>

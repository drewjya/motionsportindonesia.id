<script lang="ts" setup>
import type { Gallery } from "~/type/model/gallery";

const props = defineProps<{
  item: Gallery;
}>();

const limitedContent = ref("");

onMounted(() => {
  const parsed = new DOMParser().parseFromString(
    props.item.detail,
    "text/html"
  );
  console.log(parsed);

  const firstTwoElements = Array.from(parsed.body.children).slice(0, 2);
  console.log(firstTwoElements);

  const limitedContentContainer = document.createElement("div");
  firstTwoElements.forEach((element) => {
    limitedContentContainer.appendChild(element.cloneNode(true));
  });
  limitedContent.value = limitedContentContainer.innerHTML;
});
</script>

<template>
  <div class="pz-1">
    <div class="flex gap-5 h-max">
      <div class="my-auto">
        <img
          :src="props.item.image"
          :alt="props.item.title + `${props.item.id}`"
          class="img"
        />
      </div>
      <div class="flex justify-between flex-col">
        <div class="title">{{ props.item.title }}</div>
        <div class="grow flex flex-col justify-end">
          <div class="text-sm text-gray-500" v-html="limitedContent"></div>
          <div class="text-xs text-gray-500 font-extralight">
            {{ props.item.tanggal }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: "Jockey One", sans-serif;
  font-size: 1.25em;
  font-weight: 700;
}
.img {
  width: 10rem;
  height: 10rem;

  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.75rem;
}

.pz-1 {
  padding-top: 2.25rem /* 4px */;
  padding-bottom: 2.25rem /* 4px */;
}

@media (max-width: 640px) {
  .pz-1 {
    padding-top: 1.5rem /* 4px */;
    padding-bottom: 1.5rem /* 4px */;
  }
}
/* .gallery_grid {
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
  height: 90px;

  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
}
.shadow {
  min-height: 160px;

  width: 100%;
} */
</style>

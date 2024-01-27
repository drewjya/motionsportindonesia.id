<script lang="ts" setup>
const containerRef = ref();
const imageRef = ref();

const circleRef1 = ref();
const circleRef2 = ref();
const circleRef3 = ref();
definePageMeta({
  colorMode: "light",
});

const handleOnScroll = () => {
  const val = containerRef.value;
  if (val instanceof HTMLElement) {
    const scrollPosition = val.scrollTop;

    let valSc = (scrollPosition / val.scrollHeight) * 100;

    if (valSc <= 20) {
      imageRef.value.style.bottom = `${valSc - 7}%`;
    }

    circleRef1.value.style.left = `${valSc}%`;
    circleRef2.value.style.left = `${valSc - 100}%`;
    circleRef3.value.style.left = `${valSc - 20}%`;

    imageRef.value.style.left = `${valSc - 50}%`;
  }
};
</script>

<template>
  <div class="w-screen"></div>
  <div class="h-[calc(80vh)] relative py-20">
    <div
      ref="circleRef1"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[5%]"
    ></div>

    <div
      ref="circleRef2"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[30%] left-[-100%]"
    ></div>

    <div
      ref="circleRef3"
      class="absolute w-64 h-48 z-30 opacity-30 bg-gradient-to-b from-zinc-100 to-yellow-400 rounded-full blur-sm top-[60%] left-[-20%]"
    ></div>
    <img
      src="/player.png"
      class="absolute image overflow-hidden z-30 opacity-30"
      ref="imageRef"
    />
    <div
      class="h-full bg-transparent overflow-auto z-50 mx-12"
      ref="containerRef"
      @scroll="handleOnScroll"
    >
      Motion Sport Indoneisa adalah sebuah perusahaan yang bergerak di bidang
      olahraga. Kami menyediakan berbagai macam kebutuhan olahraga anda mulai
      dari sepatu, baju, dan perlengkapan olahraga lainnya. Kami juga
      menyediakan jasa pembuatan lapangan olahraga seperti lapangan futsal,
      lapangan basket, lapangan tenis, dan lapangan lainnya. Kami juga
      menyediakan jasa pembuatan lapangan olahraga seperti lapangan futsal,
      lapangan basket, lapangan tenis, dan lapangan lainnya. Founder
      <br />
      <br />
      <br />
      Cofounder
    </div>
  </div>
</template>

<style scoped>
.image {
  bottom: -7%;
  left: -50%;
  transition: left 0.5ms ease-in-out;
  overflow: hidden;
}
</style>

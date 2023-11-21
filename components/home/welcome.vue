<script lang="ts" setup></script>

<template>
  <div class="w-full h-[80vh] bg-[#f9fafc] overflow-x-hidden">
    <div class="h-full relative">
      <div class="imagebg absolute"></div>
      <div class="basket"></div>
      <div class="wording">
        LEGENDARY <br />
        KICKS WORN <br />
        BY MIKE <br />
        BURNS
      </div>
      <div class="buttons">
        <p>
          Get your hands on these fresh kicks <br />worn by Michael Burnes in
          the <br />
          EuroLeague Finals
        </p>
        <button class="shop-now">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagebg {
  background-image: url("~/assets/bg_basket.jpg");
  mix-blend-mode: luminosity;
  opacity: 0.1;

  margin-top: 5%;
  margin-left: 10%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 60.5vh;
  width: 100vw;
}
.basket {
  width: 100vw;
  height: 60vh;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("~/assets/basket.png");
  position: absolute;

  top: 15%;
  left: 15%;
  /* transform: translate(-50%, -50%); */
}

.wording {
  font-family: Jockey One;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  word-wrap: break-word;

  line-height: 1.1;

  background: linear-gradient(180deg, #262626 0%, #b8c2ce 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-transform: uppercase;
  position: absolute;
  left: 8%;
  top: 5%;
}

.buttons {
  position: absolute;
  bottom: 5%;
  right: 10%;
}

.buttons p {
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;

  font-style: normal;
  font-weight: 400; /* 138.889% */
}
.shop-now {
  margin-top: 12px;
  display: inline-flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;

  border-radius: 3px;
  background: #262626;
  color: white;
}
</style>

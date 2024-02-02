<script lang="ts" setup>
definePageMeta({
  colorMode: "light",
});

const authStore = useAuthStore();

type LoginForm = {
  email: string;
  password: string;
};

const form = ref<LoginForm>({
  email: "",
  password: "",
});
</script>

<template>
  <div class="w-full flex items-center justify-center h-full">
    <div
      class="rounded-[4rem] border w-[60%] py-2"
      style="background-color: #ebeef3"
    >
      <div class="flex flex-col m-12 h-full">
        <div class="font-bold font-sans text-4xl text-center mb-5">Log In</div>

        <div class="flex flex-col gap-4">
          <UFormGroup label="Email">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput
              input-class="focus:ring-0 rounded-2xl"
              v-model="form.email"
            />
          </UFormGroup>

          <UFormGroup label="Password">
            <template #label="{ label }">
              <p class="title">{{ label }}</p>
            </template>
            <UInput
              input-class="focus:ring-0 rounded-2xl"
              v-model="form.password"
            />
          </UFormGroup>

          <UButton
            id="btnSignUp"
            variant="solid"
            @click="
              () => {
                authStore.login(form.password, form.email);
              }
            "
            color="black"
            class="px-5 justify-center text-white hover:bg-gray-500 mt-2"
            style="he"
            >Login</UButton
          >
          <NuxtLink to="/signup" class="hover:underline"
            >Belum Punya Akun</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.2rem;
  font-family: sans-serif;
}
</style>

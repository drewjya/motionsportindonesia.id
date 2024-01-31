<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  rawValue: number;
  maxVal?: number;
  classInput?: string;
}>();
const emit = defineEmits<{ (e: "update:rawValue", value: number): void }>();
const inputRef = ref<HTMLInputElement | undefined>();

onMounted(() => {
  if (inputRef.value) {
    inputRef.value!.value = formatCurrency(props.rawValue);
    inputRef.value.addEventListener("input", (e) => {
      inputRef.value!.value = formatCurrency(
        unformatCurrency(inputRef.value!.value)
      );
      emit("update:rawValue", unformatCurrency(inputRef.value!.value));
    });
  }
});

function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "decimal", // Use decimal style
    minimumFractionDigits: 0,
    maximumFractionDigits: 3, // No fractional part
  });
  return formatter.format(value);
}

function unformatCurrency(value: string): number {
  let val = Number(value.replace(/[^0-9]/g, ""));
  if (val === 0) {
    val = 1;
  }
  if (val > props.maxVal!) {
    val = props.maxVal!;
  }
  return val;
}
</script>

<template>
  <input
    class="form-input relative block disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 text-sm px-2.5 py-1.5 shadow-sm bg-gray-50 text-gray-900 ring-0 hover:ring-0 focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    type="text"
    :value="props.rawValue"
    ref="inputRef"
    :class="props.classInput"
    oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
  />
</template>

<style scoped></style>

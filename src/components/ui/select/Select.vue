<script setup lang="ts">
import clsx from "clsx";
import { onBeforeUnmount, onMounted, provide, ref, watch } from "vue";
import { SELECT_KEY } from "./selectContext";
import type { Item } from "./types/item.types";

interface Props {
  class?: string;
  modelValue?: string | null;
  defaultValue?: string | null;
  items: Item[];
}

const props = defineProps<Props>();
const emit = defineEmits<{ "update:modelValue": [value: string | null] }>();

const selectRef = ref<HTMLElement | null>(null);
const isOpenSelect = ref(false);
const selectedValue = ref<string | null>(props.modelValue ?? null);
const toggle = () => {
	isOpenSelect.value = !isOpenSelect.value;
};

const close = () => {
	isOpenSelect.value = false;
};

const select = (id: string) => {
  selectedValue.value = id;
  emit("update:modelValue", id);
  close();
};

provide(SELECT_KEY, {
	isOpenSelect,
	toggle,
	close,
	selectedValue,
	select
});

watch(
  () => props.modelValue,
  (newVal) => {
    selectedValue.value = newVal ?? props.defaultValue ?? props.items[0]?.id ?? null;
  },
  { immediate: true }
);

const handleClickOutside = (e: MouseEvent) => {
	if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
		isOpenSelect.value = false;
	}
};

onMounted(() => {
	document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
	document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
	<div ref="selectRef" :class="clsx('select', props.class)">
		<slot></slot>
	</div>
</template>

<style scoped>
.select {
	position: relative;
}
</style>

<script setup lang="ts">
import { computed } from "vue";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import { useSelect } from "./useSelect";
import type { Item } from "./types/item.types";
import { Button } from "../button";

interface Props {
	class?: string;
	items?: Item[];
	promt?: string;
}
const props = defineProps<Props>();

const { isOpenSelect, toggle, selectedValue } = useSelect();

const selectedLabel = computed(() => {
	const found = props.items?.find((i) => i.id === selectedValue.value);
	return found?.label ?? "Выберите значение";
});
</script>

<template>
	<Button
		:class="clsx('select-button', props.class)"
		@click="toggle"
		:promt="props.promt"
	>
		<span class="select-title">{{ selectedLabel }}</span>
		<component
			class="select-icon"
			:is="!isOpenSelect ? ChevronDown : ChevronUp"
			:size="18"
		></component>
	</Button>
</template>

<style scoped>
.select-button {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2px;
	padding: 1px 10px;
	cursor: pointer;
	border-radius: var(--border-radius);
	width: 120px;
	font-size: 14px;
}

.select-button:hover {
	background-color: var(--hover-color);
}

.select-button > .select-icon {
	pointer-events: none;
}

.select-title {
	max-width: 100px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
</style>

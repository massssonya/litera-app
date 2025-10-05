<script setup lang="ts">
import clsx from "clsx";
import { Check, ChevronRight } from "lucide-vue-next";
import { useSelect } from "./useSelect";
import type { Item } from "./types/item.types";

interface Props {
	item: Item;
	editor?: any;
	class?: string;
}

const props = defineProps<Props>();

const { close, select, selectedValue } = useSelect();

const onSelectValue = () => {
	if (props.item.style) props.item.action?.(props.editor, props.item.style);
	else props.item.action?.(props.editor);
	select(props.item.id);
	close();
};
</script>

<template>
	<button :class="clsx('select-button', props.class)" @click="onSelectValue">
		<Check
			:size="16"
			class="select-check"
			:style="{ opacity: selectedValue === item.id ? 1 : 0 }"
		/>
		<div class="select-item">
			<component :is="item.component ?? 'span'" :style="item.style">{{
				item.label
			}}</component>
			<ChevronRight :size="16" :style="{ opacity: 0 }" />
		</div>
	</button>
</template>

<style scoped>
.select-button {
	display: grid;
	grid-template-columns: 40px 1fr;
	place-items: center;
	border-radius: 0;
	width: 100%;
	border-bottom: 1px solid var(--border-color);
	height: fit-content;
	cursor: pointer;
}

.select-button:hover {
	background-color: var(--hover-color);
}

.select-item {
	display: flex;
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.select-item * {
	margin: 0;
}
</style>

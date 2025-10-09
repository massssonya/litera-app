<script setup lang="ts">
import clsx from "clsx";
import TextPromt from "../text-promt/TextPromt.vue";

interface Props {
	label?: string;
	class?: string;
	promt?: string;
	onClick: () => void;
	onKeyUp?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
	<button :class="clsx('button', props.class)" @click="props.onClick">
		<slot></slot>
		<TextPromt v-show="!!props.promt">
			{{ props.promt }}
		</TextPromt>
	</button>
</template>

<style lang="css" scoped>
.button {
	position: relative;
}

.promt {
	display: none;
}

.button:hover > .promt {
	display: block;
	opacity: 1;
}
</style>

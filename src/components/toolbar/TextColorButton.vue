<script setup lang="ts">
import { Baseline } from "lucide-vue-next";
import { colorsConfig } from "../../config/colors.config";
import type { Editor } from "@tiptap/vue-3";
import { Button } from "../ui/button";
import { useDisclosure } from "../../composable";
import { useColor } from "../../composable";

interface Props {
	editor: Editor;
}

const props = defineProps<Props>();


const { isOpen, contentRef, close, toggle } = useDisclosure();
const { currentColor, hoveredColor, paletteColors, selectColor: selectTextColor, handleMouseEnter, handleMouseLeave } = useColor({
	colors: colorsConfig.palette,
	onSelectColor: (color) => {
		props.editor.chain().focus().setColor(color).run();
		close();
	}
})

</script>

<template>
	<div ref="contentRef" class="wrapper">
		<Button @click="toggle" :promt="'Цвет текста'">
			<Baseline :color="currentColor" />
		</Button>
		<div class="content" v-show="isOpen">
			<div class="content-container">
				<button v-for="(btn, index) in paletteColors" :key="btn + index" class="btn-color" :style="{
					backgroundColor: btn,
					boxShadow: hoveredColor === btn ? `0px 0px 5px 2px ${btn}` : 'none'
				}" @mouseenter="handleMouseEnter(btn)" @mouseleave="handleMouseLeave" @click="selectTextColor(btn)"></button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
}

.content {
	position: absolute;
	top: 100%;
	padding: 15px 10px;
	background-color: var(--bg-secondary);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	z-index: 10;
}

.content-container {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	gap: 2px;
	margin: 5px auto;
}

.btn-color {
	width: 20px;
	height: 20px;
	border-radius: 50px;
	border: 1px solid var(--border-color);
}
</style>

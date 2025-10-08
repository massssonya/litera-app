<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3";
import SelectTextStyle from "./SelectTextStyle.vue";
import TextColorButton from "./TextColorButton.vue";
import FormatTextButtonGroup from "./FormatTextButtonGroup.vue";
import TextBackgroundColorButton from "./TextBackgroundColorButton.vue";

interface Props {
	editor: Editor;
}

defineProps<Props>();
</script>

<template>
	<div class="toolbar">
		<div class="toolbar-group">
			<SelectTextStyle :editor="editor"></SelectTextStyle>
		</div>
		<div class="toolbar-group">
			<FormatTextButtonGroup :editor="editor"></FormatTextButtonGroup>
			<TextColorButton :editor="editor"></TextColorButton>
			<TextBackgroundColorButton :editor="editor"></TextBackgroundColorButton>
		</div>
	</div>
</template>

<style scoped>
.toolbar {
	display: flex;
	gap: 0;
	background-color: var(--toolbar-bg-color);
	padding: 5px 0;
	border-radius: 20px;
}

.toolbar-group {
	display: flex;
	padding: 0 5px;
	border-right: 1px solid var(--border-color);
	margin-right: 5px;
}


</style>

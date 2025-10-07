<script setup lang="ts">
import type { Editor } from "@tiptap/vue-3";
import { configToolbar } from "../../config/toolbar.config";
import SelectTextStyle from "./SelectTextStyle.vue";
import TextPromt from "../ui/text-promt/TextPromt.vue";
import clsx from "clsx";
import TextColorButton from "./TextColorButton.vue";

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
			<button v-for="btn in configToolbar.buttons" :key="btn.label" @click="btn.action(editor)" :name="btn.label"
				:disabled="btn.can ? !btn.can(editor) : !editor"
				:class="clsx('button', { 'is-active': btn.isActive && btn.isActive(editor) })">
				<component v-show="btn.icon" :is="btn.icon" />
				{{ !btn.icon ? btn.label : "" }}
				<TextPromt v-show="!!btn.promt">
					{{ btn.promt }}
				</TextPromt>
			</button>
			<TextColorButton :editor="editor">

			</TextColorButton>
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



.button {
	position: relative;
}

.button:hover>.promt {
	opacity: 1
}

</style>

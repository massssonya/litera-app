<script setup lang="ts">
import { ref } from 'vue';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { configToolbar } from '../../config/toolbar.config';
import type { Editor } from '@tiptap/vue-3';

interface Props {
	editor: Editor;
}

defineProps<Props>();

const selectedTextStyle = ref<string | null>(null);
</script>
<template>
	<Select v-model="selectedTextStyle" :items="configToolbar.textStyles">
		<SelectTrigger :items="configToolbar.textStyles"></SelectTrigger>
		<SelectContent>
			<SelectItem
				v-for="item in configToolbar.textStyles"
				:key="item.id"
				:item="item"
				:editor="editor"
			></SelectItem>
		</SelectContent>
	</Select>
</template>

<style scoped></style>

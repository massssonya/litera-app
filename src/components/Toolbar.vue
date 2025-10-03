<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';
import { configToolbar } from '../config/toolbar.config';
import Select from "./ui/select/Select.vue"
import SelectContent from './ui/select/SelectContent.vue';
import SelectTrigger from './ui/select/SelectTrigger.vue';
import SelectItem from './ui/select/SelectItem.vue';

interface Props {
    editor: Editor
}

defineProps<Props>()

const items = [
  {
    id: "1",
    label: "Обычный текст",
    component: 'span'
  },
  {
    id: "2",
    label: "Название",
    component: 'h1',
    style: {fontSize: "42px"}
  },
  {
    id: "3",
    label: "Подзаголовок",
    component: 'span'
  },
  {
    id: "4",
    label: "Заголовок 1",
    component: 'h1'
  },
  {
    id: "5",
    label: "Заголовок 2",
    component: 'h2'
  },
  {
    id: "6",
    label: "Заголовок 3",
    component: 'h3'
  },
  {
    id: "7",
    label: "Пользовательский",
    style: {backgroundColor: "red"}
  }
]
</script>

<template>
    <div class="toolbar">
        <div class="toolbar-group">
            <Select>
                <SelectTrigger></SelectTrigger>
                <SelectContent>
                    <SelectItem v-for="item in items" :item="item"></SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div class="toolbar-group">
            <button v-for="btn in configToolbar.buttons" :key="btn.label" @click="btn.action(editor)" :name="btn.label"
                :disabled="btn.can ? !btn.can(editor) : !editor"
                :class="{ 'is-active': btn.isActive && btn.isActive(editor) }">
                <component v-show="btn.icon" :is="btn.icon" />
                {{ !btn.icon ? btn.label : "" }}
            </button>
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

.toolbar button:hover, select:hover {
    background-color: var(--hover-color);
}



</style>
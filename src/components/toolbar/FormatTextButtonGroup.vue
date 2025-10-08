<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3';
import { configToolbar } from '../../config/toolbar.config';
import { Button } from '../ui/button';
import clsx from 'clsx';
interface Props {
    editor: Editor
}
defineProps<Props>()

</script>

<template>
    <Button v-for="btn in configToolbar.buttons" :key="btn.label" @click="btn.action(editor)" :name="btn.label"
        :disabled="btn.can ? !btn.can(editor) : !editor"
        :class="clsx('button', { 'is-active': btn.isActive && btn.isActive(editor) })" :promt="btn.promt">
        <component v-show="btn.icon" :is="btn.icon" />
        {{ !btn.icon ? btn.label : "" }}
    </Button>
</template>

<style scoped>
.button {
    position: relative;
}

.button:hover>.promt {
    opacity: 1;
}
</style>
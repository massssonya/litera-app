<script setup lang="ts">
import { Baseline } from 'lucide-vue-next';
import { computed, onBeforeUnmount, ref } from 'vue';
import { getColorShade } from '../utils/color.utils';
import { colorsConfig } from '../../config/colors.config';
import { onMounted } from 'vue';
import type { Editor } from '@tiptap/vue-3';

interface Props {
	editor: Editor;
}

const props = defineProps<Props>();

const isOpen = ref(false);
const contentRef = ref<HTMLElement | null>(null);

const currentColor = ref("#000000")

const paletteColors = computed(() => {
    const palette = colorsConfig.palette.map(p => getColorShade(p.dark, p.light))
    return palette
})

const hoveredColor = ref<string | null>(null)

const handleMouseEnter = (color:string) => {
    hoveredColor.value = color
}

const handleMouseLeave = () => {
    hoveredColor.value = null
}

const toggle = () => {
    isOpen.value = !isOpen.value
}

const close = () => {
    isOpen.value = false;
}

const selectTextColor = (color:string) => {
    currentColor.value = color;
    props.editor.chain().focus().setColor(color).run();
    close();
}

const handleClickOutside = (e: MouseEvent) => {
	if (contentRef.value && !contentRef.value.contains(e.target as Node)) {
		close();
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
    <div ref="contentRef" class="wrapper">
        <button @click="toggle">
            <Baseline :color="currentColor" />
        </button>
        <div  class="content" v-show="isOpen">
            <div class="content-container">
                <button 
                    v-for="btn in paletteColors.flat()" 
                    class="btn-color" 
                    :style="{backgroundColor: btn, boxShadow: hoveredColor === btn ? `0px 0px 5px 2px ${btn}` : 'none'}"
                    @mouseenter="handleMouseEnter(btn)"
                    @mouseleave="handleMouseLeave" 
                    @click="selectTextColor(btn)"></button>
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

.btn-color{
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: 1px solid var(--border-color);
}

</style>
<script setup lang="ts">
import clsx from 'clsx';

interface Item {
    label: string;
    component?: string;
    style?: StyleSheetList | any
}

interface Props {
    item: Item;
    class?: string;
}

const props = defineProps<Props>()

</script>

<template>
    <button :class="clsx('select-button', props.class)">
        <component :is="item.component ?? 'span'" :style="item.style">{{ item.label }}</component>
    </button>

</template>

<style scoped>
.select-button {
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer; */
    /* border: 1px solid black; */
    border-radius: 0;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
}

.select-button:hover {
    background-color: var(--hover-color);
}
</style>
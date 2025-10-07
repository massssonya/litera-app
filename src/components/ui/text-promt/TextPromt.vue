<script setup lang="ts">
import clsx from 'clsx';
interface Props {
    class?: string
}

const props = defineProps<Props>()

</script>

<template>
    <div :class="clsx('promt', props.class)">
        <slot></slot>
    </div>
</template>

<style scoped>
.promt {
    position: absolute;
    top: 120%;
    right: 50%;
    transform: translateX(50%);
    padding: 4px 6px;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    color: var(--bg-secondary);
    background-color: var(--promt-color);
    border-radius: var(--border-radius);
    opacity:0;
	z-index: 100;
}
</style>

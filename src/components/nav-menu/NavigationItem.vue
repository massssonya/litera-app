<script setup lang="ts">
import { useDisclosure } from '../../composable';
import type { NavigationButton } from '../../types/navigation.types';
import { Button } from '../ui/button';

interface Props {
    item: NavigationButton
}

defineProps<Props>()

const { toggle, isOpen, contentRef } = useDisclosure()

</script>

<template>
    <div ref="contentRef" class="wrapper">
        <Button @click="toggle" :class="'nav-button'">
            {{ item.label }}
        </Button>
        <div class="content" v-show="isOpen">
            <div class="content-container">
                123
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


.nav-button {
    font-size: var(--text-sm);
    color: var(--text-color-grey);
}
</style>
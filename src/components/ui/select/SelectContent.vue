<script setup lang="ts">
import clsx from 'clsx';
import { useSelect } from './useSelect';

interface Props {
  class?: string;
}

const props = defineProps<Props>()

const {isOpenSelect} = useSelect()

</script>

<template>
    <div v-if="isOpenSelect" :class="clsx('select-content', props.class)">
      <slot></slot>
    </div>
</template>

<style scoped>
.select-content{
  position: absolute;
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
  bottom: 0;
  transform: translateY(100%);
  width: max-content;
  z-index: 100;
  overflow-x: hidden;
}

.select-content:last-child{
  border-bottom: none;
}
</style>

<script setup lang="ts">
import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { ref } from 'vue';

interface Props {
    class?: string;
}
const props = defineProps<Props>()
const isOpenSelect = ref(false)

const onToggleSelect = () => {
  isOpenSelect.value = !isOpenSelect.value
}

</script>

<template>
    <button :class="clsx('select-button', props.class)" @click="onToggleSelect">
      <span class="select-title">Обычный текст</span>
      <component :is="!isOpenSelect ? ChevronDown : ChevronUp" :size="18"></component>
    </button>
</template>

<style scoped>

.select-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  padding: 1px 10px;
  cursor: pointer;
  border-radius: var(--border-radius);
  max-width: 120px;
  font-size: 14px;
}

.select-button:hover {
  background-color: var(--hover-color);
}

.select-title {
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
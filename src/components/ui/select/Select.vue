<script setup lang="ts">
import clsx from 'clsx';

interface Props {
  class?: string;
}
const props = defineProps<Props>()

</script>

<template>
  <div :class="clsx('select', props.class)">
   <slot></slot>
  </div>
</template>

<style scoped>
.select {
  position: relative;

}


</style>
<script setup lang="ts">



interface Props {
    class?: String;
    onClick?: void;
    onKeyUp?: void
}

defineProps<Props>()

</script>

<template>
    <button :class="class" @click="onClick!" @keyup.ctrl.b="onKeyUp!">
        <slot />
    </button>

</template>



<style lang="css" scoped>
button {
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    width: auto;
    padding: 0 10px;
    height: 32px;
    background-color: rgb(255, 182, 156);
}

button:hover,
button:active {
    background-color: rgb(255, 127, 80);
}
</style>
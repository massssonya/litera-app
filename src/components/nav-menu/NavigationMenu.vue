<script setup lang="ts">
import { configNavigation } from '../../config/navigation.config';
import NavigationItem from './NavigationItem.vue';

</script>

<template>
    <div class="nav-menu">
        <ul class="nav-items">
            <li v-for="item in configNavigation.items" :key="item.id">
                <NavigationItem :item></NavigationItem>
            </li>
        </ul>
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

.nav-menu {
    padding: 0;
}

.nav-items {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>
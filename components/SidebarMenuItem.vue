<template>
    <div @click="handleClick" class="cursor-pointer select-none hover:underline my-1 px-2 py-1 pr-1 text-[length:14px]">
        {{item.label}}
    </div>
</template>

<script setup lang="ts">
import type { MenuItemType } from './Types';

const { item } = defineProps<{ item: MenuItemType }>()

const handleClick = () => {
    navigateTo(item.pathname)
}   

</script>
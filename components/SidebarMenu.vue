<template>

    <div class="border-r border-gray-100 bg-gray-50 p-4">
        <div class="flex items-center text-green-700">
            <div class="font-extrabold text-base">{{title}}</div>
        </div>
        <div class="h-7"></div>
        <div class="font-bold text-gray-800 min-w-40" v-for="item in items">
            <SidebarMenuItem :item="item"></SidebarMenuItem>
        </div>
    </div>

</template>

<script setup lang="ts">

import type { MenuItemType } from './Types';

defineProps<{ title: string, items: MenuItemType[] }>()


</script>
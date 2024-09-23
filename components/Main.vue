<template>

    <div class="bg-black shrink grow h-1 flex flex-col gap-4 items-center">
        <div class="grow overflow-hidden rounded bg-gray-700 shadow-md flex flex-col w-full ">
            <div class="flex items-center justify-center px-2 pt-2">
                <Titlebar>Nuxtpastebin</Titlebar>
            </div>
            <div class="flex grow overflow-hidden bg-white text-gray-600 rounded-lg mx-4 mb-4 mt-2">
                <SidebarMenu title="😎 Pastebin" :items="menuItems" />
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MenuItemType } from './Types';


const menuItems: MenuItemType[] = [
    { label: "New Paste", pathname: "/" },
    { label: "About", pathname: "/about" },
]


</script>
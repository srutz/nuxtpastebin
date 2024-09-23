<template>
    <div class="p-10 grow flex flex-col gap-2">
        <div class="select-none font-extrabold text-black text-3xl mb-2">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ title: string }>()

</script>
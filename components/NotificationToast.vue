<template>
    <div ref={toastRef} class="notificationtoast" @click="visible = false" :style="style">
        <div class="flex flex-row gap-2 items-center">
            {{ message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { EVENTKEY_NOTIFICATION, type Notification } from './Notify';
import { EventBus } from './EventBus';


const message = ref("")
const visible = ref(false)

watchEffect(() => {
    if (visible.value) {
        const timer = setTimeout(() => {
            visible.value = false
        }, 2500)
    }
})

const listener = (notification: Notification) => {
    message.value = notification.message
    visible.value = true
}
EventBus.instance.on(EVENTKEY_NOTIFICATION, listener);
onUnmounted(() => {
    EventBus.instance.off(EVENTKEY_NOTIFICATION, listener);
}) 

const style = computed(() => {
    const css: CSSProperties = {
        opacity: visible.value ? "1" : "0",
        bottom: visible.value ? "0px" : "-100px",
    }
    return css
})
</script>
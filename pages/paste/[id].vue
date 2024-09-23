<template>
    <ContentPanel :title='"Your paste " + (paste.externalid || "... was not found")'>
        <div class="flex gap-2">
            <button @click="handleCopyLink">Copy link</button>
            <button @click="handleCopyContent">Copy content</button>
            <button class="redbutton" @click="handleDelete">Delete paste</button>
        </div>
        <input name="comment" class="w-full p-2 text-sm" readOnly v-model="paste.comment"></input>
        <textarea name="content" spellCheck="false" wrap="off" autoCorrect="off"
            class="w-full grow p-2 resize-none text-sm" v-model="paste.content"></textarea>
        <p>Made by Stepan using Vue.js, Nuxt, Typescript and Vite</p>
    </ContentPanel>
</template>
<script setup lang="ts">
import { notify } from '~/components/Notify';
import type { PasteType } from '~/components/Types';


const route = useRoute()
const externalid = ref(route.params.id)

const { data, status, error, refresh, clear } = await useFetch('/api/pasteget', {
    query: { id: externalid.value }
})

const paste = ref<PasteType>(data as unknown as PasteType)

async function copyText(text: string, message: string) {
    if (!text) {
        return
    }
    await navigator.clipboard.writeText(text)
    notify({ message: message })
}

const handleCopyContent = () => {
    copyText(paste?.value?.content || "", "Contents copied to clipboard")
}
const handleCopyLink = () => {
    copyText(window.location.href, "Link copied to clipboard")
}

const handleDelete = async () => {
    const externalid = paste?.value?.externalid
    try {
        const res = await useFetch('/api/pasteget', {
            method: 'DELETE',
            query: { id: externalid }
        })
        notify({ message: "Your paste was deleted" })
        navigateTo("/")
    } catch (e) {
        const error = e as any
        console.error(error.message || 'Failed to submit the form.')
    }
}

</script>

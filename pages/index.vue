<template>
    <ContentPanel title="New Paste">
        <form @submit.prevent="submitForm" class="h-1 grow flex flex-col gap-4">
            <input v-model="form.comment" class="w-full p-2 text-sm" placeholder="Paste comment"></input>
            <textarea v-model="form.content" spellCheck="false" wrap="off" autoCorrect="off"
                class="w-full grow p-2 resize-none text-sm" placeholder="Paste content here"></textarea>
            <div><button type="submit">Submit Paste</button></div>
        </form>
    </ContentPanel>
</template>

<script setup lang="ts">
import { notify } from '~/components/Notify';
import type { PasteType } from '~/components/Types';


const form = ref({
    comment: "",
    content: "",
})

const submitForm = async () => {
    try {
        const response = await useFetch('/api/pastesave', {
            method: 'POST',
            body: form.value,
        }) as any
        const { data } = response 
        const paste = data.value as PasteType
        notify({ message: "Your paste was created" })
        navigateTo(`/paste/${paste.externalid}`)
    } catch (e) {
        const error = e as any
        console.error(error.message || 'Failed to submit the form.')
    }
}

</script>

import { PasteType } from '~/components/Types';
import db, { generateRandomId } from '../db';


export default defineEventHandler(async (event) => {
    try {
        // Get the form data from the request body
        const body = await readBody(event)
        const { content, comment } = body
        if (!comment || !content) {
            throw new Error('Required fields not set.')
        }
        const external_id = generateRandomId(8)
        const stmt = db.prepare("INSERT INTO pastes (content,comment,externalid) VALUES (?,?,?)")
        const result = stmt.run(content, comment, external_id)
        if (result.changes <= 0) {
            throw new Error('Paste save failed.')
        }
        const response: PasteType = {
            content,
            comment,
            externalid: external_id
        }
        return response
    } catch (e) {
        const error = e as any
        console.error("error", error)
        return { error: error?.message || "An error occurred." }
    }
})



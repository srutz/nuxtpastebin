
import { PasteType } from '~/components/Types';
import db from '../db';

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const externalid = query.id
        if (!externalid) {
            throw new Error('No external id provided/found.')
        }
        const paste = db.prepare("SELECT content, comment, externalid FROM pastes WHERE externalid = ?").get(externalid) as PasteType | undefined
        if (!paste) {
            throw new Error('No external id provided/found.')
        }
        console.log("got paste", paste)
        return paste
    } catch (e) {
        const error = e as any
        return { error: error?.message || "An error occurred." }
    }
})



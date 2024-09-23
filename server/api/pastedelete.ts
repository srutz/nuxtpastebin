
import db from '../db';

export default defineEventHandler(async (event) => {
    if (event.method !== "DELETE") {
        throw new Error('Wrong http-method.')
    }
    try {
        const query = getQuery(event)
        const externalid = query.id
        if (!externalid) {
            throw new Error('No external id provided/found.')
        }
        const result = db.prepare("DELETE FROM pastes WHERE externalid = ?").run(externalid)
        if (result.changes <= 0) {
            throw new Error('Paste save failed.')
        }
        const response = {
            externalid: external_id
        }
        return response
    } catch (e) {
        const error = e as any
        return { error: error?.message || "An error occurred." }
    }
})





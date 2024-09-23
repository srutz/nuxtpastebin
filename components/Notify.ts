

/* 
 * notification type + api
 */

import { EventBus } from "./EventBus"

export type Notification = {
    message: string,
}

export const EVENTKEY_NOTIFICATION = "notification"

export function notify(notification: Notification) {
    EventBus.instance.emit(EVENTKEY_NOTIFICATION, notification)
}

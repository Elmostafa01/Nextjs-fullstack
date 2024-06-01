"use server"

import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";
import { eq } from "drizzle-orm";


export async function deleteMessage(messageId: number) {
    try {
        await db.delete(messages).where(eq(messages.id, messageId));

    }catch(error) {
        console.log(error)
    }
}
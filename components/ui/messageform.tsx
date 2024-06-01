"use client"

import { addMessageToDataBase } from "@/actions/add-message-to-database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function MessageForm() {
    const [message, setMessage] = useState("")

    async function handleMessageToDatabase() {
        const response = await addMessageToDataBase(message)

        if (response.ok) {
            setMessage("")
        }
    }

    return (
        <div className="flex justify-center flex-col gap-2">
            <Input 
                placeholder="add a Todo"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <Button 
                variant="destructive" 
                onClick={handleMessageToDatabase}
            >
                Submit
            </Button>
        </div>
    );
}
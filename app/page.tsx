import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageForm from "@/components/ui/messageform";

export default async function Home() {

  const messages = await getMessagesFromDatabase();



  return (
    <main className="max-w-2xl mx-auto p-16">
      <div className="p-5">
        <MessageForm />
        <ul className="flex flex-col gap-1 mt-6">
          {messages.map((message) => {
           return <li className="bg-slate-100 p-2 rounded flex items-center justify-between" key={message.id}>
              <p className="pl-4">
                {message.message}
              </p> 
              <Button>
                <Trash  />
              </Button>
            </li>
          })}
        </ul>
      </div>
    </main>
  );
}

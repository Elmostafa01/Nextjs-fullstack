import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-16">
      <div className="flex justify-center flex-col gap-2">
        <Input placeholder="input component"/>
        <Button >Submit</Button>
      </div>
      <div className="p-5">
        <ul className="flex flex-col gap-1">
          {[Array.from({length: 3}).map((_, i) => (
            <li className="bg-slate-100 p-2 rounded" key={i}>this is a test {i + 1}</li>
          ))]}
        </ul>
      </div>
    </main>
  );
}

"use Client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputGroupButton } from "@/components/ui/input-group";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center pt-10">
      <Card className="w-[400px] h-[fit] flex justify-center ">
        <CardTitle className="flex justify-center">To Do List</CardTitle>
        <CardContent className="flex flex-row gap-1.5">
          <Input className="w-[280px] h-10" placeholder="Add a new task ..." />
          <Button className="w-15 h-10 bg-[#3C82F6] hover:bg-[#3C82F6]">
            {" "}
            Add
          </Button>
        </CardContent>
        <CardContent className="flex gap-1.5">
          <Button className="bg-[#F3F4F6] text-black hover:bg-[#7dabf5]">
            All
          </Button>
          <Button className="bg-[#F3F4F6]  text-black hover:bg-[#7dabf5]">
            Active
          </Button>
          <Button className="bg-[#F3F4F6]  text-black hover:bg-[#7dabf5]">
            Completed
          </Button>
        </CardContent>
        <CardContent className="flex justify-center">
          <p className="text-[#6B7280]">No tasks yet. Add one above!</p>
        </CardContent>
        <CardContent className="flex justify-center">
          <p className="text-[#6B7280]">Powered by Pinecone academy.</p>
        </CardContent>
      </Card>
    </div>
  );
}

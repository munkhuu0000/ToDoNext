"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGroupButton } from "@/components/ui/input-group";
import Image from "next/image";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Ghost, Plus, Trash } from "lucide-react";

const tabs = ["All", "Active", "Completed"];

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [selectedButton, setSelectedButton] = useState("All");
  const deleteItem = (item) => {
    const delTodo = todos.filter((el) => {
      if (el.id == item.id) return false;
      return true;
    });
    setTodos(delTodo);
  };
  console.log(todos);

  return (
    <div className="flex justify-center pt-10">
      <Card className="w-[400px] h-[fit] flex justify-center ">
        <CardTitle className="flex justify-center">To Do List</CardTitle>
        <CardContent className="flex flex-row gap-1.5">
          <Input
            className="w-[280px] h-10"
            placeholder="Add a new task ..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button
            className="w-15 h-10 bg-[#3C82F6] hover:bg-[#3C82F6]"
            onClick={() => {
              setTodos([
                ...todos,
                {
                  id: nanoid(),
                  isDone: false,
                  text: value,
                },
              ]);
              setValue("");
            }}
          >
            Add
          </Button>
        </CardContent>
        <CardContent className="flex gap-1.5">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant="Ghost"
              className="flex 1 bg-[#F3F4F6] text-black hover:bg-[#7dabf5]"
              style={{
                backgroundColor: tab === selectedButton ? "#3C82F6" : "#F3F4F6",
              }}
              onClick={() => {
                setSelectedButton(tab);
              }}
            >
              {tab}
            </Button>
          ))}
          {/* <Button className="bg-[#F3F4F6] text-black hover:bg-[#7dabf5]">
            All
          </Button>
          <Button className="bg-[#F3F4F6]  text-black hover:bg-[#7dabf5]">
            Active
          </Button>
          <Button className="bg-[#F3F4F6]  text-black hover:bg-[#7dabf5]">
            Completed
          </Button> */}
        </CardContent>
        <div className="flex flex-col gap-4 px-6 ">
          {todos
            .filter((item) => {
              if (selectedButton === "All") return true;
              if (selectedButton === "Active") return item.isDone === false;
              return item.isDone === true;
            })
            .map((item) => (
              <div key={item.id}>
                <CardContent className="flex gap-4 justify-between p-0">
                  <Checkbox
                    checked={item.isDone}
                    onClick={() => {
                      const newTodos = todos.map((todo) => {
                        if (todo.id !== item.id) return todo;
                        return {
                          isDone: !item.isDone,
                          text: item.text,
                          id: item.id,
                        };
                      });
                      setTodos(newTodos);
                    }}
                  />
                  <p className="flex-1">{item.text}</p>
                  <Button
                    className="bg-[#FEF2F2] text-[#EF4444] font-normal text-sm"
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </div>
            ))}
        </div>
        <CardContent className="flex justify-center">
          <p className="text-[#6B7280]">No tasks yet. Add one above!</p>
        </CardContent>
        <CardContent className="flex justify-center gap-1.5">
          <p className="text-[#6B7280]">Powered by </p>
          <a href="https://pinecone.mn/">
            <p className="text-[#3B73ED]">Pinecone academy.</p>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

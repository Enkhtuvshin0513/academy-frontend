"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2Icon } from "lucide-react";

export default function Home() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleTask = (index: number) => {
    const task = tasks[index];

    task.completed = !task.completed;

    setTasks([...tasks]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-2 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">To Do List</h1>
        <p className="text-sm text-gray-500">Only frontend</p>
      </div>

      <div className="flex flex-row gap-4 mt-4 w-full max-w-md">
        <Input
          placeholder="Enter your task"
          value={task}
          onChange={e => setTask(e.target.value)}
          className="flex-1"
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
        />
        <Button onClick={handleAddTask} className="flex-none">
          Add
        </Button>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-md mt-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 items-center p-2 border-b border-gray-200"
          >
            <Checkbox
              checked={task.completed}
              onClick={() => handleToggleTask(index)}
            />
            <p
              className={`flex-1 text-left ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.text}
            </p>
            <Button
              onClick={() => handleDeleteTask(index)}
              variant="destructive"
              size="icon"
              className="p-1"
            >
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

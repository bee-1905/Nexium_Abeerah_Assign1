"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface QuoteFormProps {
  onSubmit: (topic: string) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onSubmit(topic.trim());
      setTopic("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4"
    >
      <div className="flex flex-col space-y-2">
        <Label htmlFor="topic">Enter a topic</Label>
        <Input
          id="topic"
          placeholder="e.g., success"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <Button className="btn btn-primary w-full transition-transform duration-300 hover:scale-105">
         Generate Quotes
      </Button>
    </form>
  );
}
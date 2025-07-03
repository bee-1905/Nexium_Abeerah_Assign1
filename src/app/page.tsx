"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState("");

  const today = new Date().toLocaleDateString();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-200">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          🎯 Quote Generator Web App
        </h1>
        <p className="text-center">
          Welcome! Today is <span className="font-semibold">{today}</span>.
        </p>

        <QuoteForm onSubmit={setCurrentTopic} />

        {currentTopic ? (
          <QuoteList topic={currentTopic} />
        ) : (
          <p className="text-center text-muted-foreground">
            Enter a topic above to generate motivational quotes.
          </p>
        )}
      </div>
    </main>
  );
}

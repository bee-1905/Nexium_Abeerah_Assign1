"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteList";
import { Leaf } from "lucide-react";

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState("");

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `linear-gradient(
          135deg,
          #4b044b,
          #8a2759,
          #be8512,
          #990d3e,
          #622a8d
        )`
      }}
    >
      <div className="max-w-2xl w-full bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl border border-white/30 p-8 space-y-6">
        <h1
          className="text-4xl font-bold text-center flex items-center justify-center gap-2"
          style={{ color: "#442559" }}
        >
          <Leaf className="w-8 h-8" style={{ color: "#990d3e" }} />
          Quote Generator Web App
        </h1>

        {/* Restore spacing under the heading */}
        <div className="space-y-6">
          <QuoteForm onSubmit={setCurrentTopic} />
          {currentTopic ? (
            <QuoteList topic={currentTopic} />
          ) : (
            <p className="text-center" style={{ color: "#ff1493" }}>
              Enter a topic to see motivational quotes.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

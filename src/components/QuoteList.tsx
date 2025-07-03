import { FC } from "react";

interface QuoteListProps {
  topic?: string;
}

const quotesByTopic: Record<string, string[]> = {
  success: [
    "Success is no accident. It is hard work, perseverance, learning, and love of what you are doing.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The secret of success is to do the common thing uncommonly well.",
  ],
  motivation: [
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
  ],
  happiness: [
    "Happiness is not something ready made. It comes from your own actions.",
    "The purpose of our lives is to be happy.",
    "Happiness depends upon ourselves.",
  ],
};

const QuoteList: FC<QuoteListProps> = ({ topic }) => {
  if (!topic) return null;

  const normalized = topic.trim().toLowerCase();
  const quotes = quotesByTopic[normalized];

  return (
    <div className="bg-base-100 shadow rounded p-4 space-y-2">
      <p className="text-sm text-muted-foreground">
        Showing quotes for: <span className="font-semibold">{normalized}</span>
      </p>
      {quotes ? (
        <ul className="list-disc list-inside space-y-1">
          {quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted-foreground">
          No quotes found for this topic.
        </p>
      )}
    </div>
  );
};

export default QuoteList;

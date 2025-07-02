import { quotes } from "@/data/quotes";

export default function QuoteList() {
  return (
    <div className="space-y-4 mt-6">
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="p-4 bg-base-100 shadow rounded"
        >
          <p className="text-lg">{quote.text}</p>
        </div>
      ))}
    </div>
  );
}

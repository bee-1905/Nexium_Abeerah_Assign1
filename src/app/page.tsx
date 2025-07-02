import QuoteList from "@/components/QuoteList";

export default function Home() {
  const today = new Date().toLocaleDateString();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      <h1 className="text-3xl font-bold mb-4">
        🎯 Quote Generator Web App
      </h1>
      <p className="text-base">
        Welcome! Today is <span className="font-semibold">{today}</span>.
      </p>

      {/* Quote List */}
      <QuoteList />
    </main>
  );
}

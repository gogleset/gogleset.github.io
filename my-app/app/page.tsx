import Card from "./components/Card";
export default function HomePage() {
  return (
    <article className="flex flex-col items-center justify-between px-32  max-sm:px-5 bg-slate-200">
      <main className="flex w-full h-screen bg-slate-300">
        <Card />
      </main>
    </article>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <article className="flex flex-col w-full max-w-[1000px] items-center">
        {children}
      </article>
    </main>
  );
}

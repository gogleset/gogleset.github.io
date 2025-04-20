export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full justify-center items-center flex-col">
      <article className="flex justify-center w-full max-w-[1080px] p-5">
        {children}
      </article>
    </main>
  );
}

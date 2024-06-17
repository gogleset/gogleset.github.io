export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full justify-center items-center flex-col">
      <article className="flex justify-center max-lg:w-full w-[60%] p-5">
        {children}
      </article>
    </main>
  );
}

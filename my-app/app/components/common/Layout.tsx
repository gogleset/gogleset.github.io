export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex justify-center">
      <div className="flex flex-col w-full max-w-[1000px]">{children}</div>
    </article>
  );
}

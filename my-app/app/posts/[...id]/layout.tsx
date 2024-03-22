export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="flex justify-center">{children}</article>;
}

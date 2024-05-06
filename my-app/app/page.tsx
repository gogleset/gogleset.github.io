import PostCard from "./components/PostCard";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between max-lg:p-4 min-h-screen max-lg:min-h-sm">
      <div className="max-w-3xl grid grid-cols-2 max-lg:grid-cols-1 gap-2 p-2 w-full border-white border">
        <PostCard title="" description="" tag="" />
      </div>
    </div>
  );
}

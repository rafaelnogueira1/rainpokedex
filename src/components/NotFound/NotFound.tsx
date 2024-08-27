import { Search } from "@/components/Search";

function NotFound() {
  return (
    <main className="max-w-[1200px] mx-auto flex flex-col p-4 gap-8">
      <Search />
      <div className="w-full flex flex-col gap-8 items-center justify-between">
        <img
          src="/assets/images/empty-pokeball.png"
          width={400}
          height={400}
          alt="empty pokeball"
        />
        <p className="text-5xl text-blue-900">Page not found</p>
      </div>
    </main>
  );
}

export default NotFound;

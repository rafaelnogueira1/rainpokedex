import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto flex justify-between p-4 gap-8">
        <Outlet />
        <Sidebar />
      </main>
    </>
  );
}

export default Root;

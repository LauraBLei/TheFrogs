import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1200px] w-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

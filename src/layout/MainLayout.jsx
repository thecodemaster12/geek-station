import { Outlet } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { TbTerminal2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="min-h-screen">
      {/* MOBILE SIDEBAR */}
      <aside
        className={`flex flex-col gap-6 fixed top-0 left-0 z-50 p-4 h-full w-[280px] bg-dark border-r border-dark-gray transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoClose
            className="text-2xl cursor-pointer hover:text-primary"
            onClick={toggleSidebar}
          />
        </div>

        <div className="relative">
          <input
            className="border border-dark-gray py-3 pl-4 pr-10 rounded-md w-full focus:outline-0 focus:border-primary"
            type="text"
            placeholder="Search..."
          />
          <TbTerminal2 className="absolute top-1/2 right-3 -translate-y-1/2 text-xl" />
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Articles</a>
            </li>

            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-dark-gray mt-auto">
          <button className="btn w-full bg-primary text-dark hover:bg-dark hover:text-primary">
            Login
          </button>
        </div>
      </aside>
      <div className="flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-dark shrink-0 h-20 border-b border-dark-gray flex justify-between items-center gap-4">
          <div className=" flex items-center gap-4">
            <RiMenu5Fill
              onClick={toggleSidebar}
              className="shrink-0 text-2xl md:hidden cursor-pointer hover:text-primary transition duration-300"
            />
            <h1 className="shrink-0 font-bold text-2xl text-primary select-none">
              {" "}
              Geek Station
            </h1>
          </div>

          <div className="flex grow items-center gap-4">
            <div className="relative w-[70%] mx-auto hidden md:block">
              <input
                className="border border-dark-gray py-3 pl-4 pr-10 rounded-md w-full focus:outline-0 focus:border-primary"
                type="text"
                placeholder="Search..."
              />
              <TbTerminal2 className="absolute top-1/2 right-3 -translate-y-1/2 text-xl" />
            </div>
          </div>

          <div className="flex shrink-0 gap-4">
            <button className="btn bg-primary">Login</button>
            <button className="btn bg-primary">Sign Up</button>
          </div>
        </header>

        {/* BODY */}
        <div className="flex flex-1 gap-4 mt-4 container mx-auto items-start">
          {/* LEFT SIDEBAR */}
          <aside className="w-[250px] h-[calc(100vh-80px)] sticky top-[80px] overflow-y-auto hidden md:block bg-dark-gray">
            <nav>
              <ul>
                <li>
                  <a href="#">Sidebar Link</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <div className="sticky  p-4 top-[80px] mb-4 bg-dark">
              <ul className="flex justify-center gap-4">
                <li>
                  <a
                    className="text-primary py-2 px-4 border-b border-primary"
                    href="#"
                  >
                    Latest
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-primary hover:border-b hover:border-primary py-2 px-4 transition duration-300"
                    href="#"
                  >
                    Top
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:text-primary hover:border-b hover:border-primary py-2 px-4 transition duration-300"
                    href="#"
                  >
                    Your Picks
                  </a>
                </li>
              </ul>
            </div>
            <Outlet />
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="w-[250px] h-[calc(100vh-80px)] sticky top-[80px] overflow-y-auto hidden lg:block bg-dark-gray">
            Right Sidebar
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

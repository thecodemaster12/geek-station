import { Outlet } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const MainLayout = () => {
  return (
    <div className="h-screen bg-dark-bg text-white overflow-hidden">
      <div className="container mx-auto h-full flex flex-col">
        {/* HEADER */}
        <header className="bg-dark-gray-bg p-4 rounded-md flex items-center mb-4 shrink-0">
          <h1 className="text-primary shrink-0 text-2xl font-bold">
            Geek Station
          </h1>

          <div className="flex flex-1 items-center justify-center gap-6 px-6">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                className="bg-dark-bg px-4 py-2 rounded-md border border-gray-600 w-full focus:outline-none focus:border-primary"
                placeholder="Search..."
              />

              <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <a className="hover:text-primary transition" href="#">
                    Home
                  </a>
                </li>

                <li>
                  <a className="hover:text-primary transition" href="#">
                    About
                  </a>
                </li>

                <li>
                  <a className="hover:text-primary transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button className="btn bg-primary text-white">Login</button>

            <button className="btn bg-primary text-white">Sign Up</button>
          </div>
        </header>

        {/* BODY */}
        <div className="grid grid-cols-[260px_1fr_260px] gap-4 flex-1 min-h-0">
          {/* LEFT SIDEBAR */}
          <aside className="bg-dark-gray-bg rounded-md overflow-y-auto p-4">
            <nav>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="block hover:text-primary">
                    Sidebar Link
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="bg-dark-gray-bg rounded-md overflow-y-auto p-4">
            <Outlet />
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-dark-gray-bg rounded-md overflow-y-auto p-4">
            Right Sidebar
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

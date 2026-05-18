import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="min-w-[350px] md:min-w-[500px] bg-dark-gray rounded-md p-4">
          <Link to="/">
            <h1 className="shrink-0 font-bold text-2xl text-cyan-500 select-none text-center mb-6">
              {" "}
              Geek Station
            </h1>
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

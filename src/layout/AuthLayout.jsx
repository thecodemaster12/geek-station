import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="min-w-[400px] bg-dark-gray rounded-md p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

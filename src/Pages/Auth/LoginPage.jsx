import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <form className="flex flex-col gap-4" action="">
          <InputForm label="Email" type="email" name="email" />
          <InputForm label="Password" type="password" name="password" />

          <div className="mt-4 md:mt-10 flex flex-col gap-4">
            <ButtonForm label="Login" />
            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="hover:text-cyan-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

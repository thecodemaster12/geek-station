import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold">Register</h1>

        <form className="flex flex-col gap-4" action="">
          <InputForm label="Username" type="text" name="username" />
          <InputForm label="Email" type="email" name="email" />
          <InputForm label="Password" type="password" name="password" />

          <div className="mt-4 md:mt-10 flex flex-col gap-4">
            <ButtonForm label="Register" />
            <p className="text-center">
              Already have an account? {" "}
              <Link to="/login" className="hover:text-cyan-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;

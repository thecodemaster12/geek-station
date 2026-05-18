import { Link } from "react-router-dom"
import InputForm from "../../components/InputForm"
import ButtonForm from "../../components/ButtonForm"

const RegisterPage = () => {
  return (
    <>
        <div className="">
        <h1 className="text-center text-2xl font-bold">Register</h1>

        <form className="mt-8 flex flex-col gap-4" action="">
            <InputForm label="Email" type="email" name="email" />
            <InputForm label="Password"  type="password" name="password" />
            <ButtonForm  label="Register" />
            <p className="text-center">Already have an account? <Link to="/login" className="hover:text-cyan-500">Login</Link></p>
        </form>
    </div>
    </>
  )
}

export default RegisterPage
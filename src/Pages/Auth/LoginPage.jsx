import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
    <div className="">
        <h1 className="text-center">Login</h1>

        <form className="mt-8 flex flex-col gap-4" action="">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input className="border border-primary py-3 px-6" type="email" name="email" id="email" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input className="border border-primary py-3 px-6" type="password" name="password" id="password" />
            </div>
            <button className="mt-8 btn bg-primary" type="submit">Login</button>
            <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
        </form>
    </div>
    </>
  )
}

export default LoginPage
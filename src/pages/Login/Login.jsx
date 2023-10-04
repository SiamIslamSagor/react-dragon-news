import { Link } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";

const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center">This is login</h2>

        <form onSubmit={handleLogin} className="mx-auto md:w-3/4 lg:w-3/5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don not have an account?
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

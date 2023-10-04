import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import useAuth from "../../utils/UseAuth/useAuth";

const Login = () => {
  const { signInUser } = useAuth();

  const location = useLocation();
  console.log("login page location is:++>>>", location);

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //sign in user
    signInUser(email, password)
      .then(result => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center">Please Login</h2>

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
            <button onClick={signInUser} className="btn btn-primary">
              Login
            </button>
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

import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  useTitle("Login");
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorCode === "auth/wrong-password"
            ? "Incorrect password"
            : errorCode === "auth/user-not-found"
            ? "No user found with this email"
            : error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img
              src="https://i.ibb.co/2MHfVJF/login.png"
              style={{ width: "400px" }}
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-sm btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>

              <p className="text-center text-red-600 font-bold">{error}</p>

              <SocialLogin></SocialLogin>

              <p className="text-center my-4">
                New to KidzCarZone?{" "}
                <Link to="/register" className="text-orange-600 font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

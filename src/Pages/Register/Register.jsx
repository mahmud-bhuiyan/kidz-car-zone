import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  useTitle("Register");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-2">
            <img
              style={{ width: "600px" }}
              src="https://i.ibb.co/DL17bqC/register-3.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center mb-10">Register</h1>
              <form onSubmit={handleRegister}>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-sm input-bordered pr-10 w-full"
                      required
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirm"
                      placeholder="Confirm password"
                      className="input input-sm input-bordered pr-10 w-full"
                      required
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-sm input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-sm btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>

              <p className="text-center my-4">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-600 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

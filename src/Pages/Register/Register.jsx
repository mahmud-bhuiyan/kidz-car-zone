import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  useTitle("Register");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;

    if (password.length >= 6) {
      if (password === confirm) {
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            updateProfile(user, {
              displayName: name,
              photoURL: photo,
            })
              .then(() => {
                console.log(user);
                form.reset();
                navigate("/");
                window.location.reload();
              })
              .catch((error) => {
                console.log(error.message);
                setError(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
      } else {
        setError("Password and confirm password do not match!");
        return;
      }
    } else {
      setError("Password must be at least 6 characters long!");
      return;
    }
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
                    type="email"
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
                      placeholder="Password must be 6 characters long"
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

              <p className="text-center text-red-600 font-bold">{error}</p>

              <SocialLogin></SocialLogin>

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

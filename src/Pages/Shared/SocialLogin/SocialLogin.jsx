import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn}>
          <img
            src="https://i.ibb.co/k9GJVSZ/Google-Icon-PNG-rwscww.png"
            style={{ width: "25px" }}
            alt="google-icon"
          />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    navigate(`/forgot-password`, { state: { email } });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error("invaild email or password");

        // ..
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="md:min-h-screen w-11/12 mx-auto bg-base-200 flex justify-center items-center">
      <Helmet>
        <title>Login||FreezeAid</title>
      </Helmet>
      <div className="card my-14 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center">Login Now!</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12"
            >
              <FaEye />
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-sm mt-4 text-center">
          Forgot your password?
          <button
            onClick={handleForgotPassword}
            className="text-blue-500 underline"
          >
            Reset Password
          </button>
        </p>
        <p className="text-center text-sm">
          Don't Have An Account ?
          <Link className="text-blue-800" to="/register">
            Register
          </Link>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-600 hover:bg-blue-700 py-2 btn mt-4 text-gray-300 mx-auto"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

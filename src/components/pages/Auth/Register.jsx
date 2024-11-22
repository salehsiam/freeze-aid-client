import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password is not valid , Password will be at least one uppercase one lowercase and length must be 6 digit "
      );
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/").catch((err) => {
            alert(err);
          });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        <title>Register||FreezeAid</title>
      </Helmet>
      <div className="card my-14 bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center">Signup Now!</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
            <button className="btn btn-primary">Register Now</button>
          </div>
        </form>
        <p className="text-center text-sm">
          Already Have An Account ?{" "}
          <Link className="text-blue-800" to="/login">
            Login
          </Link>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-600 py-2 btn mt-4 text-gray-300 mx-auto"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto  text-blue-500 mt-4">
      <div className="navbar md:px-10">
        <div className="navbar-start">
          <a className="md:text-2xl text-xl font-semibold font-orbitron">
            FreezeAid
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` font-semibold text-sm py-2 px-2 rounded-lg  ${
                    isActive ? "  underline  " : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` font-semibold text-sm py-2  ${isActive ? "underline " : ""}`
                }
                to="/donation"
              >
                Donation
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  ` font-semibold text-sm py-2  ${isActive ? "underline " : ""}`
                }
                to="/how-to-help"
              >
                How to help
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` font-semibold text-sm py-2  ${isActive ? "underline " : ""}`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2 border rounded-full">
            {user?.photoURL ? (
              <img
                title={user.displayName}
                className="w-8 h-8  rounded-full"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
          </div>
          <div className="hidden lg:block">
            {user ? (
              <button
                className="btn bg-blue-500 hover:bg-blue-600 text-white"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn bg-blue-500 hover:bg-blue-600 text-white max-sm:hidden "
              >
                Login
              </Link>
            )}
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm right-0 dropdown-content bg-base-200 text-black rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/donation">Donation</NavLink>
              </li>
              <li>
                <NavLink to="/how-to-help">How to help</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                {user ? (
                  <button className=" text-start bg-blue-300" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

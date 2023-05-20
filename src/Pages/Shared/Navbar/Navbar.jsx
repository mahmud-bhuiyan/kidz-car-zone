import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/">My Toys</Link>
          </li>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-300 rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <img
            className="h-8 w-8 mr-2 rounded"
            src="https://i.ibb.co/zbHzfxB/kcz-svg.jpg"
            alt="KidzCarZone Logo"
          />
          <p className="text-xl font-bold hidden lg:flex">KidzCarZone</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          {user?.photoURL ? (
            <Link to="/" title={user.displayName}>
              <img
                src={user.photoURL}
                alt={user.displayName}
                style={{ width: "40px", borderRadius: "50%" }}
              />
            </Link>
          ) : (
            <FaUserCircle style={{ fontSize: "1.8rem" }}></FaUserCircle>
          )}
        </label>
      </div>
    </div>
  );
};

export default Navbar;

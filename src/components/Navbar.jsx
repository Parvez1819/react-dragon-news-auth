import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {

  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>

        {
          user ?
            <button onClick={handleSignOut} className="btn btn-neutral rounded-none">Signout</button>
            :
            <Link to="/login">
              <button className="btn btn-neutral rounded-none">Login</button>
            </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;

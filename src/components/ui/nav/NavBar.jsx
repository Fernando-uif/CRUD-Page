import "../../../sass/components/navBar.scss";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__elements">
        <span className="">Fernando Sosa Torres</span>
        <Link className="navBar__element1 navBar__element" to="/create">
          Create
        </Link>
        <Link className="navBar__element2 navBar__element" to="/read">
          Read
        </Link>
        <Link className="navBar__element3 navBar__element" to="/update">
          Update
        </Link>
        <Link className="navBar__element4 navBar__element" to="/delete">
          Delete
        </Link>
        <Link className="navBar__element4 navBar__element" to="/delete">
          Logout
        </Link>
      </div>
    </div>
  );
};

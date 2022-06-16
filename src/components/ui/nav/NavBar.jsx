import "../../../sass/components/NavBar.scss";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <span>Fernando Sosa</span>
      </div>
      <div>
        <Link className="navBar__element1" to='/create'>Create</Link>
        <Link className="navBar__element2"to='/read'>Read</Link>
        <Link className="navBar__element3"to='/update'>Update</Link>
        <Link className="navBar__element4"to='/delete'>Delete</Link>
      </div>
    </div>
  );
};

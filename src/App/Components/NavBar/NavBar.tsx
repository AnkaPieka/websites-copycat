import { NavLink } from "react-router-dom";
import "./style.scss";

function NavBar() {
  return (
    <div id="main-navbar">
      <NavLink to="/">
        <h2>Copycat</h2>
      </NavLink>
    </div>
  );
}

export default NavBar;

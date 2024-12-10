/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import withRouter from "../hoc/withRouter";

const Navbar = ({ location }) => {
  const hideNavbarRoutes = ["/login"];
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/repertoire">Repertoire</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);

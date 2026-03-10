import { Link } from "react-router-dom";
import "./nav-bar.css";
const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;

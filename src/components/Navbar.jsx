import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-conatiner">
    <nav>
      <div className="logo">
        <h3>Pokemon</h3>
      </div>
      <div className="navlinks">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/Cards" className="link">Cards</NavLink>
      </div>
    </nav>
  </div>
);
export default Navbar;

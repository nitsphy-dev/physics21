//* React Imports
import { Link } from 'react-router-dom';

//* CSS Imports
import "./css/Navbar.scss";

//* React Component
const Navbar = () => {
  return (
    <header className="navbar">
      
      {/* Logo */}
      <div className="navbar-logo"></div>

      {/* Mobile Menu */}
      <div className="mob-menu">
        <div className="mob-menu-itm" id="open">
          <i class="fas fa-bars"></i>
        </div>
        <div className="mob-menu-itm" id="close">
          <i class="fas fa-times"></i>
        </div> 
      </div>

      {/* Navbar Items */}
      <div className="navbar-itm-ctnr">
        <Link to="/" className="navbar-itm scrl-top">Home</Link>
        <Link to="/admissions" className="navbar-itm scrl-top">Admissions</Link>

        {/* Navbar Dropdown */}
        <span className="navbar-itm scrl-top drpdwn">
          <span className="drpdwn-title">People&ensp;<i class="fas fa-chevron-down"></i></span>
          <div className="drpdwn-menu">
            <Link to="/people/faculty" className="drpdwn-itm">Faculty</Link>
            <Link to="/people/alumni" className="drpdwn-itm">Alumni</Link>
            <Link to="/people/dev-team" className="drpdwn-itm">Dev Team</Link>
          </div>        
        </span>

        <Link to="/programs" className="navbar-itm scrl-top">Programs</Link>
        <Link to="/downloads" className="navbar-itm scrl-top">Downloads</Link>
        <Link to="/campus" className="navbar-itm scrl-top">Campus</Link>
        <Link to="/reach-us" className="navbar-itm scrl-top">Reach Us</Link>
      </div>
    </header>
  )
}

export default Navbar;
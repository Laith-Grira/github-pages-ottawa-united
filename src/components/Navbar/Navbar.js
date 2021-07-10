import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <nav className="navbar">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/fixtures">Fixtures</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/stats">Stats</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;
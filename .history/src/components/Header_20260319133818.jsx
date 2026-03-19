import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { content } from '../content/contents';

export default function Header() {
    const { header } = content;

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className="logo">
                    {header.logo || "LOGO"}
                </Link>
            </div>

            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/design" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Designs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
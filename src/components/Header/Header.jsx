import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="TravelTrucks Logo" />
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Catalog
          </NavLink>
        </nav>

        <div className={styles.spacer}></div>
      </div>
    </header>
  );
};

export default Header;

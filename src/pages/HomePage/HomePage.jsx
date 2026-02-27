import { Link } from "react-router-dom";
import heroBg from "../../assets/hero.png";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div
      className={styles.homeWrapper}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Campers of your dreams</h1>

        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>

        <Link to="/catalog">
          <button className={styles.viewButton}>View Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

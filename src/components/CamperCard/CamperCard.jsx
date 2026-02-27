import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice.js";
import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);
  const isFavorite = favoriteItems.includes(camper.id);

  const formattedPrice = Number(camper.price).toFixed(2);
  const imageSrc =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].original || camper.gallery[0]
      : "https://via.placeholder.com/300x200?text=Gorsel+Yok";

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={camper.name} className={styles.image} />

      <div className={styles.details}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>

          <div className={styles.priceContainer}>
            <h2 className={styles.price}>€{formattedPrice}</h2>
            <button
              onClick={() => dispatch(toggleFavorite(camper.id))}
              className={styles.favButton}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isFavorite ? "#E44848" : "none"}
                stroke={isFavorite ? "#E44848" : "#101828"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.ratingLocation}>
          <span>
            ⭐ {camper.rating} ({camper.reviews ? camper.reviews.length : 0}{" "}
            Reviews)
          </span>
          <span>📍 {camper.location}</span>
        </div>

        <p className={styles.description}>
          {camper.description?.substring(0, 60)}...
        </p>

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.showMoreBtn}>Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;

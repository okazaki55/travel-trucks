import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);
  const isFavorite = favoriteItems.includes(camper.id);
  const formattedPrice = Number(camper.price).toFixed(2);
  const imageSrc =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].original || camper.gallery[0]
      : "https://via.placeholder.com/300x200?text=Gorsel+Yok";

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "24px",
        display: "flex",
        gap: "24px",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <img
        src={imageSrc}
        alt={camper.name}
        style={{
          width: "290px",
          height: "310px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px" }}>{camper.name}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h2 style={{ margin: 0, fontSize: "24px" }}>€{formattedPrice}</h2>

            <button
              onClick={handleFavoriteClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
                display: "flex",
                alignItems: "center",
                outline: "none",
              }}
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

        <div
          style={{
            marginTop: "8px",
            display: "flex",
            gap: "16px",
            color: "#101828",
          }}
        >
          <span>
            ⭐ {camper.rating} ({camper.reviews ? camper.reviews.length : 0}
            Reviews)
          </span>
          <span>📍 {camper.location}</span>
        </div>

        <p style={{ color: "#475467", marginTop: "24px", lineHeight: "1.5" }}>
          {camper.description.substring(0, 60)}...
        </p>

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              marginTop: "24px",
              padding: "16px 40px",
              backgroundColor: "#E44848",
              color: "white",
              border: "none",
              borderRadius: "200px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;

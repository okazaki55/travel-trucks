import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  // 1. Kriter: Fiyatı ondalıklı formata çeviriyoruz (örn: 8000 -> 8000.00)
  const formattedPrice = Number(camper.price).toFixed(2);

  // API'den gelen ilk görseli alıyoruz (Eğer görsel yoksa placeholder gösteriyoruz)
  const imageSrc =
    camper.gallery && camper.gallery.length > 0
      ? camper.gallery[0].original || camper.gallery[0]
      : "https://via.placeholder.com/300x200?text=Gorsel+Yok";

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
      }}
    >
      {/* Karavan Görseli */}
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

      {/* Karavan Bilgileri */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px" }}>{camper.name}</h2>
          <h2 style={{ margin: 0, fontSize: "24px" }}>€{formattedPrice}</h2>
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
            ⭐ {camper.rating} ({camper.reviews ? camper.reviews.length : 0}{" "}
            Reviews)
          </span>
          <span>📍 {camper.location}</span>
        </div>

        <p style={{ color: "#475467", marginTop: "24px", lineHeight: "1.5" }}>
          {/* Açıklama çok uzunsa ilk 60 karakteri gösterip ... koyuyoruz */}
          {camper.description.substring(0, 60)}...
        </p>

        {/* 2. Kriter: target="_blank" ile yeni sekmede açılmasını sağlıyoruz */}
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
              cursor: "pointer", // Kriter: Butonların cursor: pointer olması
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

import { Link } from "react-router-dom";
import heroBg from "../assets/hero.png";

const HomePage = () => {
  return (
    <div
      style={{
        // Header'ın altındaki tüm alanı kaplaması için
        minHeight: "calc(100vh - 72px)",
        // Arka plan resmini import ettiğimiz değişkenden alıyoruz
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#101828", // Resim yüklenene kadar koyu bir renk
      }}
    >
      {/* 5. Maksimum genişlik 1440px ve tasarımda belirtilen paddingler */}
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          margin: "0 auto",
          padding: "260px 64px", // Üst-alt: 260px, Sağ-sol: 64px
          boxSizing: "border-box",
        }}
      >
        {/* 2. Başlık (H1): Inter, Semi Bold (600), 48px, line-height 32px, margin 16px */}
        <h1
          style={{
            color: "#F7F7F7",
            fontFamily: "'Inter', sans-serif",
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: "32px",
            margin: "0 0 16px 0",
          }}
        >
          Campers of your dreams
        </h1>

        {/* 3. Alt Başlık (H2): Inter, Semi Bold (600), 24px, line-height 32px, margin 40px */}
        <p
          style={{
            color: "#F7F7F7",
            fontFamily: "'Inter', sans-serif",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "32px",
            margin: "0 0 40px 0",
          }}
        >
          You can find everything you want in our catalog
        </p>

        {/* 4. Buton: #E44848, padding 16px 60px, Radius 200px */}
        <Link to="/catalog">
          <button
            style={{
              padding: "16px 60px",
              backgroundColor: "#E44848",
              color: "white",
              border: "none",
              borderRadius: "200px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#D84343")} // Hover efekti (bir tık koyusu)
            onMouseOut={(e) => (e.target.style.backgroundColor = "#E44848")}
          >
            View Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

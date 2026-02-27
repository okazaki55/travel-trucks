import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ backgroundColor: "#F7F7F7", borderBottom: "1px solid #E2E8F0" }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "24px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Sol Taraf: Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#101828",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Travel<span style={{ fontWeight: "500" }}>Trucks</span>
        </Link>

        {/* Orta Taraf: Navigasyon Linkleri */}
        <nav style={{ display: "flex", gap: "32px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              color: isActive ? "#E44848" : "#101828", // Aktif sayfada kırmızı, değilse siyah
              transition: "color 0.2s",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            style={({ isActive }) => ({
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              color: isActive ? "#E44848" : "#101828",
              transition: "color 0.2s",
            })}
          >
            Catalog
          </NavLink>
        </nav>

        {/* Sağ Tarafı Dengelemek İçin Boş Bir Div (Logo ile ortalamayı korumak için) */}
        <div style={{ width: "120px" }}></div>
      </div>
    </header>
  );
};

export default Header;

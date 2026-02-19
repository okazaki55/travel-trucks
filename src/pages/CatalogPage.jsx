import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // Redux store'dan verileri çekiyoruz
  const { items, isLoading, error } = useSelector((state) => state.campers);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    // Sayfa ekrana ilk basıldığında API'den verileri getir
    dispatch(fetchCampers());
  }, [dispatch]);

  // Kriter: Asenkron işlemler için Loading indicator (Yükleniyor göstergesi)
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
        🔄 Karavanlar yükleniyor...
      </div>
    );
  }

  // Hata durumu
  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        ❌ Bir hata oluştu: {error}
      </div>
    );
  }

  const displayedItems = items.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        display: "flex",
        gap: "40px",
      }}
    >
      {/* Sol Taraf: Filtreleme Alanı (Şimdilik Boş Bırakıyoruz) */}
      <div style={{ width: "300px" }}>
        <h3 style={{ marginBottom: "20px" }}>Filtreler Buraya Gelecek</h3>
        <div
          style={{
            height: "500px",
            border: "1px dashed #ccc",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      {/* Sağ Taraf: Karavan Listesi */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          {displayedItems.length > 0 ? (
            displayedItems.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))
          ) : (
            <p>Hiç karavan bulunamadı.</p>
          )}
        </div>
        {/* Eğer gösterilen sayı, toplam item sayısından azsa butonu göster */}
        {visibleCount < items.length && (
          <button
            onClick={handleLoadMore}
            style={{
              marginTop: "20px",
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#101828",
              border: "1px solid #DADDE1",
              borderRadius: "200px",
              cursor: "pointer", // Kriter: cursor pointer olmalı
              fontWeight: "500",
              fontSize: "16px",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.borderColor = "#E44848")}
            onMouseOut={(e) => (e.target.style.borderColor = "#DADDE1")}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

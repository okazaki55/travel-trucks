import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import FilterSidebar from "../components/FilterSidebar";
import CamperCard from "../components/CamperCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, hasMore } = useSelector(
    (state) => state.campers,
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCampers({ page, limit: 4 }));
  }, [dispatch, page]);

  if (isLoading && page === 1 && items.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
        🔄 Karavanlar yükleniyor...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        ❌ Bir hata oluştu: {error}
      </div>
    );
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
      <div style={{ width: "360px", flexShrink: 0 }}>
        <FilterSidebar setPage={setPage} />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          {items.length > 0
            ? items.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            : !isLoading && <p>Hiç karavan bulunamadı.</p>}
        </div>

        {hasMore && !isLoading && (
          <button
            onClick={handleLoadMore}
            style={{
              marginTop: "20px",
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#101828",
              border: "1px solid #DADDE1",
              borderRadius: "200px",
              cursor: "pointer",
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

        {isLoading && page > 1 && (
          <p style={{ marginTop: "20px", color: "#475467" }}>
            Daha fazla karavan getiriliyor...
          </p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

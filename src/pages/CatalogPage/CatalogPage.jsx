import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar.jsx";
import styles from "./CatalogPage.module.css";

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
    return <div className={styles.message}>🔄 Karavanlar yükleniyor...</div>;
  }

  if (error) {
    return <div className={styles.error}>❌ Bir hata oluştu: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <FilterSidebar setPage={setPage} />
      </div>

      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {items.length > 0
            ? items.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            : !isLoading && <p>Hiç karavan bulunamadı.</p>}
        </div>

        {hasMore && !isLoading && (
          <button
            onClick={() => setPage((p) => p + 1)}
            className={styles.loadMoreBtn}
          >
            Load More
          </button>
        )}

        {isLoading && page > 1 && (
          <p className={styles.loadingText}>
            Daha fazla karavan getiriliyor...
          </p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

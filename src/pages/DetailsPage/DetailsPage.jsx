import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersSlice.js";
import styles from "./DetailsPage.module.css";
import Features from "../../components/Features/Features.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCamper, isDetailsLoading, detailsError } = useSelector(
    (state) => state.campers,
  );
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isDetailsLoading || !currentCamper) {
    return (
      <div className={styles.loading}>⏳ Karavan detayları yükleniyor...</div>
    );
  }

  if (detailsError) {
    return (
      <div className={styles.loading} style={{ color: "red" }}>
        ❌ Hata: {detailsError}
      </div>
    );
  }

  const formattedPrice = Number(currentCamper.price).toFixed(2);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{currentCamper.name}</h1>
      <div className={styles.ratingLocation}>
        <span>
          ⭐ {currentCamper.rating} (
          {currentCamper.reviews ? currentCamper.reviews.length : 0} Reviews)
        </span>
        <span>📍 {currentCamper.location}</span>
      </div>
      <h2 className={styles.price}>€{formattedPrice}</h2>

      <div className={styles.gallery}>
        {currentCamper.gallery &&
          currentCamper.gallery.map((img, index) => (
            <img
              key={index}
              src={img.original || img}
              alt={`${currentCamper.name} - ${index + 1}`}
              className={styles.image}
            />
          ))}
      </div>

      <p className={styles.description}>{currentCamper.description}</p>

      <div className={styles.tabs}>
        <button
          className={activeTab === "features" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.tabContent}>
          {activeTab === "features" && <Features />}

          {activeTab === "reviews" && <Reviews />}
        </div>

        <div className={styles.bookingFormWrapper}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

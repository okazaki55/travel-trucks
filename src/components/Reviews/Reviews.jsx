import { useSelector } from "react-redux";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const { currentCamper } = useSelector((state) => state.campers);

  if (
    !currentCamper ||
    !currentCamper.reviews ||
    currentCamper.reviews.length === 0
  ) {
    return <p style={{ color: "#475467" }}>No reviews yet.</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i <= rating ? "#FFC531" : "#F2F4F7"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.472 5.008L16 5.816L12 9.712L12.944 15.2L8 12.6L3.056 15.2L4 9.712L0 5.816L5.528 5.008L8 0Z" />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div className={styles.list}>
      {currentCamper.reviews.map((review, index) => (
        <div key={index} className={styles.reviewItem}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={styles.nameAndStars}>
              <h4 className={styles.name}>{review.reviewer_name}</h4>
              <div className={styles.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>

          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

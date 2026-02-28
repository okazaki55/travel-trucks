import { useSelector } from "react-redux";
import styles from "./Features.module.css";

const Features = () => {
  const { currentCamper } = useSelector((state) => state.campers);

  if (!currentCamper) return null;

  const formatText = (text) => {
    if (!text) return "";
    const spaced = text.replace(/([A-Z])/g, " $1");
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.badges}>
        <div className={styles.badge}>
          <i className="icon-transmission" style={{ fontSize: "20px" }}></i>{" "}
          {formatText(currentCamper.transmission)}
        </div>

        <div className={styles.badge}>
          <i className="icon-engine" style={{ fontSize: "20px" }}></i>{" "}
          {formatText(currentCamper.engine)}
        </div>

        {currentCamper.kitchen && (
          <div className={styles.badge}>
            <i className="icon-kitchen" style={{ fontSize: "20px" }}></i>{" "}
            Kitchen
          </div>
        )}

        {currentCamper.AC && (
          <div className={styles.badge}>
            <i className="icon-ac" style={{ fontSize: "20px" }}></i> AC
          </div>
        )}

        {currentCamper.TV && (
          <div className={styles.badge}>
            <i className="icon-tv" style={{ fontSize: "20px" }}></i> TV
          </div>
        )}

        {currentCamper.bathroom && (
          <div className={styles.badge}>
            <i className="icon-bathroom" style={{ fontSize: "20px" }}></i>{" "}
            Bathroom
          </div>
        )}

        {currentCamper.radio && (
          <div className={styles.badge}>
            <i className="icon-radio" style={{ fontSize: "20px" }}></i> Radio
          </div>
        )}

        {currentCamper.refrigerator && (
          <div className={styles.badge}>
            <i className="icon-refrigerator" style={{ fontSize: "20px" }}></i>{" "}
            Refrigerator
          </div>
        )}

        {currentCamper.microwave && (
          <div className={styles.badge}>
            <i className="icon-microwave" style={{ fontSize: "20px" }}></i>{" "}
            Microwave
          </div>
        )}

        {currentCamper.gas && (
          <div className={styles.badge}>
            <i className="icon-gas" style={{ fontSize: "20px" }}></i> Gas
          </div>
        )}

        {currentCamper.water && (
          <div className={styles.badge}>
            <i className="icon-water" style={{ fontSize: "20px" }}></i> Water
          </div>
        )}
      </div>

      <div>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>
        <div className={styles.detailsList}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Form</span>
            <span>{formatText(currentCamper.form)}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Length</span>
            <span>{currentCamper.length}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Width</span>
            <span>{currentCamper.width}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Height</span>
            <span>{currentCamper.height}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Tank</span>
            <span>{currentCamper.tank}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Consumption</span>
            <span>{currentCamper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

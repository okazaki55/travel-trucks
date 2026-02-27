import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  setForm,
  toggleFeature,
} from "../../redux/filtersSlice.js";
import { fetchCampers } from "../../redux/campersSlice.js";
import styles from "./FilterSidebar.module.css";

const FilterSidebar = ({ setPage }) => {
  const dispatch = useDispatch();
  const { location, form, features } = useSelector((state) => state.filters);

  const equipmentOptions = [
    { id: "AC", label: "AC", icon: "❄️" },
    { id: "kitchen", label: "Kitchen", icon: "🍳" },
    { id: "TV", label: "TV", icon: "📺" },
    { id: "bathroom", label: "Bathroom", icon: "🚿" },
  ];

  const typeOptions = [
    { id: "panelTruck", label: "Van", icon: "🚐" },
    { id: "fullyIntegrated", label: "Fully Integrated", icon: "🚌" },
    { id: "alcove", label: "Alcove", icon: "🛻" },
  ];

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>📍</span>
          <input
            type="text"
            placeholder="City"
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
            className={styles.input}
          />
        </div>
      </div>

      <p className={styles.filterSubtitle}>Filters</p>

      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
        <div className={styles.buttonGrid}>
          {equipmentOptions.map((item) => {
            const isSelected = features.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => dispatch(toggleFeature(item.id))}
                className={`${styles.filterBtn} ${styles.equipmentBtn} ${isSelected ? styles.btnSelected : styles.btnUnselected}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.btnLabel}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>Vehicle type</h3>
        <div className={styles.buttonGrid}>
          {typeOptions.map((item) => {
            const isSelected = form === item.id;
            return (
              <button
                key={item.id}
                onClick={() => dispatch(setForm(item.id))}
                className={`${styles.filterBtn} ${styles.typeBtn} ${isSelected ? styles.btnSelected : styles.btnUnselected}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.typeBtnLabel}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button onClick={handleSearch} className={styles.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default FilterSidebar;

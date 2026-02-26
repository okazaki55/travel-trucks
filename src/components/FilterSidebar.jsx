import { useDispatch, useSelector } from "react-redux";
import { setLocation, setForm, toggleFeature } from "../redux/filtersSlice";
import { fetchCampers } from "../redux/campersSlice";

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
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "32px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#101828",
            fontWeight: "500",
          }}
        >
          Location
        </label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "16px", top: "16px" }}>
            📍
          </span>
          <input
            type="text"
            placeholder="City"
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
            style={{
              width: "100%",
              padding: "16px 16px 16px 44px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#F7F7F7",
              fontSize: "16px",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>
      </div>

      <p style={{ color: "#475467", fontWeight: "500", marginBottom: "14px" }}>
        Filters
      </p>

      <div style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "20px",
            borderBottom: "1px solid #DADDE1",
            paddingBottom: "24px",
            marginBottom: "24px",
          }}
        >
          Vehicle equipment
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {equipmentOptions.map((item) => {
            const isSelected = features.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => dispatch(toggleFeature(item.id))}
                style={{
                  width: "calc(50% - 5px)",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  border: `1px solid ${isSelected ? "#E44848" : "#DADDE1"}`,
                  borderRadius: "10px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  outline: "none",
                  boxShadow: "none",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: "24px" }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#101828",
                    fontWeight: "500",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "20px",
            borderBottom: "1px solid #DADDE1",
            paddingBottom: "24px",
            marginBottom: "24px",
          }}
        >
          Vehicle type
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {typeOptions.map((item) => {
            const isSelected = form === item.id;
            return (
              <button
                key={item.id}
                onClick={() => dispatch(setForm(item.id))}
                style={{
                  width: "calc(33.33% - 7px)",
                  padding: "16px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  border: `1px solid ${isSelected ? "#E44848" : "#DADDE1"}`,
                  borderRadius: "10px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  outline: "none",
                  boxShadow: "none",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: "24px" }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#101828",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleSearch}
        style={{
          width: "160px",
          padding: "16px 0",
          backgroundColor: "#E44848",
          color: "white",
          border: "none",
          borderRadius: "200px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default FilterSidebar;

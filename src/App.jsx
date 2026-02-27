import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              Sayfa Bulunamadı (404)
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;

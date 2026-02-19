import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route path="*" element={<div>Sayfa Bulunamadı (404) </div>} />
      </Routes>
    </>
  );
}

export default App;

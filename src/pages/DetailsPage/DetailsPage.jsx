import { useParams } from "react-router-dom";

const CamperDetailsPage = () => {
  const { id } = useParams(); // URL'deki :id parametresini yakalamak için

  return (
    <div>
      <h1>Karavan Detay Sayfası</h1>
      <p>Görüntülenen Araç ID: {id}</p>
      <p>Burada detaylar, galeri ve rezervasyon formu olacak.</p>
    </div>
  );
};

export default CamperDetailsPage;

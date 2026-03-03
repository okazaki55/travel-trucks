[🇬🇧 Read this in English](./README.en.md)

# 🚐 TravelTrucks - Karavan Kiralama Uygulaması

Karavan kiralamak için geliştirilmiş modern, duyarlı (responsive) ve tam işlevsel bir Tek Sayfalı Uygulama (SPA). Kullanıcılar mevcut araç kataloğuna göz atabilir, tercihlerine göre (konum, donanım, araç tipi) filtreleme yapabilir, detaylı araç özelliklerini inceleyebilir ve rezervasyon formunu doldurabilirler.

## ✨ Özellikler

- **Dinamik Katalog:** REST API'den çekilen zengin karavan listesini görüntüleme.
- **Gelişmiş Filtreleme:** Araçları konuma, şanzıman tipine, araç kasasına ve iç donanıma (Klima, Mutfak, TV vb.) göre filtreleme.
- **State Yönetimi:** Bileşenler arası kusursuz küresel durum (state) yönetimi için Redux Toolkit entegrasyonu.
- **Özel İkon Seti:** Optimum performans ve sonsuz ölçeklenebilir SVG'ler için IcoMoon kullanılarak oluşturulmuş özel, hafif bir ikon seti.
- **Responsive (Duyarlı) Tasarım:** Masaüstü, tablet ve mobil ekranlara kusursuz uyum sağlayan akıcı mizanpaj.
- **İstemci Taraflı Yönlendirme:** React Router Dom kullanarak hızlı ve akıcı sayfa geçişleri.
- **Vercel'e Hazır:** SPA yönlendirme (routing) desteği ile Vercel üzerinde anında yayına alınmak üzere önceden yapılandırıldı.

## 🛠️ Kullanılan Teknolojiler

- **Framework:** React (Vite ile oluşturuldu)
- **State Yönetimi:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Yönlendirme (Routing):** React Router v6 (`react-router-dom`)
- **Stilleme:** CSS Modules (Bileşen bazlı stillendirme)
- **İkonlar:** Özel IcoMoon Font Paketi
- **API/Backend:** Axios ve MockAPI (Gerçek bir backend'i simüle etmek için)
- **Canlıya Alma (Deployment):** Vercel

## 🚀 Başlangıç

### Ön Koşullar

Bilgisayarınızda [Node.js](https://nodejs.org/)'in yüklü olduğundan emin olun.

### Kurulum

1. Repoyu klonlayın:
   bash
   git clone [github](https://github.com/okazaki55/travel-trucks.git)

2. Proje dizinine girin:
   Bash
   cd traveltrucks

3. Bağımlılıkları (paketleri) yükleyin:
   Bash
   npm install

4. Geliştirme sunucusunu başlatın:
   Bash
   npm run dev

5. Uygulamanın çalıştığını görmek için tarayıcınızda http://localhost:5173 adresine gidin.

📁 Proje Yapısı

src/components/: Yeniden kullanılabilir UI bileşenleri (CamperCard, FilterSidebar, BookingForm vb.)

src/pages/: Ana sayfa görünümleri (HomePage, CatalogPage, CamperDetailsPage)

src/redux/: Redux dilimleri (campersSlice.js, filtersSlice.js) ve store yapılandırması.

src/assets/: Özel IcoMoon font paketi ve global CSS gibi statik dosyalar.

src/services/: API yapılandırması ve Axios örnekleri.

🔗 Canlıya Alma (Deployment)
Bu proje, SPA istemci taraflı yönlendirmelerini yönetmek için bir vercel.json yapılandırma dosyası içerir. GitHub reposu içe aktarılarak Vercel üzerinde anında yayına alınabilir.

Özenle tasarlandı ve geliştirildi.

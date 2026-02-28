import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

// Bu bileşen, takvim bileşenine özgü stilleri tutar
const DatePickerStyles = () => (
  <style>
    {`
      /* Takvim İkonu - placeholder'ın yanındaki */
      .input-with-icon {
        position: relative;
      }
      .input-with-icon::after {
        content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 2V6' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 2V6' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3 10H21' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 14H8.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 14H12.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 14H16.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 18H8.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 18H12.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 18H16.01' stroke='%23475467' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }

      /* Tüm Form Giriş Alanı Stilleri - Figma Renkleri ile */
      .custom-input {
        width: 100%;
        padding: 18px;
        background-color: #F7F7F7; /* Figma UI Kit'ten açık gri arkaplan */
        border: none;
        border-radius: 10px; /* Figma UI Kit'ten yumuşak köşeler */
        font-family: 'Inter', sans-serif; /* Figma'daki font */
        font-size: 16px;
        color: #101828; /* Figma UI Kit'ten koyu gri text */
        outline: none;
        box-sizing: border-box;
      }
      .custom-input::placeholder {
        color: #475467; /* Figma UI Kit'ten placeholder rengi */
      }

      /* Takvim Konteyneri - Figma'daki gibi */
      .react-datepicker {
        font-family: 'Inter', sans-serif !important;
        border: 1px solid #DADDE1; /* Figma UI Kit'ten ince kenarlık */
        border-radius: 10px !important;
        background-color: #FFFFFF !important;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1) !important;
        padding: 18px !important;
      }

      /* Takvim Başlığı (Ay, Yıl, Oklar) - Figma'daki gibi */
      .react-datepicker__header {
        background-color: #FFFFFF !important;
        border-bottom: none !important;
        padding-top: 0 !important;
      }
      .react-datepicker__current-month {
        font-size: 18px !important;
        font-weight: 600 !important;
        color: #101828 !important; /* Figma UI Kit'ten koyu text */
      }
      .react-datepicker__navigation-icon::before {
        border-color: #101828 !important; /* Figma UI Kit'ten koyu renkli oklar */
      }

      /* Gün Adları - Figma'daki gibi */
      .react-datepicker__day-names {
        margin-top: 10px !important;
      }
      .react-datepicker__day-name {
        font-size: 14px !important;
        color: #475467 !important; /* Figma UI Kit'ten gri text */
        width: 40px !important;
        line-height: 40px !important;
      }

      /* Günler - Figma'daki gibi */
      .react-datepicker__day {
        font-size: 14px !important;
        color: #101828 !important; /* Figma UI Kit'ten koyu text */
        width: 40px !important;
        height: 40px !important;
        line-height: 40px !important;
        border-radius: 50% !important; /* Yuvarlak köşeler */
      }
      .react-datepicker__day:hover {
        background-color: #F7F7F7 !important;
      }

      /* Seçili Gün - Figma'daki gibi */
      .react-datepicker__day--selected,
      .react-datepicker__day--keyboard-selected {
        background-color: #101828 !important; /* Figma UI Kit'ten koyu gri */
        color: #FFFFFF !important; /* Beyaz metin */
      }

      /* Başka Aya Ait Günler - Figma'daki gibi */
      .react-datepicker__day--outside-month {
        color: rgba(71, 84, 103, 0.4) !important; /* Figma UI Kit'ten silik text */
      }
    `}
  </style>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null, // Takvim verisi için null
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Buraya form gönderme mantığınızı ekleyebilirsiniz.
  };

  return (
    <>
      <DatePickerStyles />
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          border: "1px solid #DADDE1",
          padding: "24px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#101828",
            margin: "0 0 8px 0",
          }}
        >
          Book your campervan now
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#475467",
            margin: "0 0 24px 0",
          }}
        >
          Stay connected! We are always ready to help you.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {/* İsim Alanı */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="custom-input"
          />

          {/* E-posta Alanı */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="custom-input"
          />

          {/* Tarih Alanı - Takvim Bileşeni ile Değiştirildi */}
          <div className="input-with-icon">
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              placeholderText="Booking date*" // Figma'daki tam metin
              required
              className="custom-input"
              locale={enUS}
              calendarClassName="custom-calendar"
            />
          </div>

          {/* Yorum Alanı */}
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className="custom-input"
            style={{
              height: "114px",
              resize: "none",
            }}
          ></textarea>

          {/* Gönder Butonu - Figma UI Kit'ten kırmızı renk ve köşe radius ile */}
          <button
            type="submit"
            style={{
              backgroundColor: "#E44848", // Figma UI Kit'ten kırmızı renk
              color: "#FFFFFF",
              border: "none",
              borderRadius: "200px", // Figma UI Kit'ten büyük köşe radius
              padding: "16px 60px", // Figma UI Kit'ten padding
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
              alignSelf: "flex-start",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;

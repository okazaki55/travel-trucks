import { useState } from "react";
import DatePicker from "react-datepicker";
import { enUS } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
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
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <div className="input-with-icon">
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Booking date*"
            required
            className={styles.input}
            locale={enUS}
            calendarClassName="custom-calendar"
          />
        </div>

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
        ></textarea>

        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.submitBtn}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

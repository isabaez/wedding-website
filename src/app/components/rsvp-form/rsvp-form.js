'use client';

import styles from "@components/rsvp/rsvp.module.scss";
import { useState } from "react";

export default function RsvpForm() {
  const [result, setResult] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    attendees: "",
    dietary: "",
    song: "",
    comments: "",
    message: ""
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    console.log('formData', formData);

    formData.append("access_key", "3b000ad7-da14-4d30-9734-3519baa420d7");
    formData.append("subject", `[RSVP] ${formData.get("name")}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className={styles.floatingLabelGroup}>
          <input type="text" name="name" value={fields.name} onChange={handleInputChange} required className={fields.name ? styles.filled : ''} />
          <label className={fields.name ? styles.filled : ''}>Name</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <input type="email" name="email" value={fields.email} onChange={handleInputChange} required className={fields.email ? styles.filled : ''} />
          <label className={fields.email ? styles.filled : ''}>Email</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <input type="text" name="attendees" value={fields.attendees} onChange={handleInputChange} required className={fields.attendees ? styles.filled : ''} />
          <label className={fields.attendees ? styles.filled : ''}>Attendees</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <input type="text" name="dietary" value={fields.dietary} onChange={handleInputChange} className={fields.dietary ? styles.filled : ''} />
          <label className={fields.dietary ? styles.filled : ''}>Dietary Restrictions</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <input type="textarea" name="songs" value={fields.song} onChange={handleInputChange} className={fields.song ? styles.filled : ''} />
          <label className={fields.song ? styles.filled : ''}>Any Song Requests?</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <input type="text" name="comments" value={fields.comments} onChange={handleInputChange} className={fields.comments ? styles.filled : ''} />
          <label className={fields.comments ? styles.filled : ''}>Other Comments</label>
        </div>
        <div className={styles.floatingLabelGroup}>
          <textarea name="message" value={fields.message} onChange={handleInputChange} required className={fields.message ? styles.filled : ''}></textarea>
          <label className={fields.message ? styles.filled : ''}>Message</label>
        </div>
        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
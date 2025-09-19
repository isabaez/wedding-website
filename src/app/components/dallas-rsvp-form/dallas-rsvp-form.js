'use client';
import { useState } from "react";
import styles from "@components/dallas-rsvp-form/dallas-rsvp-form.module.scss";
import FloatingLabelInput from "@components/global/floating-label-input/floating-label-input";
import Link from "next/link";

export default function DallasRsvpForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [attending, setAttending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log('formData', formData);

    formData.append("access_key", "3b000ad7-da14-4d30-9734-3519baa420d7");
    formData.append("subject", `[RSVP] ${formData.get("attending")} - ${formData.get("name")}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSuccess(true);
    } else {
      console.log('error', data);
      setError(true);
    }
  };

  return (
    <div
      className={styles.page}
    >
      { !success ? (
        <form 
          className={styles.form}
          onSubmit={onSubmit} 
          autoComplete="off"
        >
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Who are you?
            </legend>
            <FloatingLabelInput 
              type="text"
              label="Full Name"
              name="name"
              required={true}
            />
            <FloatingLabelInput 
              type="email"
              label="E-mail"
              name="email"
              required={true}
            />
          </fieldset>

          <fieldset 
            className={styles.fieldset}
            onChange={(e) => setAttending(e.target.value === 'yes')}
          >  
            <legend className={styles.legend}>
              Will you be in attendance on May 2, 2026 in Hutchins, TX?
            </legend>
            <input
              id="attending-yes"
              type="radio"
              name="attending"
              value="yes"
              className={styles.radioInput}
            />
            <label 
              htmlFor="attending-yes"
              className={styles.radioLabel}
            >
              Yes, I will be attending
            </label>
            <input
              id="attending-no"
              type="radio"
              name="attending"
              value="no"
              className={styles.radioInput}
            />
            <label 
              htmlFor="attending-no"
              className={styles.radioLabel}
            >
              No, I will not be attending
            </label>
          </fieldset>

          { attending && (
            <div className={styles.additionalQuestions}>
              <fieldset className={styles.fieldset}>  
                <legend className={styles.legend}>
                  Please list everyone in your party, including yourself:
                </legend>
                <FloatingLabelInput 
                  type="textarea"
                  label="List names here"
                  name="guests"
                  rows="4"
                  required={false}
                />
              </fieldset>

              <fieldset className={styles.fieldset}>  
                <legend className={styles.legend}>
                  List any dietary restrictions, allergies, or preferences:
                </legend>
                <FloatingLabelInput 
                  type="textarea"
                  label="vegan, gluten-free, sober, peanut allergy, etc."
                  name="dietary_restrictions"
                  rows="4"
                  required={false}
                />
              </fieldset>

              <fieldset className={styles.fieldset}>  
                <legend className={styles.legend}>
                  Song requests for the DJ?
                </legend>
                <FloatingLabelInput 
                  type="textarea"
                  label="Not guaranteed, but we’ll try our best"
                  name="songs"
                  rows="4"
                  required={false}
                />
              </fieldset>

              <fieldset className={styles.fieldset}>  
                <legend className={styles.legend}>
                  Anything else we should know about?
                </legend>
                <FloatingLabelInput 
                  type="textarea"
                  label="We'll reach out if needed"
                  name="comments"
                  rows="4"
                  required={false}
                />
              </fieldset>
            </div>
          )}

          <div className={styles.submitContainer}>

            <div className={styles.infoText}>
              Be sure to visit our 
              <Link
                href="/"
                className={styles.infoLink}
              >
                information page
              </Link> 
              <br/> before submitting your RSVP!
            </div>

            <button 
              className={"cta"}
              type="submit"
            >
              Submit
            </button>

            { error && (
              <p className={styles.errorMessage}>
                There was an error submitting your RSVP.<br />
                Please try again or email us at <Link href="mailto:briurixo@gmail.com">briurixo@gmail.com</Link>
              </p>
            )}
          </div>
        </form>
      ) : (
      <div className={styles.thankYouMessage}>
        <h2 className={styles.thankYouHeader}>Thank you for your RSVP!</h2>
        <p className={styles.thankYouBody}>We look forward to celebrating with you on our special day.</p>
      </div>
      ) }
    </div>
  );
}
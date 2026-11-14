'use client';
import { useEffect, useRef, useState } from "react";
import "@styles/rsvp-form.scss";
import FloatingLabelInput from "@components/floating-label-input";
import LiveRegion from "@components/live-region";
import Link from "next/link";

export default function DallasRsvpForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [attending, setAttending] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const successHeadingRef = useRef(null);

  // The thank-you replaces the form, so the focused Submit button disappears: move focus to the heading, which
  // also makes screen readers read it.
  useEffect(() => {
    if (success) {
      successHeadingRef.current?.focus();
    }
  }, [success]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(false);
    const formData = new FormData(event.target);

    formData.append("access_key", "3b000ad7-da14-4d30-9734-3519baa420d7");
    formData.append("subject", `[RSVP] ${formData.get("attending")} - ${formData.get("name")}`);

    // Any failure (network error, non-2xx response, a body that isn't JSON, or success: false) shows the error
    // message, so a guest never sees nothing after pressing Submit.
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="rsvp-form"
    >
      { !success ? (
        <form 
          className="rsvp-form__container"
          onSubmit={onSubmit} 
          autoComplete="off"
        >
          <fieldset className="rsvp-form__fieldset">
            <legend className="rsvp-form__legend">
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
            className="rsvp-form__fieldset"
            onChange={(e) => setAttending(e.target.value === 'yes')}
          >  
            <legend className="rsvp-form__legend">
              Will you be in attendance on May 2, 2026 in Hutchins, TX?
            </legend>
            <div className="rsvp-form__radio">
              <input
                id="attending-yes"
                type="radio"
                name="attending"
                value="yes"
                className="rsvp-form__radio-input"
              />
              <label 
                htmlFor="attending-yes"
                className="rsvp-form__radio-label"
              >
                Yes, I will be attending
              </label>
            </div>
            <div className="rsvp-form__radio">
              <input
                id="attending-no"
                type="radio"
                name="attending"
                value="no"
                className="rsvp-form__radio-input"
              />
              <label 
                htmlFor="attending-no"
                className="rsvp-form__radio-label"
              >
                No, I will not be attending
              </label>
            </div>
          </fieldset>

          { attending && (
            <div className="rsvp-form__container">
              <fieldset className="rsvp-form__fieldset">  
                <legend className="rsvp-form__legend">
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

              <fieldset className="rsvp-form__fieldset">  
                <legend className="rsvp-form__legend">
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

              <fieldset className="rsvp-form__fieldset">  
                <legend className="rsvp-form__legend">
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

              <fieldset className="rsvp-form__fieldset">  
                <legend className="rsvp-form__legend">
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

          <div className="rsvp-form__submit-container">

            <button 
              className="cta"
              type="submit"
              // aria-disabled, not disabled: disabling the focused button would drop keyboard focus to the page.
              // onSubmit ignores a second press while a request is in flight.
              aria-disabled={submitting}
            >
              Submit
            </button>

            <LiveRegion urgent>
              { error && (
                <p className="rsvp-form__error-message">
                  There was an error submitting your RSVP.<br />
                  Please try again or email us at <Link href="mailto:briurixo@gmail.com">briurixo@gmail.com</Link>
                </p>
              )}
            </LiveRegion>
          </div>
        </form>
      ) : (
      <div className="rsvp-form__success-container">
        <h2
          className="rsvp-form__success-header"
          ref={successHeadingRef}
          tabIndex={-1}
        >
          Thank you for your RSVP!
        </h2>
        <p className="rsvp-form__success-text">
          We look forward to celebrating with you on our special day.
        </p>
      </div>
      ) }
    </div>
  );
}
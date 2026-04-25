"use client";

import { Email, LogoLinkedin, Phone } from "@carbon/icons-react";
import { useEffect, useState } from "react";

// Contact details are hydrated on the client so they are not present in the initial HTML.
export default function ContactDetails() {
  const [isReady, setIsReady] = useState(false);

  const email = ["serenity", "_may", "@", "yahoo.com"].join("");
  const phoneDigits = ["801", "419", "1428"].join("");
  const phoneLabel = "801.419.1428";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="contact-details">
      <p className="contact-kicker">Open to conversations, questions, and good stories.</p>
      <p className="contact-intro">
        If you would like to connect, talk through a project, or compare notes on digital work, these are the best
        ways to reach me.
      </p>

      <div className="contact-card-grid" aria-label="Contact methods">
        <article className="contact-method-card contact-method-card-email">
          <Email aria-hidden="true" />
          <h2>Email</h2>
          <p>{isReady ? <a href={`mailto:${email}`}>{email}</a> : <span>Available after page load</span>}</p>
        </article>

        <article className="contact-method-card">
          <Phone aria-hidden="true" />
          <h2>Phone</h2>
          <p>{isReady ? <a href={`tel:${phoneDigits}`}>{phoneLabel}</a> : <span>Available after page load</span>}</p>
        </article>

        <article className="contact-method-card">
          <LogoLinkedin aria-hidden="true" />
          <h2>LinkedIn</h2>
          <p>
            <a href="https://www.linkedin.com/in/serenityforschen/" target="_blank" rel="noreferrer">
              serenityforschen
            </a>
          </p>
        </article>
      </div>

    </div>
  );
}

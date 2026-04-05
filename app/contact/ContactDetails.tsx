"use client";

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
      <p>If you would like to connect, the best ways to reach me are below.</p>
      <p>
        <strong>Email:</strong>{" "}
        {isReady ? <a href={`mailto:${email}`}>{email}</a> : <span>Available after page load</span>}
      </p>
      <p>
        <strong>Phone:</strong>{" "}
        {isReady ? <a href={`tel:${phoneDigits}`}>{phoneLabel}</a> : <span>Available after page load</span>}
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href="https://www.linkedin.com/in/serenityforschen/" target="_blank" rel="noreferrer">
          linkedin.com/in/serenityforschen
        </a>
      </p>
    </div>
  );
}

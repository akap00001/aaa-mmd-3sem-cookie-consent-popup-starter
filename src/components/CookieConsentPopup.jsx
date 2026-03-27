"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  return (
    !isAccepted &&
    !isClosed && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose onClick={() => setIsClosed(!isClosed)} className="pointer" size={25} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>

          <button onClick={() => setIsAccepted(!isAccepted)} className="cookie-consent-popup-cta pointer">
            I like Cookies
          </button>
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;

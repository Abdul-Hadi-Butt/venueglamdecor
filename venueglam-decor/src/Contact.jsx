import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Contact = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p><FaPhoneAlt /> 0303-4844244</p>
        <p><FaEnvelope /> venueglamdecor01@gmail.com</p>
        <p><FaMapMarkerAlt /> DHA Phase 5, Lahore, Pakistan</p>

        <div className="help-info">
          <p>Need assistance? Feel free to reach out via call or email.</p>
        </div>

        {/* Back to Home Button */}
        <button className="back-home-btn" onClick={() => navigate("/home")}>
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;

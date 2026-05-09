import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../../../assets/commonData";

function Tracker() {
  const [trackingId, setTrackingId] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const navigate = useNavigate();

  async function handleTrack() {

    if (!captchaToken) {
      alert("Complete captcha");
      return;
    }

    try {

      const response = await fetch(
        `http://localhost:4000/api/shipment/get-shipment?captchaValue=${captchaToken}&id=${trackingId}`,
      
      );

      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      // Navigate and pass shipment data
      navigate("/tracking", {
        state: data.shipment
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="tracker-box">

      <h1>Track Your Order</h1>

      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />

      <ReCAPTCHA
        sitekey={SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
      />

      <button onClick={handleTrack}>
        Track Shipment
      </button>

    </div>
  );
}

export default Tracker;
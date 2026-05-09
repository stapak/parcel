import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../../assets/commonData";
import "./UserVerificationPage.css";

function UserVerificationPage() {
  const { trackingId } = useParams();
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  async function verifyCaptcha() {

    if (!captchaToken) {
      alert("Complete captcha first");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/shipment/get-shipment?captchaValue=${captchaToken}&id=${trackingId}`
      );
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      navigate("/tracking", {
        state: data.shipment
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="verify-page">
      <div className="verify-box">
        <h1>Verify Shipment Access</h1>
        <p>
          Tracking ID:
          <span>{trackingId}</span>
        </p>
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
        />
        <button onClick={verifyCaptcha}>
          {
            loading
              ? "Verifying..."
              : "Continue Tracking"
          }
        </button>
      </div>
    </div>
  );
}

export default UserVerificationPage;
import "./LoginPage.css";
import parcelLogo from "../../assets/parcel logo.png"
import { BACKEND_URL } from "../../assets/commonData";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ParcelLoginPage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function login(e){
        e.preventDefault();

        const response = await axios.post(
            `${BACKEND_URL}/auth/login`,
            { email, password },
            { headers:{ "Content-Type":"application/json" } }
        
        );
        console.log("response is",response)

        if( response.status == 200 ){
            console.log("success");
            console.log("token is ",response.data.token)
            localStorage.setItem("userToken",response.data.token);
        }
        
        const naviagte = useNavigate();

        

    }


  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-left">
          <div className="background-circle circle-top"></div>
          <div className="background-circle circle-bottom"></div>

          <div className="left-content">
            <div className="brand-section">
              <div className="brand-logo">
                <img src={parcelLogo} alt="parcel" width="30px"  />

              </div>

              <div>
                <h1 className="brand-title">Parcel</h1>
                <p className="brand-subtitle">
                  Smart Shipment Management
                </p>
              </div>
            </div>

            <h2 className="hero-title">
              Delivering parcels with speed & trust.
            </h2>

            <p className="hero-description">
              Manage shipments, track deliveries, and monitor hubs with a
              modern logistics dashboard built for efficiency.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Tracking</p>
            </div>

            <div className="stat-card">
              <h3>120+</h3>
              <p>Hubs</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Delivery Rate</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="mobile-brand">
            <div className="brand-logo mobile-logo">P</div>

            <div>
              <h1 className="brand-title mobile-title">Parcel</h1>
              <p className="brand-subtitle">
                Smart Shipment Management
              </p>
            </div>
          </div>

          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Login to continue managing shipments.</p>
          </div>

          <form className="login-form" onSubmit={login}>
            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group">
              <div className="password-row">
                <label>Password</label>

                <button type="button" className="forgot-password">
                  Forgot Password?
                </button>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="secure-text">Secure Login</span>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


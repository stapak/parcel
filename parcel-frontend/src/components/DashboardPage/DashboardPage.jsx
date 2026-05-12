// Dashboard.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../assets/commonData.js";
import { sampleShipments ,deliveryShipments} from "../../assets/commonData.js";
import "./DashboardPage.css";

import ShipmentArrival from "./subcomp/ShimpmentArrival.jsx";
import ShipmentList from "./subcomp/ShipmentList.jsx";
import DeliveryList from "./subcomp/DeliveryList.jsx"


export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userData, setuserData] = useState(null);
  // ACTIVE TAB
  const [activeSection, setActiveSection] = useState("insideHub");

  const [shipments] = useState(sampleShipments);
  const [deliveries] = useState(deliveryShipments);

  const [showPopup, setShowPopup] = useState(false);
  const [shipmentStatus, setShipmentStatus] = useState("");

  

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const token = localStorage.getItem("userToken");
        
        // Simulating API call / function execution
        const response = await axios.post(
          `${BACKEND_URL}/user/get-user`,
          {},
          {
            headers:{
              Authorization : `Bearer ${token}`
            }
          }

        )
        setuserData(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  const handleUpdate = () => {
    console.log("Shipment Status:", shipmentStatus);

    setShowPopup(false);
    setShipmentStatus("");
  };

  // LOADING SCREEN

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Parcel Dashboard
      </h1>

      {/* ACTION CARD */}

      <div className="action-container">

        <button className="status-card-btn" onClick={() => setShowPopup(true)}>
          <h2>Shipment Arrival</h2>
          <p>Update</p>
        </button>

        <button className={`status-card-btn ${activeSection === "insideHub"? "active-card": ""}`}
                onClick={() => setActiveSection("insideHub")}
        >
          <h2>Shipments Inside</h2>
          <p>Hub</p>
        </button>

        <button className={`status-card-btn ${activeSection === "delivery"? "active-card": ""}`}
                onClick={() => setActiveSection("delivery")}
        >
          <h2>Deliver</h2>
          <p>Shipments</p>
        </button>

      </div>

      
      {/* Active section  */}
      { activeSection === "insideHub" ?(
          <>
          {/* SHIPMENT LIST */}
          <ShipmentList  shipments={ shipments }/>
          </>
        ):(
        <>
          <DeliveryList deliveries={ deliveries } />
        </>
      )
    }

      {/* POPUP */}
      {showPopup && (
        <ShipmentArrival setShowPopup={ setShowPopup }/>
      )}

    </div>
  );
}
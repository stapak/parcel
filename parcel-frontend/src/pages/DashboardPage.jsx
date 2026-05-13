import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../assets/commonData";

// Importing difference dashboard pages.
import AdminDashboard from "./dashboards/AdminDashboard";


export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
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
        setUserData(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }    
    fetchUser();
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

  if( userData.userCategory === "sudo-user"){
  return ( 
      <AdminDashboard />
  )
  }
}

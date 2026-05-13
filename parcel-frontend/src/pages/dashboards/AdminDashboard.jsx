// Dashboard.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../assets/commonData.js";
import { sampleShipments ,deliveryShipments} from "../../assets/commonData.js";
import "./DashboardPage.css";


import AllShipmentList from "../../components/DashboardPage/sudo-user/AllShipmentsList.jsx";
import AllHubsList from "../../components/DashboardPage/sudo-user/AllHubsList.jsx";
import AllUsersList from "../../components/DashboardPage/sudo-user/AllUsersList.jsx";

//Hub pop ups
import AddHubPopUp from "../../components/DashboardPage/sudo-user/AddHub.jsx";

// User pop ups



export default function AdminDashboard({ userData }) {
  const [loading, setLoading] = useState(true);
  // ACTIVE TAB
  const [activeSection, setActiveSection] = useState("all-shipments");

  // PopUp activations
  const [ showAddHubPopup, setShowAddHubPopup ] = useState(false);
  const [ showModifyHubPopup, setShowModifyHubPopup ] = useState(false);
  const [ showDeleteHubPopup, setShowDeleteHubPopup ] = useState(false);

  const [ showAddUserPopup, setShowAddUserPopup ] = useState(false);
  const [ showModifyUserPopup, setShowModifyUserPopup ] = useState(false);
  const [ showDeleteUserPopup, setShowDeleteUserPopup ] = useState(false);  
  
  
  
  
  useEffect(() => {
    async function fetchDashboard() {
      try {
        const token = localStorage.getItem("userToken");
             

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  

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

      <div className="top-action-wrapper">

        <h2 className="section-heading">
          Admin Actions
        </h2>

        <div className="action-container">

          <button className="status-card-btn" onClick={() => setShowAddUserPopup(true)}>
            <h2>Database Additions</h2>
            <p>Add User</p>
          </button>

          <button className="status-card-btn" onClick={() => setShowModifyUserPopup(true)}>
            <h2>Database Updation</h2>
            <p>Modify User</p>
          </button>

          <button className="status-card-btn" onClick={() => setShowDeleteHubPopup(true)}>
            <h2>Database Deletion</h2>
            <p>Delete User</p>
          </button>

          <button className="status-card-btn" onClick={() => setShowAddHubPopup(true)}>
            <h2>Database Additions</h2>
            <p>Add Hub</p>
          </button>

          <button className="status-card-btn" onClick={() => setShowModifyHubPopup(true)}>
            <h2>Database Updation</h2>
            <p>Modify Hub</p>
          </button>

          <button className="status-card-btn" onClick={() => setShowDeleteHubPopup(true)}>
            <h2>Database Deletion</h2>
            <p>Delete Hub</p>
          </button>

        </div>
      </div>


      {/* Database CARD */}
      <div className="top-action-wrapper">

        <h2 className="section-heading">
          Database Actions
        </h2>

        <div className="action-container">

          <button className={`status-card-btn ${activeSection === "all-shipments"? "active-card": ""}`}
                  onClick={() => setActiveSection("all-shipments")}
          >
            <h2>All of </h2>
            <p>Shipments</p>
          </button>

          <button className={`status-card-btn ${activeSection === "all-Users"? "active-card": ""}`}
                  onClick={() => setActiveSection("all-Users")}
          >
            <h2>All of the </h2>
            <p>Users</p>
          </button>

          <button className={`status-card-btn ${activeSection === "all-Hubs"? "active-card": ""}`}
                  onClick={() => setActiveSection("all-Hubs")}
          >
            <h2>All of  the </h2>
            <p>Hubs</p>
          </button>



        </div>
      </div>

      
      {/* Active sections  */}


      {/* SHIPMENT LIST */}
      { activeSection === "all-shipments" && ( <AllShipmentList /> )}

      {/* USER LIST */}
      { activeSection === "all-Users" && ( <AllUsersList /> )}
      
      {/* HUB LIST */}
      { activeSection === "all-Hubs" && ( <AllHubsList /> )}

      {/* POPUPs */}
      {showAddHubPopup && (
        <AddHubPopUp setShowAddHubPopup={ setShowAddHubPopup }/>
      )}

    </div>
  );
}
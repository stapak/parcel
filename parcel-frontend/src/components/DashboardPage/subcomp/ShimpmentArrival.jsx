import { useState } from "react";

export default function ShipmentArrival({ setShowPopup }){
    const [shipmentId,setShipmentId] = useState("");
    
    async function updateShipment() {
        
    }
    
    return (
        <div className="popup-overlay">
          <div className="popup-box">
            
            <h2>Update Shipment Arrival</h2>
            
            <input
              type="text"
              placeholder="Enter shipment Id"
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
            />

            <div className="popup-buttons">
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button className="submit-btn" onClick={updateShipment}>
                Update
              </button>
            </div>

          </div>
        </div>
    )
}
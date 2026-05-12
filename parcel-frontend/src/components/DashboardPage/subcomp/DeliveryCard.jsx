import { useState } from "react";

export default function DeliveryCard({ index, id, fromAddress, toAddress, currentHub }){
    const [ showConfirmationPopUp, setShowConfirmationPopUp ] = useState(false);
    function handleUpdate(){

    }
    return(
      <>
        <div className="shipment-card" key={index}>
              <p>
                Shipment ID :
                <span> {id}</span>
              </p>
              <p>
                From :
                <span> {fromAddress}</span>
              </p>
              <p>
                To :
                <span> {toAddress}</span>
              </p>
              <p>
                Current Hub :
                <span> {currentHub}</span>
              </p>

              {/* INSIDE shipment BUTTON */}
              <button
                  className="shipment-btn"
                  onClick={() =>
                    setShowConfirmationPopUp(true)
                  }
                >
                  Dispatch shipment
                </button>
        </div>
        {/* UPDATE POPUP */}
        {showConfirmationPopUp && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h2>Are you sure the shipment is delivered?</h2>
                <div className="popup-buttons">
                  <button className="cancel-btn" onClick={() =>setShowConfirmationPopUp(false)}>
                    Cancel
                  </button>
                  <button className="submit-btn" onClick={handleUpdate}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
      )}
</>
)}
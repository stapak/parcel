import TrackShipment from "./subcomp/TrackShipment";
import ShipmentDetails from "./subcomp/ShipmentDetails";
import "./TrackingPage.css";
import { useLocation } from "react-router-dom";

function TrackingPage() {

  const location = useLocation();
  let shipment = {
    _id: " sample product",

    fromAddress: "Bangalore, Karnataka",

    toAddress: "Mysore, Karnataka",

    currentHub: "Mandya Hub",

    log: [
      "Arrived Bangalore Hub 18-May-2026 18:56",
      "Left Bangalore Hub 18-May-2026 20:56",
      "Arrived Ramanagara Hub 19-May-2026 01:30",
      "Left Ramanagara Hub 19-May-2026 03:00",
      "Arrived Mandya Hub 19-May-2026 08:15"
    ]
  };
  console.log("location state",location.state)

  if(location.state){
    shipment = location.state;
  }

  return (

    <div className="tracking-page-bg">

      <div className="tracking-overlay">

        <div className="tracking-container">

          {/* Header */}
          <TrackShipment
            id={shipment._id}
            currentHub={shipment.currentHub}
          />

          {/* Shipment Details + Timeline */}
          <div className="tracking-grid">

            <ShipmentDetails
              fromAddress={shipment.fromAddress}
              toAddress={shipment.toAddress}
              currentHub={shipment.currentHub}
            />

            {/* Route Timeline */}
            <div className="card">

              <h2>Route Timeline</h2>

              <div className="timeline">

                {shipment.log.map((event, index) => (

                  <div
                    key={index}
                    className="timeline-item"
                  >

                    <div className="timeline-left">

                      <div
                        className={`timeline-dot ${
                          index === shipment.log.length - 1
                            ? "active-dot"
                            : ""
                        }`}
                      />

                      {index !== shipment.log.length - 1 && (
                        <div className="timeline-line" />
                      )}

                    </div>

                    <div>

                      <div className="log-content">

                          <p className="log-event">
                            {event.split(/\d/)[0]}
                          </p>

                          <small className="log-time">
                            {event.match(/\d.*$/)?.[0]}
                          </small>

                      </div>

                      {index === shipment.log.length - 1 && (
                        <small>Latest Update</small>
                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default TrackingPage;
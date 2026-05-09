export default function TrackShipment({id, currentHub}){

    return (
        <div>
            <div className="card tracking-header">
                <div className="header-content">

                  <div>
                    <h1>Track Shipment</h1>
                    <p>Shipment ID: {id}</p>
                  </div>

                  <span className="status-badge">
                    {currentHub}
                  </span>

                </div>
            </div>

        </div>
    )
}
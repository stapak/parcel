export default function ShipmentDetails({fromAddress, toAddress, currentHub}){
    return (
         <div className="card">

              <h2>Shipment Details</h2>

              <div className="details-group">

                <div>
                  <small>From</small>
                  <p>{fromAddress}</p>
                </div>

                <div>
                  <small>To</small>
                  <p>{toAddress}</p>
                </div>

                <div>
                  <small>Current Hub</small>
                  <p>{currentHub}</p>
                </div>


              </div>

            </div>
    )

}
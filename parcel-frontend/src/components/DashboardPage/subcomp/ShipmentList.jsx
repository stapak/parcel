import ShipmentCard from "./ShipmentCard.jsx";

export default function ShipmentList({ shipments }){
    return(
        <div className="shipment-section">

        <h2>Shipments Inside Hub</h2>

        <div className="shipment-grid">

          {shipments.map((shipment, index) => (
            <ShipmentCard  
                index={ index }
                id = { shipment._id }
                fromAddress = { shipment.fromAddress }
                toAddress = { shipment.toAddress }
                currentHub = { shipment.currentHub }
            />
          ))}

        </div>

      </div>
    )
}
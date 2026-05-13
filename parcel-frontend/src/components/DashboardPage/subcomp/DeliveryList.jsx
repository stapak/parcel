import DeliveryCard from "./DeliveryCard.jsx";

export default function DeliveryList({ deliveries }){
    return(
        <div className="shipment-section">

        <h2>Mark Deliveries</h2>

        <div className="shipment-grid">

          {deliveries.map((delivery, index) => (
            <DeliveryCard 
                index={ index }
                id = { delivery._id }
                fromAddress = { delivery.fromAddress }
                toAddress = { delivery.toAddress }
                currentHub = { delivery.currentHub }
            />
          ))}

        </div>

      </div>
    )
}
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../assets/commonData.js";
import axios from "axios";

export default function AllShipmentList(){

    const token = localStorage.getItem("userToken");
    const [ shipments, setShipments ] = useState([]);

    useEffect(()=>{
        async function getShipments() {
            try{
                console.log("token is",token);
                const response = await axios.get(
                  `${BACKEND_URL}/shipment/get-all-shipments`,
                  {
                    headers:{
                      Authorization : `Bearer ${token}`
                    }
                  }

                )

                console.log("response data is:",response.data.shipments);
                setShipments(response.data.shipments);
            }catch(error){
                console.error("error is:",error);
            }
        }
        getShipments()
    },[])

    return(
        <div className="shipment-section">

            <h2>Shipments in  Database</h2>

            <div className="shipment-grid">

              {shipments.map((shipment, index) => (
                    <div className="shipment-card" key={index}>

                        <p>Shipment ID :<span> {shipment._id}</span></p>
                        <p>From :<span> {shipment.fromAddress}</span></p>
                        <p>To :<span> {shipment.toAddress}</span></p>
                        <p>Current Hub :<span> {shipment.currentHub}</span></p>
                    
                    </div>
              ))}

            </div>

      </div>
    )}
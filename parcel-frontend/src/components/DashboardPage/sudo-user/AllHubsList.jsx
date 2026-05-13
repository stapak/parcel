import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../assets/commonData";
import axios from "axios";

export default function AllHubsList(){

    const token = localStorage.getItem("userToken");
    const [ hubs, setHubs ] = useState([]);

    useEffect(()=>{
        async function getHubs() {
            try{
                console.log("token is",token);
                const response = await axios.get(
                  `${BACKEND_URL}/hub/get-all-hubs`,
                  {
                    headers:{
                      Authorization : `Bearer ${token}`
                    }
                  }

                )

                console.log("response data is:",response.data.hubs);
                setHubs(response.data.hubs);
            }catch(error){
                console.error("error is:",error);
            }
        }
        getHubs()
    },[])

    return(
        <div className="shipment-section">

            <h2>Hubs in  Database</h2>

            <div className="shipment-grid">

              {hubs.map((hub , index) => (
                    <div className="shipment-card" key={index}>
                        <p>Hub Id:<span> {hub._id}</span></p>
                        <p>Hub Name:<span> {hub.hubName}</span></p>
                        <p>Address:<span> {hub.address}</span></p>
                        
                    </div>
              ))}

            </div>

      </div>
    )}
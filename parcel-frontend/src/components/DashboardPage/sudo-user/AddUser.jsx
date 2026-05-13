import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../assets/commonData";


export default function AddUser({ setShowAddHubPopup }){
    const [ hubName, setHubName ] = useState("");
    const [ hubAddress, setHubAddress ] = useState("");
    const token = localStorage.getItem("userToken");

    function handleAddUser(){
      console.log("hubname",hubName);
      console.log("Hubaddress",hubAddress);
    }
    async function handleAddUser1(){
      try{
          console.log("token is",token);
          const response = await axios.post(
            `${BACKEND_URL}/hub/add-hub`,
            {
              hubName:hubName,
              Address:hubAddress

            },
            {
              headers:{
                Authorization : `Bearer ${token}`
              }
            }
          )
          console.log("response data is:",response.data.users);
      }catch(error){
          console.error("error is:",error);
      }
        
    }

    return(
        <>
        <div className="popup-overlay">
              <div className="popup-box">
                <h2>Add New Hub</h2>
                <input
                  type="text"
                  placeholder="Enter hub name"
                  value={hubName}
                  onChange={(e) =>
                    setHubName(e.target.value)
                  }
                />
            
                <input
                  type="text"
                  placeholder="Enter hub address"
                  value={hubAddress}
                  onChange={(e) =>
                    setHubAddress(e.target.value)
                  }
                />
            
                <div className="popup-buttons">
                  <button className="cancel-btn" onClick={(e) => setShowAddHubPopup(false)}>
                    Cancel
                  </button>
                
                  <button
                    className="submit-btn"
                    onClick={handleAddHub}
                  >
                    Add Hub
                  </button>

                </div>
              </div>
            </div>
        </>
    )
}
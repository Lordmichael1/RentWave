import React from 'react'
import"./TenantProfile.css"
import ola from "../../assets/ola.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
const TenantProfile = ({onClose }) => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate(-1); 
      }
  return (
    <div className="TenantProfilePage">
        <div className="TenantProfilePageWrapper">
            <div className="ProfileHeader">
                <h3  className="CloseButtonPro" onClick={handleClose}><IoArrowBack  style={{height:"45px",width:"50px"}}/>
                Back</h3>
                <h3 style={{width:"20%"}}>Profile</h3>
                <Link to="/TenantSettings" style={{width:"20%",justifyContent:"flex-end"}}>
                <button>Edit</button>
                </Link>
               
            </div>
            <div className="Profilepic">
      <div className="Pics" style={{cursor:"pointer"}} >
     
        <img src={ola} alt="Profile" />
       
        </div>
        
      </div>
      <div className="ProfDetail">
        <ul>
            <li> <h3>Name:</h3><span> Mr Johnson</span></li>
            <li><h3>Email address:</h3><span > Johnson1467@gamil</span></li>
            <li>        
            <h3>Phone number:</h3><span> 09050164533</span></li>
            <li> <h3>D.O.B:</h3><span> 04/07/1956</span></li>
            <li>  <h3>Gender:</h3><span> Male</span></li>
            <li><h3>Registeration Date:</h3><span> 4/08/2022</span></li>
        </ul>
  
       
      </div>
        </div>
    </div>
  )
}

export default TenantProfile
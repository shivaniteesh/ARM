import React ,{useState} from "react";
import '../styles/UserDetails.css'
import { useNavigate } from "react-router-dom";
function UserDetails(){
    const [fullname,setfullname]=useState();
    const [Phone,setphone]=useState();
    const [Aadhar,setaadhar]=useState();
    const [aadharpic,setaadharpic]=useState();
    const [license,setlicense]=useState();
    const [licensepic,setlicensepic]=useState();
    const [address,setaddress]=useState();
    const navigate=useNavigate()
    const handleUser=()=>{
        navigate('/Login')
    }
    return(
      
        <div className="userdetailscontainer">
            <div className="userdetails">
                <form onSubmit={handleUser}>
                    <label id="ulabel">Full Name</label>
                    <input type="text" id="uinput" value={fullname} onChange={(e)=>setfullname(e.target.value)} required/>
                    <label id="ulabel">Phone Number</label>
                    <input type="tel" id="uinput" value={Phone} onChange={(e)=>setphone(e.target.value)} required/>

                    <label id="ulabel">Aadhar number</label>
                    <input type="text" id="uinput" value={Aadhar} onChange={(e)=>setaadhar(e.target.value)} required/>
                    <label id="ulabel">Aadhar photo</label>
                    <input type="file" id="uinput" value={aadharpic} onChange={(e)=>setaadharpic(e.target.pic)} required/>
                    <label id="ulabel">Driving license number</label>
                    <input type="text" id="uinput" value={license} onChange={(e)=>setlicense(e.target.value)} required/>
                    <label id="ulabel">Driving License photo</label>
                    <input type="file" id="uinput" required value={licensepic} onChange={(e)=>setlicensepic}/>
                    <label id="ulabel">Address</label>
                    <textarea rows="5" id="uaddress"value={address} onChange={(e)=>setaddress(e.target.value)} required/>
                    
                    <button type="submit" className="ubutton">Submit</button>
                    </form>

            </div>

        </div>
    );
}
export default UserDetails;
import React,{useState} from 'react'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'
function Register(){
    const [email,setemail]=useState()
    const [password,setpassword]=useState() 
    const [confirmpassword,setconfirmpassword]=useState()
    const [name,setname]=useState()
    const navigate=useNavigate()
   
    const handleRegister=()=>{
        if(password.length<8 || confirmpassword.length<8){
            alert('Password should be atleast 8 characters')
         } 
         if(password!==confirmpassword){
         alert("Password and confirm password dont match")
         }
         navigate('/UserDetails')
    }
  return(
        <div className='register-container'>
            <div className='register'>
            <form onSubmit={handleRegister}>
                <label id='rlabel'>Name</label>
                <input type="text" id="rinput" value={name} onChange={(e)=>setname(e.target.value)} required/>
                <label id='rlabel'>Email</label>
                <input type="email" id="rinput" required value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label id="rlabel">Password</label>
                <input type="password" id="rinput" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                <label id="rlabel">Confirm Paasword</label>
                <input type="password" id="rinput" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} required/>
                <button className='rbutton' type='submit'>Register</button>
            </form></div>
        </div>
    );
}
export default Register;
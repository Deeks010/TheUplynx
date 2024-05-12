import React, { useEffect } from 'react'

import './Login.css'
import logo2 from './background.jpg'
// const cartcont=createContext();
function Login() {
  

//  const [email,setEmail]=useState("")
//  const [password,setPassword]=useState("")
useEffect(()=>{
  document.body.classList.add("body34")
},[])
// const logininto=async(e)=>{
//   try{
//   await createUserWithEmailAndPassword(auth,email,password)
//   // setEmail(email)
//   }catch(err){
//     console.error(err)
//   }
//   e.preventDefault();
//   window.location.href='/Home'

// }
return (<>
 
    <div className='bodyy'>
        <div className='main_Container'>
          <div className='firstContainer'>
            <img className="imgg"src={logo2}/>

          </div>
          <div className='secondContainer1'>
              <h2 className='head' 
              
            >Login</h2>
              <p className='tailp'>Welcome ! Please login to your account</p>
              <p style={{fontWeight:"Bolder"}}>
                Email
              </p>
              <input className="inp_1"
              type="email" required
            
               placeholder='Enter your email...'/>
              <p 
              style={{fontWeight:"Bolder"}}
              >Password</p>
              <input
               className='inp_1' 
               type="password" required
              
               placeholder='Enter your Password'/>
              <div className='smallone'>
                <input style={{width:"20px"}}type="checkbox" required></input>
                <p style={{fontWeight:"Bolder",fontSize:"15px"}}>Forgot password?</p>
              </div>
              <div>
              <button className='logbtn' 
                onClick={(e)=>{
                    e.preventDefault()
                    window.location.href="/Home2"
                }}
              >Login</button>
              </div>
              <p>New user?<span className='span_1' 
                
              > Signup</span></p>
          </div>

        </div>
    </div>
   

    
      
   
    </>)
}


export default Login

import React, { useEffect, useState } from 'react'

import './Home2.css'
import logo2 from './background.jpg'
// const cartcont=createContext();
function Home2() {
  

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
// const[choose,setChoose]=useState("")
// const handlechoose=(e)=>{
//     setChoose(e.target.value)
    
// }
return (<>
 
    <div className='bodyy'>
        <div className='main_Container'>
          <div className='firstContainer'>
            <img className="imgg"src={logo2}/>

          </div>
          <div className='secondContainer'>
              <h2 className='head' 
              
            >Choose</h2>
              <p className='tailp2'>Welcome ! Please choose to proceed</p>
              {/* <input clas2sName='inp_1'>

              </input> */}
              <p style={{fontWeight:"Bolder"}}>
                Choose
              </p>
              {/* <input className="inp_2"
              type="text" required
              onChange={handlechoose}
              placeholder='Founder or Investor'/> */}

               {/*<p 
              style={{fontWeight:"Bolder"}}
              >Password</p>
              <input
               className='inp_1' 
               type="password" required
              
               placeholder='Enter your Password'/>
              <div className='smallone'>
                <input style={{width:"20px"}}type="checkbox" required></input>
                <p style={{fontWeight:"Bolder",fontSize:"15px"}}>Forgot password?</p>
              </div> */}
              <div className='btnrow'>
              <button className='logbtn1' 
                onClick={(e)=>{
                    e.preventDefault()
                    // document.getElementById("choose").innerHTML=`${choose}`
                    window.location.href="/Home"

                }}
              >Investor</button>
              <button className='logbtn1'
              onClick={(e)=>{
                e.preventDefault()
                // document.getElementById("choose").innerHTML=`${choose}`
                window.location.href="/founder"

            }}>Founder</button>
              </div>
              <div id="choose"></div>
              <p style={{marginTop:"1rem"}}>New user?<span className='span_1' 
                
              > Signup</span></p>
          </div>

        </div>
    </div>
   

    
      
   
    </>)
}


export default Home2

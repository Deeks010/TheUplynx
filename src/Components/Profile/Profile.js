import React from 'react'
import './Profile.css'
import log from './das.jpeg'
import Home from '../Home/Home'
function Profile() {
  return (<>
    <div>
      <Home/>
    </div>
    <div className='themaincont'>
    <div className="profile">
      <div>
        <p>24K</p>
        <p style={{marginLeft:"-1rem"}}>Followers</p>
      </div>
      <div>
        <img className="img234"src={log}></img>
        
        <p className='name'>Das</p>
        
       
        <p style={{marginLeft:"-1.9rem"}}>fazilsamysha2005@gmail.com</p>
      </div>
      <div>
        <p>154</p>
        <p style={{marginLeft:"-1rem"}}>Following</p>
      </div>
      
    </div>
    <div className='class'>
    <p>I exist to design pixels, beyond that my life is void and meaningless... i'm just kidding I live to make other peoples lives easier.</p>
    </div >
    <div className='yaay'>
        <h3 className='h3'>My Stats</h3>
        <div className='saicard'>
        <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3 style={{marginLeft:"4.6rem"}}>15</h3>
            <p>No.of Companies Invested</p>
        </div>
        <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3 style={{marginLeft:"3rem"}}>$1.6M</h3>
            <p style={{marginLeft:"1.4rem"}}>Total Investment</p>
        </div>
        {/* <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3>56.4k</h3>
            <p>Customer</p>
        </div> */}
        </div>
        <div className='saicard'>
        <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3 style={{marginLeft:"4rem"}}>$100k</h3>
            <p style={{marginLeft:"1rem"}}>Average Investment</p>
        </div>
        <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3 style={{marginLeft:"4rem"}}>75%</h3>
            <p style={{marginLeft:"2rem"}}>Succes Rate</p>
        </div>
        {/* <div className='blackdiv'>
            <a className='fas fa-home'></a>
            <h3>56.4k</h3>
            <p>Customer</p>
        </div> */}
        </div>

    </div>
    </div>
    </>)
}

export default Profile

import React, { useEffect } from 'react'
import Founder from '../Founder/Founder'
import './Portfolio.css'
import logo9 from './a.svg'
import logo10 from './b.svg'
import logo11 from './c.svg'
import logo12 from './d.svg'
function Portfolio() {
    useEffect(()=>{
        document.body.classList.add("portbdy")
    })
  return (
    <div>
        <div className='the_other_container'>
            <Founder/>
            <div >
                <h2>Portfolio</h2>
            </div>
            <h4 className='h4cls' style={{marginTop:"2rem"}}>Dashboard</h4 >
            <div className='sepdiv'>
                <p>Once you make an investment, you’ll be able to track its performance here</p>
            </div>
            <div className='build'>
                <h2 >Build your Portfolio</h2>
                <p>Here are a few ways you can build out your investment portfolio</p>
            </div>
            <div className='syndcards'>
                <div>
                    <img className='realimage' src={logo9}/>
                    <h3>Return of Investment</h3>
                    <p>Tool to estimate ROI of Projects</p>
                    <button className='bbtn'>Browse</button>
                </div>
                 <div>
                    <img className='realimage' src={logo10}/>
                    <h3>Risk Assestment</h3>
                    <p>Calculates the Risk of Project </p>
                    <button  className='bbtn'>Browse</button>
                </div>
                <div>
                    <img className='realimage' src={logo11}/>        
                    <h3>Impact</h3>
                    <p>Calculate the social impact of the project </p>
                    <button  className='bbtn'>Browse</button>
                </div>
                <div>
                    <img className='realimage' src={logo12}/>
                    <h3>To-Do-List</h3>
                    <p>Handle personalized things according to our preferences</p>
                    <button  className='bbtn'>Browse</button>
                </div>
            </div>
            <div>
                <h2>Investments</h2>
                <div className='herodiv'>
                    <div className='notsidediv'> 
                        <input type='text' placeholder='Companies,funds,leads'></input>
                    </div>
                    <div className='sidediv'> 
                        <button>Filter</button>
                        <select>
                            <option>Export CSV</option>
                            <option>All Investment</option>
                            <option>Filtered Set(0)</option>

                        </select>
                        <button>Add Invesment</button>
                    </div>
                   
                
                </div>
                <div className='pdiv'>
                        <p>Company/Fund</p>
                        <p>Status</p>
                        <p>Invest Date</p>
                        <p>Funded</p>
                        <p>Net value</p>
                        <p> Multiple</p>
                </div>
                <div style={{marginTop:"-0.5rem"}}>
                    ___________________________________________________________________________________________________________________________
                </div>
                <div className='line'>
                    <p>No Data</p>
                </div>
            </div>
            <div className='para'>
                <p>Unrealized value represents the estimated value of an investment net of fees and carry.</p>
                <p>Realized value represents the value of an investment that has been distributed or is pending distribution to an investor.</p>
                <p>The internal rate of return (IRR) is the highest discount rate that sets the net present value (NPV) of the cashflows of an investor's portfolio to 0. IRRs may not be calculable for certain</p>
                <p>portfolios</p>
                <p>All multiples are calculated as the Total Value to Paid In multiple (TVPI).</p>
                <p>All data and calculations include self-reported investment amounts, unrealized and realized values, and investment dates for offline investments. AngelList will not verify any self-reported</p>
                <p>or offline investments, or any resulting calculations or values based on such information.</p>
            </div>
            <div className='aatag'>
                <a>Share Feedback</a>
                <a>Get Help</a>
                <a> Disclosures</a>
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
            </div>

        </div>
    </div>
  )
}

export default Portfolio

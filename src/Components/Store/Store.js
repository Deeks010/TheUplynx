import React, { useEffect,useState } from 'react'
import './Store.css'
import logo4 from './austin.jpg'
import logo5 from './ai_1.jpg'
import logo6 from './ai_2.jpg'
import logo15 from './1.jpg'
import logo16 from './2.jpg'
import logo17 from './3.jpg'
import logo18 from './4.jpg'
import logo19 from './5.jpg'
import logo20 from './8.jpg'
import Home from '../Home/Home'
import axios from 'axios';
// import Spline from '@splinetool/react-spline';



// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canva');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/hK2Dd2B3VYSmpIwC/scene.splinecode');
function Store() {
    const [news,setNews]=useState("");
    useEffect(()=>{
       document.body.classList.add("body_no_3") 
    })
    const getNews=async()=>{
        try{
            const result=axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-04-11&sortBy=publishedAt&apiKey=4c99172ade1d46f9ba383e0806e180ec")
            setNews(result.data);
            console.log(news);
        }catch(err){
            console.log(err);
        }
    }
    // getNews();
  return (<>
  {/* <div style={{width:"100%",height:"0",paddingBottom:"100%",position:"relative"}}>
    <iframe src="https://giphy.com/embed/3o7bu8qJpjldRYVeE0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
        </iframe> */}
        {/* </div><p><a href="https://giphy.com/gifs/animation-art-black-and-white-3o7bu8qJpjldRYVeE0">via GIPHY</a></p> */}
        {/* <iframe src="https://giphy.com/embed/3o7bu8qJpjldRYVeE0" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-art-black-and-white-3o7bu8qJpjldRYVeE0"></a></p> */}
    <div>
       
        
  
        {/* <Spline scene="https://prod.spline.design/hK2Dd2B3VYSmpIwC/scene.splinecode" /> */}
  
        <Home/>
        <div className='storebdy'>
        <div className='static_nav'>
            <p className='uplynx'>UPLYNX</p>
            <a  className="atag "href="/Startup">STARTUP</a>
        </div>
        <div className='innerstrbdy'>
            <input type='text' placeholder='Search'></input>
            <p>Category Titles</p>
            <div className='btndiv'>
                <button>AI News</button>
                <button>AR/VR</button>
                <button>Blockchain</button>
                <button>ML/DL</button>
            </div>
            <div className='card_div'>
                <div>
                    <img src={logo4}></img>
                    <p>Hot news</p>
                    <h4>
                    OpenAI’s ChatGPT announcement: What we know so far
                    </h4>
                </div>
                <div>
                    <img src={logo5}></img>
                    <p>Hot news</p>
                    <h4>U.K. agency releases tools to test AI model safety</h4>
                </div>
                <div>
                    <img src={logo6}></img>
                    <p>Hot news</p>
                    <h4>
                        Women in AI: Rachel Coldicutt researches how technology impacts society
                    </h4>
                </div>
            </div>
            {/* <div className='mmain_div'>
                <div className='ggboys'>
                    <p>Suggested</p>
                    <h3>Suggestion</h3>
                    <p className='onlyp' >
                    this is picture taken by the ai developed by the microsft Organization
                    </p>
                </div>
                <div>
                    <img  className="clsimg"src={logo6}></img>
                </div>
            </div> */}
            <p>Category Titles</p>
            <div className='container_of_card'>
            <div onClick={(e)=>{
                e.preventDefault();
                window.location.href='/Chatbot';
            }} className='card2_div ccard2_div'>
                <div>
                <img className="image"src={logo16}></img>
                </div>
                <div>
                <p>London</p>
                <h4>Face Recognition</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo17}></img>
                </div>
                <div>
                <p>Chennai</p>
                <h4>Stock Price Prediction</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo18}></img>
                </div>
                <div>
                <p>Bangalore</p>
                <h4>AI Cybersecurity</h4>
                {/* <p>Autonomous automobiles</p> */}
                </div>
            </div>
            </div>
            <div className='container_of_card'>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo18}></img>
                </div>
                <div>
                <p>Mumbai</p>
                <h4>Recommendation</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo19}></img>
                </div>
                <div>
                <p>Hyderabad</p>
                <h4>Sentiment Analysis</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo20}></img>
                </div>
                <div>
                <p>New york</p>
                <h4>Object Detection</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
  </>)
}

export default Store

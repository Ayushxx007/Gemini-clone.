import "./Main.css";
import React from "react";
import { assets } from "../../assets/assets.js";
import { useState } from "react";



const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}></img>

        </div>
        <div className="main-container">
            <div className="greet">

                <p><span>Hello, Developer</span></p>
                <p>How can I help you today?</p>


            </div>
          <div className="cards">

            <div className="card">
                  <p>Suggest beautiful places to see an upcoming road trip</p>
                <img src={assets.compass_icon}></img>
              
            </div>
            <div className="card">
                <p>Briefly Summarize this concept:urban planning</p>
                <img src={assets.bulb_icon}></img>
                
            </div>
            <div className="card">
                 <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon}></img>
               
            </div>
               <div className="card">
                  <p>Improve the readability of the following code</p>
                <img src={assets.code_icon}></img>
              
            </div>


          </div>



            

        </div>
        
      
    </div>
  )
}

export default Main;

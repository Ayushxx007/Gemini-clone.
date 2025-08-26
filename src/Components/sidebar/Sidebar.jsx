import React from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets.js"
import { useState } from 'react';

const Sidebar = () => {

  const [extended, setExtended] = useState(true);

  const handleClick = () => {
    setExtended(!extended);
  };

  




  return (
    <div className="sidebar">

      <div className="top">
        <img onClick={handleClick} className="menu" src={assets.menu_icon} />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus" className="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>

        <div className="recent">
        { extended && <p>Recent Chats</p>}
          <div className="recent-entry">
            <img src={assets.message_icon}></img>
          {extended && <p>What is React...</p>}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
         {extended && <p>Help</p>}

        </div>
          <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
        { extended && <p>History</p>}

        </div>
          <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
         { extended && <p>Settings</p>}

        </div>

      </div>
    </div>
  )
}

export default Sidebar

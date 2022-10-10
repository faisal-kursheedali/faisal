import React from 'react'
import "./cmn-header.css"

import faisal from  "../../assets/faisal.jpg"
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai" 
import {MdEmail} from "react-icons/md" 
import {BsDiscord} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const CmnHeader = ({data="Hey, Hi 👋 This is me, Faisal. I am an undergraduate student who has a lot of interest in exploring new technologies.Web development is my interesting field, where I always work hard and explore new things. I have done a lot of projects and websites. I have also written some blogs. Please explore them all."}) => {
  const navigate=useNavigate();
  
  return (
    <div className="cmn-header-container">
        
      <div className="header">
        <div className="landing-header">
          <img className="landing-img" src={faisal} alt='' />
          <div className="landing-detail">
            <div className="landing-detail-head">
              FAISAL K
            </div>
            <div className="landing-detail-sub-head"> 
            <span className="landing-detail-sub-head-iam">I am </span>
            <span className="landing-detail-sub-head-mern">MERN DEV</span>
            </div>
            <div className="landing-detail-desc">
              {data}
            </div>
          </div>
        </div>
            <div className="landing-btn-container">
              <button className="landing-btn-primary" >
                <a href={`${window.location.origin}/cv.pdf`} className="landing-btn-primary-link">
                My Resume
                </a>
                </button>
              <button className="landing-btn-secondary" onClick={()=>navigate("/project")}>Projects</button>
            </div>
        <div className="header-link">
        <ul className="header-link-list">
                <li className="header-link-list-item">
                  <a href="https://github.com/faisal-kursheedali" className="header-link-link">
                    <AiFillGithub/>
                  </a>
                </li>
                <li className="header-link-list-item">
                  <a href="https://www.linkedin.com/in/faisal-k-4a02801b2/" className="header-link-link">
                    <AiFillLinkedin/>
                  </a>
                </li>
                <li className="header-link-list-item">
                  <a href="https://twitter.com/faisal_devop" className="header-link-link">
                    <AiFillTwitterCircle/>
                  </a>
                </li>
                <li className="header-link-list-item">
                  <a href="https://www.instagram.com/demented_devops/" className="header-link-link">
                    <AiFillInstagram/>
                  </a>
                </li>
                <li className="header-link-list-item">
                  <a href="mailto:faisal.k.ison@gmail.com" className="header-link-link">
                    <MdEmail/>
                  </a>
                </li>
                <li className="header-link-list-item">
                  <a href="https://discordapp.com/users/#1279" className="header-link-link">
                    <BsDiscord/>
                  </a>
                </li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default CmnHeader
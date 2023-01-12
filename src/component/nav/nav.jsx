import React from 'react'
import "./nav.css"
import {AiOutlineMenu} from "react-icons/ai"
import {BsSun,BsMoonStars} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import Brand from '../brand/barnd'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkmode, setSideNav } from '../../app/feature/state'

const Nav = () => {
  const dispatch=useDispatch();
  const state=useSelector(store=>store.state)
  const navigate=useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-box">
        <Brand/>
        {
          state.isDark?<span className="nav-logo-mode" onClick={()=>dispatch(setDarkmode(false))}><BsSun style={{color:"yellow"}}/></span>:<span className="nav-logo-mode" onClick={()=>dispatch(setDarkmode(true))}><BsMoonStars/></span>
        }
        
      <ul className="nav-list">
        <li className="nav-list-item" onClick={()=>navigate("/")}>
          home
        </li>
        <li className="nav-list-item" onClick={()=>navigate("/project")}>
          projects
        </li>
        <li className="nav-list-item" onClick={()=>navigate("/blog")}>
          Blog
        </li>
        <li className="nav-list-item" onClick={()=>navigate("/aboutme")}>
          About me
        </li>
      </ul>
      <div className="nav-menu" onClick={()=>dispatch(setSideNav(!state.sideNav))}>
        <AiOutlineMenu/>
      </div>
      </div>
    </div>
  )
}

export default Nav
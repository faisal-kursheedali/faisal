import React from 'react'
import { useNavigate } from 'react-router-dom'
import Brand from '../brand/barnd'
import "./sidenav.css"
import {useDispatch} from "react-redux"
import { setSideNav } from '../../app/feature/state'

const Sidenav = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div className="side-nav-conatiner">
      <div className="sidenav-logo" onClick={()=>{
        navigate("/")
        dispatch(setSideNav(false))
        
        
        }}>
        <Brand/>
      </div>
      <ul className="side-nav-list">
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/")
            dispatch(setSideNav(false))
            
            
            }}>
            home
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/project")
            dispatch(setSideNav(false))
            
            
            }}>
            project
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/blog")
            dispatch(setSideNav(false))
            
            
            }}>
            blog
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/aboutme")
            dispatch(setSideNav(false))
            
            
            }}>
            about me
          </li>
      </ul>
    </div>
  )
}

export default Sidenav
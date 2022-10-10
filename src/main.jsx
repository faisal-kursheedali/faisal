import React from 'react'
import { Footer, Nav, Sidenav } from './component'
import AllRoutes from './routes'
import "./main.css"
import { useDispatch, useSelector } from 'react-redux'
import { setSideNav } from './app/feature/state'

const Main = () => {
    const dispatch=useDispatch();
    const state=useSelector(store=>store.state)
  return (
    <div className="main-conatiner">
        <div className="main-nav">
            <Nav/>
        </div>
        <div className="main-content-container">
            {
                state.sideNav&&<div className="main-sidenav">
                <Sidenav/>
            </div>
            }
            
            <div className="main-content" onClick={()=>dispatch(setSideNav(false))}>
            <AllRoutes/>

            </div>
            <div className="main-content-btn">
            <button className="main-content-btn-primary" >
                <a href={`${window.location.origin}/cv.pdf`}  className="main-content-btn-primary-link">
                My Resume
                </a>
                </button>
            </div>
        </div>
        <div className="main-footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Main
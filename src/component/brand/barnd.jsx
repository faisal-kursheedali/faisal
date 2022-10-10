import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./brand.css"

const Brand = () => {
    const navigate=useNavigate();
  return (
    <>
        <div className="brand-logo" onClick={()=>navigate("/")}>
        {/* <img src={`${window.location.origin}/favicon.ico`} alt="" className="brand-logo-img" /> */}
        
        <img src={`${window.location.origin}/favicon.ico`} alt="" className="brand-logo-img" />
        <div className="brand-logo-txt">FAISAL</div>
      </div>
    </>
  )
}

export default Brand
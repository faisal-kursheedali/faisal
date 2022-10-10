import React, { useState } from 'react'
import "./blog-card.css"
import { FaBook } from "react-icons/fa"
// import { DiCss3 } from "react-icons/di"
// import {IoLogoJavascript} from "react-icons/io"
// import { FaReact } from "react-icons/fa"
// import { GiJesterHat } from "react-icons/gi"
// import { SiReactrouter, SiRedux, SiTypescript, SiWebpack, SiJavascript } from "react-icons/si"
import { useSelector } from 'react-redux'

const BlogCard = ({ data }) => {
  
  const state=useSelector(s=>s.state)
  // const [detail, setDetail] = useState(false)
  // const [hover, setHover] = useState(false)

  return (
    <div className="blog-card-container" style={state.isDark?{backgroundColor:"white",color:"black"}:{backgroundColor:"initial",color:"initial"}} >
      <div className="blog-card-img-container">
        <img src={data.img} alt="" className='blog-card-img' />
        {/* {
          hover?:<img src={data.logoImg} alt="" className='blog-card-img' />
        } */}
        {/* <iframe src="https://mytube-webapp.netlify.app/" frameborder="0"div className="blog-card-ifram"></iframe> */}

      </div>
      <div className="blog-card-content">
        <div className="blog-card-head">
          {data.head}
        </div>
        {data.tag?<div className="blog-card-tag">
          {data.tag}
        </div>:""}
        
        <div className="blog-card-sub">
          {data.sub}
        </div>
        {/* {
          detail?<div className="blog-card-detail">
            {
              data.detail.map((i,index)=>{
                return (
                  <div className="blog-card-detail-item" key={index}>
                    {i==="html"?<AiFillHtml5 style={{color:"brown"}}/>:i==="css"?<DiCss3 style={{color:"blue"}}/>:i==="js"?<SiJavascript style={{color:"gold"}}/>:i==="react"?<FaReact style={{color:"blue"}}/>:i==="router"?<SiReactrouter style={{color:"red"}}/>:i==="redux"?<SiRedux style={{color:"blueviolet"}}/>:i==="ts"?<SiTypescript style={{color:"navy"}}/>:i==="just"?<GiJesterHat style={{color:"brown"}}/>:i==="web"?<SiWebpack style={{color:"dodgerblue"}}/>:""}
                  </div>
                )
              })
            }
          </div>
          :""
        }
        
        <div className="blog-card-slide" onClick={()=>setDetail(prev=>prev=!prev)}>
          {
            detail?<><div className="blog-card-slide-txt">show less</div> <AiOutlineArrowUp/></>:<><div className="blog-card-slide-txt">show more</div> <AiOutlineArrowDown/></>
          }
          
        </div>
        <div className="blog-card-live-link">
        <a href={data.link} className="blog-card-link"><AiFillEye/> <span className="blog-card-link-txt">see live</span> </a>
        </div>
        <div className="blog-card-gitlink-link">
        <a href={data.gitLink} className="blog-card-link"><AiFillCode/> <span className="blog-card-link-txt">sorce code</span></a>
        </div>
      </div> */}
        <div className="blog-card-link-container">
          <div className="blog-card-read-more-link">
            <a href={data.link} className="blog-card-link"><FaBook /> <span className="blog-card-link-txt">Read more</span></a>
          </div>
        </div>
      </div>


    </div>

  )
}

export default BlogCard
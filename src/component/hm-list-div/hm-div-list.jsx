import React from 'react'
import { BLOG, PROJECT } from '../../app/constant'
import {useSelector} from "react-redux"
import "./hm-div-list.css"
import ProjectCard from '../project-card/project-card'
import {useNavigate} from "react-router-dom"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import BlogCard from '../blog-card/blog-card'


const HmDivList = ({head,type}) => {
    const proj=useSelector(store=>store.state.projectData)
    const blog=useSelector(store=>store.state.blogData);
    const navigate=useNavigate();
    let data=[];
    let state=[];
    // let path=""
    if (type=== PROJECT) {
        data=proj;
        // path="/project"
    }else if(type=== BLOG){
        data=blog;
        // path="/blog"
    }
    if (data.length>=3) {
        state=[data[0],data[1],data[2]]
    }else{
        state=data
    }
    
  return (
    <>
    <>
    {
        state.length>0?
    
    <div className="hm-list-div-container">
        
        <div className="hm-list-div-head">
            {head}
        </div>
        {
            type===PROJECT?<ul className="hm-list-div-list">
            {
                state.map((e,i)=>{
                    return <li className="hm-list-div-list-item" key={i}>
                        <ProjectCard data={e}/>
                    </li>
                })
            }
            
        </ul>:<ul className="hm-list-div-list">
            {
                state.map((e,i)=>{
                    return <li className="hm-list-div-list-item" key={i}>
                        <BlogCard data={e}/>
                    </li>
                })
            }
            
        </ul>
        }
        
        <div className="hm-list-div-link" onClick={()=>navigate(`/${type}`)}>See more <BsFillArrowRightCircleFill style={{marginLeft:".5rem"}}/> </div>
    </div>:""}
    </>
    </>
  )
}

export default HmDivList
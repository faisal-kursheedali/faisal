import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PROJECT } from '../../app/constant';
import { CardList, CenterTxt, List, Para } from '../../component';
import "./project.css"

const Project = () => {
  const state = useSelector(store => store.state);
  const data = state.projectData;
  const [readMore, setReadMore] = useState(false);
  // let macro=[],mini=[],micro=[]
  // data.forEach(i=> {
  //   if (i.type==="macro") {
  //     macro=[...macro,i]
  //   }
  //   if (i.type==="mini") {
  //     mini=[...mini,i]
  //   }
  //   if (i.type==="micro") {
  //     micro=[...micro,i]
  //   }
  // });
  const macro = data.filter(i => i.type === "macro");
  const mini = data.filter(i => i.type === "mini");
  const micro = data.filter(i => i.type === "micro");
  return (
    <>
      <div className="project-conatainer">
        <CenterTxt data={"My Projects"} />
        <List head={"Welcome to my projects"} sub={"about my projects"} desc={`I had done many projects using different technologies. I divided them into some categories based on the hardness level. All the projects are technical-based. And all are built through coding from scratch. Here are the categories.`}
          data={[
            "Macro - These are advanced-level projects.",
            "Mini - These are intermediate-level projects.",
            "Micro - These are beginner-level projects.",
          ]}
        />
        <div className="project-note">


          📌 if you are from <span style={{ backgroundColor: "blue", color: "white", padding: "4px", fontWeight: "600" }}>NEOG</span> then my Macro and Mini projects are my level 1 projects
          <span style={{ color: "black", fontWeight: "600", cursor: "pointer" }} onClick={()=>setReadMore(prev=>prev=!prev)}> {readMore ? "Read less....." : "Read more....."}</span>
          {
            readMore ? <div className="project-readmore">
              I chose <strong>advanced frontend development</strong>, so these are my six projects. I completed projects as per my dev route, each of which meets all of the PRD requirements.
              <ul className="project-readmore-list">
                <li className="project-readmore-list-item"><span style={{fontWeight:"600",color:"blue"}}>BUI</span> - CSS component library</li>
                <li className="project-readmore-list-item"><span style={{fontWeight:"600",color:"green"}}>Interior</span> - E-commerce web application</li>
                <li className="project-readmore-list-item"><span style={{fontWeight:"600",color:"red"}}>MyTube</span> - Video library web application</li>
                <li className="project-readmore-list-item"><span style={{fontWeight:"600",color:"blue"}}>Promodoro</span> - Promodoro web application (TS and JEST)</li>
                <li className="project-readmore-list-item"><span style={{fontWeight:"600"}}>My tab</span> - Browser new tab web application</li>
                <li className="project-readmore-list-item"><span style={{fontWeight:"600",color:"navy"}}>TypeScript starter</span> - TypeScript starter kit (Webpack)</li>
              </ul>
            </div> : ""
          }

        </div>
        {
          macro.length > 0 ? <div className='project-type'><div className="project-type-head">
            Macro projects
          </div>
            <CardList data={macro} type={PROJECT} /></div> : ""
        }
        {
          mini.length > 0 ? <div className='project-type'><div className="project-type-head">
            Mini projects
          </div>
            <CardList data={mini} type={PROJECT} /></div> : ""
        }
        {
          micro.length > 0 ? <div className='project-type'><div className="project-type-head">
            Micro projects
          </div>
            <CardList data={micro} type={PROJECT} /></div> : ""
        }
      </div>
    </>
  )
}

export default Project
import React from 'react'
import {CenterTxt, CmnHeader, List,  Quote } from '../../component'

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <CenterTxt data={"Hello world 🌏"}/>
      <div className="aboutme-header">
      <CmnHeader />

      </div>
      <Quote quote={"Focus on the process not the outcome, and you will enjoy the greate scucess"} author={"Dr. Julie Amanto"}/>
      <div className="aboutme-content">
        <CenterTxt data={"about me"}/>
        <List head={"I am Faisal"} sub={"About me"} desc={"I am Faisal, a normal undergraduate student studying at Bishop Heber College of Arts and Science in Tamil Nadu. I am very interested in web development. I always explore new technologies every day with full energy because I love this process (coding). In the beginning, I didn't know much about computer science and the power of upcoming new technologies in CS. I tried hard from the beginning. Those days, I didn't even know anything. I sat in front of my system and gave it a try every single day. Now I have learned to some level, but I still love to explore things and always love to try them because I love this process. Things I learned are :"}
        data={[
  
          "HTML",
          "CSS",
          "JavaScript",

            "React",

            "React-Router",

            "Redux",

            "TypeScript",

            "Just",

           "WebPack",

            "express js",

            "Mongo DB",
        ]}

        
        />
        <List head={"Things I know other than web development are :"} data={["C","Python","SQL"]}/>
        {/* <Para head={"How I came to cs"} sub={"Who am i"} para={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. In distinctio, veritatis velit culpa quas delectus sequi voluptates quasi recusandae, nisi aliquid placeat rerum enim officiis fuga iure totam vero tempore?
`}/> */}
      </div>
    </div>
  )
}

export default AboutMe
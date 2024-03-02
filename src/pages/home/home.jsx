import React from 'react'
import "./home.css"

import { CenterTxt, CmnHeader,  HmDivList, /*Para,*/ Quote } from '../../component'
import { BLOG, PROJECT } from '../../app/constant'

const Home = () => {
  return (
    <div className="hmpg-container">
      <CmnHeader />
      <Quote author={"A.P.J Abduk Kalam"} quote={"winner are not those who never fail but those who never quit"}/>
      <CenterTxt data={"My Works"}/>
      <div className="hmpg-projects">
        <HmDivList type={PROJECT} head="Projects"/>
      </div>
      <div className="hmpg-blog">
        <HmDivList type={BLOG} head="Blog"/>
      </div>
      <Quote quote={"I can accept failure, but I can't accept not trying."} author={"Michael Jordan"}/>
      {/* <Para head={"I always give a try"} sub={"Why do I try"} para={`I always try, whether I know that thing or not. I always give it a try because I love exploring new technologies and making my hands dirty while trying them.
I make many mistakes when I try new things, but I believe failure is the first step to success. So I try hard and work hard because I love the process more than the outcome.`}/> */}
    </div>
  )
}

export default Home
import React from 'react'
import {Routes,Route} from "react-router-dom"
import {AboutMe, Blog, Home, Project} from '../pages/index'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/project' element={<Project/>}/>
      <Route  path='/blog' element={<Blog/>}/>
      <Route  path='/aboutme' element={<AboutMe/>}/>
    </Routes>
    
    </>
  )
}

export default AllRoutes
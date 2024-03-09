import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMe, Admin, Blog, Home, Project } from "../pages/index";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/001/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

import React from "react";
import { PROJECT } from "../../app/constant";
import BlogCard from "../blog-card/blog-card";
import ProjectCard from "../project-card/project-card";
import "./card-list.css";

const CardList = ({ data, type }) => {
  return (
    <div className="card-list-conatainer">
      <ul className="card-list">
        {type === PROJECT ? (
          <>
            {data.map((i, index) => {
              return (
                <li className="card-list-item" key={index}>
                  <ProjectCard data={i} />
                </li>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            {data.map((i, index) => {
              return (
                <li className="card-list-item" key={index}>
                  <BlogCard data={i} />
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default CardList;

import React from "react";
import "./list.css";
import { GiBulletBill } from "react-icons/gi";

const List = ({ head, sub, desc, data }) => {
  return (
    <div className="list-container">
      <div className="list-header">
        {head ? <div className="list-head">{head}</div> : ""}
        {sub ? <div className="list-sub">{sub}</div> : ""}
      </div>
      {desc ? <div className="list-desc">{desc}</div> : ""}
      {data ? (
        <ul className="list-ul">
          {data.map((i, index) => {
            return (
              <li className="list-item" key={index}>
                <span className="list-item-bullet">
                  <GiBulletBill />
                </span>
                {i}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;

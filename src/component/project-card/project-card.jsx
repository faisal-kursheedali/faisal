import React, { useState } from "react";
import "./project-card.css";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillHtml5,
  AiFillEye,
  AiFillCode,
} from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
// import {IoLogoJavascript} from "react-icons/io"
import { FaReact } from "react-icons/fa";
import { SiJest, SiEslint, SiPrettier, SiBabel } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiJavascript,
} from "react-icons/si";
import { useLocation } from "react-router-dom";
import { setUserProjectAction } from "../../app/feature/state";

const ProjectCard = ({ data }) => {
  const location = useLocation();
  const dateTime = new Date();
  const dispatch = useDispatch();
  const state = useSelector((s) => s.state);
  const [detail, setDetail] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="project-card-container"
      style={
        state.isDark
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "initial", color: "initial" }
      }
      onMouseEnter={() => {
        dispatch(
          setUserProjectAction({
            tittle: data.head,
            tag: data.tag,
            type: data.type,
            path: location.pathname,
            dateTime: dateTime.toISOString(),
            action: "hovered-on-project-card",
            desc: "user hovered on the card and hover image is displayed",
          })
        );
        setHover(true);
      }}
      onMouseLeave={() => {
        dispatch(
          setUserProjectAction({
            tittle: data.head,
            tag: data.tag,
            type: data.type,
            path: location.pathname,
            dateTime: dateTime.toISOString(),
            action: "hovered-off-from-project-card",
            desc: "user hovered-off from the card and logo image is displayed",
          })
        );
        setHover(false);
      }}
    >
      <div className="project-card-img-container">
        {data.logoImg ? (
          <>
            {hover ? (
              <img src={data.img} alt="" className="project-card-img" />
            ) : (
              <img src={data.logoImg} alt="" className="project-card-img" />
            )}
          </>
        ) : (
          <>
            {hover ? (
              <img src={data.img} alt="" className="project-card-img" />
            ) : (
              <>
                <div className="project-card-hover-content">
                  {data.hoverContent}
                </div>
              </>
            )}
          </>
        )}
        {/* <iframe src="https://mytube-webapp.netlify.app/" frameborder="0"div className="project-card-ifram"></iframe> */}
      </div>
      <div className="project-card-content">
        <div className="project-card-head">{data.head}</div>
        {data.tag ? <div className="blog-card-tag">{data.tag}</div> : ""}
        <div className="project-card-sub">{data.sub}</div>
        {detail ? (
          <div className="project-card-detail-container">
            <div className="project-card-detail-txt">built on</div>
            <div className="project-card-detail">
              {data.detail.map((i, index) => {
                return (
                  <div className="project-card-detail-item" key={index}>
                    {i === "html" ? (
                      <AiFillHtml5 style={{ color: "brown" }} />
                    ) : i === "css" ? (
                      <DiCss3 style={{ color: "blue" }} />
                    ) : i === "js" ? (
                      <SiJavascript style={{ color: "gold" }} />
                    ) : i === "react" ? (
                      <FaReact style={{ color: "blue" }} />
                    ) : i === "router" ? (
                      <SiReactrouter style={{ color: "red" }} />
                    ) : i === "redux" ? (
                      <SiRedux style={{ color: "blueviolet" }} />
                    ) : i === "ts" ? (
                      <SiTypescript style={{ color: "navy" }} />
                    ) : i === "jest" ? (
                      <SiJest style={{ color: "brown" }} />
                    ) : i === "web" ? (
                      <SiWebpack style={{ color: "dodgerblue" }} />
                    ) : i === "eslint" ? (
                      <SiEslint style={{ color: "blue" }} />
                    ) : i === "prettier" ? (
                      <SiPrettier style={{ color: "orange" }} />
                    ) : i === "babel" ? (
                      <SiBabel style={{ color: "gold" }} />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          className="project-card-slide"
          onClick={() => setDetail((prev) => (prev = !prev))}
        >
          {detail ? (
            <>
              <div
                className="project-card-slide-txt"
                onClick={() => {
                  dispatch(
                    setUserProjectAction({
                      tittle: data.head,
                      tag: data.tag,
                      type: data.type,
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "show-less-button",
                      desc: "user clicked on show less button",
                    })
                  );
                }}
              >
                show less
              </div>{" "}
              <AiOutlineArrowUp />
            </>
          ) : (
            <>
              <div
                className="project-card-slide-txt"
                onClick={() => {
                  dispatch(
                    setUserProjectAction({
                      tittle: data.head,
                      tag: data.tag,
                      type: data.type,
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "show-more-button",
                      desc: "user clicked on show more button and logos are displayed",
                    })
                  );
                }}
              >
                show more
              </div>{" "}
              <AiOutlineArrowDown />
            </>
          )}
        </div>
        <div className="project-card-link-container">
          {data.link ? (
            <div
              className="project-card-live-link"
              onClick={() => {
                dispatch(
                  setUserProjectAction({
                    tittle: data.head,
                    tag: data.tag,
                    type: data.type,
                    path: location.pathname,
                    dateTime: dateTime.toISOString(),
                    action: "live-app-button",
                    desc: "user clicked on live app button",
                  })
                );
              }}
            >
              <a href={data.link} className="project-card-link">
                <AiFillEye />{" "}
                <span className="project-card-link-txt">live app</span>{" "}
              </a>
            </div>
          ) : (
            ""
          )}
          {data.gitLink ? (
            <div
              className="project-card-gitlink-link"
              onClick={() => {
                dispatch(
                  setUserProjectAction({
                    tittle: data.head,
                    tag: data.tag,
                    type: data.type,
                    path: location.pathname,
                    dateTime: dateTime.toISOString(),
                    action: "source-code-button",
                    desc: "user clicked on source code button",
                  })
                );
              }}
            >
              <a href={data.gitLink} className="project-card-link">
                <AiFillCode />{" "}
                <span className="project-card-link-txt">sorce code</span>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

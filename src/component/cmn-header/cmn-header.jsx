import React from "react";
import "./cmn-header.css";

import faisal from "../../assets/faisal.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { setUserAboutAction, setUserHomeAction } from "../../app/feature/state";
import { useDispatch } from "react-redux";

const CmnHeader = ({
  data = "Hey, Hi 👋 This is me, Faisal. A skilled professional with expertise in both application development using Flutter and web development with the MERN stack. Having successfully navigated through academic challenges, I've honed my skills in translating creative ideas into practical solutions. Explore my portfolio to see the range of projects in Flutter and MERN that reflect my passion and dedication to web and app development.",
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const dateTime = new Date();

  return (
    <div className="cmn-header-container">
      <div className="header">
        <div className="landing-header">
          <img className="landing-img" src={faisal} alt="" />
          <div className="landing-detail">
            <div className="landing-detail-head">FAISAL K</div>
            <div className="landing-detail-sub-head">
              <span className="landing-detail-sub-head-iam">I am </span>
              <span className="landing-detail-sub-head-mern">
                Software Development Engineer
              </span>
            </div>
            <div className="landing-detail-desc">{data}</div>
          </div>
        </div>
        <div className="landing-btn-container">
          <button
            className="landing-btn-primary"
            onClick={() => {
              location.pathname === "/"
                ? dispatch(
                    setUserHomeAction({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "my-resume-btn",
                      desc: `clicked my resume button`,
                    })
                  )
                : dispatch(
                    setUserAboutAction({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "my-resume-btn",
                      desc: `clicked my resume button`,
                    })
                  );
            }}
          >
            <a
              href={`${window.location.origin}/cv.pdf`}
              className="landing-btn-primary-link"
            >
              My Resume
            </a>
          </button>
          <button
            className="landing-btn-secondary"
            onClick={() => {
              location.pathname === "/"
                ? dispatch(
                    setUserHomeAction({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "project-btn",
                      desc: `clicked project button`,
                    })
                  )
                : dispatch(
                    setUserAboutAction({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "project-btn",
                      desc: `clicked project button`,
                    })
                  );
              navigate("/project");
            }}
          >
            Projects
          </button>
        </div>
        <div className="header-link">
          <ul className="header-link-list">
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-github-btn",
                        desc: `clicked media-github button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-github-btn",
                        desc: `clicked media-github button`,
                      })
                    );
              }}
            >
              <a
                href="https://github.com/faisal-kursheedali"
                className="header-link-link"
              >
                <AiFillGithub />
              </a>
            </li>
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-linkedin-btn",
                        desc: `clicked media-linkedin button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-linkedin-btn",
                        desc: `clicked media-linkedin button`,
                      })
                    );
              }}
            >
              <a
                href="https://www.linkedin.com/in/faisal-k-4a02801b2/"
                className="header-link-link"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-twitter-btn",
                        desc: `clicked media-twitter button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-twitter-btn",
                        desc: `clicked media-twitter button`,
                      })
                    );
              }}
            >
              <a
                href="https://twitter.com/faisal_devop"
                className="header-link-link"
              >
                <AiFillTwitterCircle />
              </a>
            </li>
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-instagram-btn",
                        desc: `clicked media-instagram button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-instagram-btn",
                        desc: `clicked media-instagram button`,
                      })
                    );
              }}
            >
              <a
                href="https://www.instagram.com/demented_devops/"
                className="header-link-link"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-email-btn",
                        desc: `clicked media-email button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-email-btn",
                        desc: `clicked media-email button`,
                      })
                    );
              }}
            >
              <a
                href="mailto:faisal.k.ison@gmail.com"
                className="header-link-link"
              >
                <MdEmail />
              </a>
            </li>
            <li
              className="header-link-list-item"
              onClick={() => {
                location.pathname === "/"
                  ? dispatch(
                      setUserHomeAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-discord-btn",
                        desc: `clicked media-discord button`,
                      })
                    )
                  : dispatch(
                      setUserAboutAction({
                        path: location.pathname,
                        dateTime: dateTime.toISOString(),
                        action: "media-discord-btn",
                        desc: `clicked media-discord button`,
                      })
                    );
              }}
            >
              <a
                href="https://discordapp.com/users/#1279"
                className="header-link-link"
              >
                <BsDiscord />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CmnHeader;

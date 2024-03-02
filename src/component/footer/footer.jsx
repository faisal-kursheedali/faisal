import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Brand from "../brand/barnd";
import "./footer.css";
import { useDispatch } from "react-redux";
import { setUserFooterActon } from "../../app/feature/state";
const Footer = () => {
  const location = useLocation();
  const dateTime = new Date().toISOString();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about-app">
            <div className="footer-brand">
              <Brand />
            </div>
            this is my portfolio website and this is build by faisal K with❤️.
            {/* <span className="footer-bold">@neog camp</span>
                         with❤️ */}
          </div>
          <div className="footer-link">
            <div className="footer-list-head">Link</div>
            <ul className="footer-list">
              <li className="footer-list-item">
                <div
                  className="footer-list-item-link"
                  onClick={() => {
                    dispatch(
                      setUserFooterActon({
                        path: location.pathname,
                        dateTime: dateTime,
                        action: "home-link",
                        desc: "clicked home link",
                      })
                    );
                    navigate("/");
                  }}
                >
                  home
                </div>
              </li>
              <li className="footer-list-item">
                <div
                  className="footer-list-item-link"
                  onClick={() => {
                    dispatch(
                      setUserFooterActon({
                        path: location.pathname,
                        dateTime: dateTime,
                        action: "project-link",
                        desc: "clicked project link",
                      })
                    );
                    navigate("/project");
                  }}
                >
                  project
                </div>
              </li>
              <li className="footer-list-item">
                <div
                  className="footer-list-item-link"
                  onClick={() => {
                    dispatch(
                      setUserFooterActon({
                        path: location.pathname,
                        dateTime: dateTime,
                        action: "blog-link",
                        desc: "clicked blog link",
                      })
                    );
                    navigate("/blog");
                  }}
                >
                  blog
                </div>
              </li>
              <li className="footer-list-item">
                <div
                  className="footer-list-item-link"
                  onClick={() => {
                    dispatch(
                      setUserFooterActon({
                        path: location.pathname,
                        dateTime: dateTime,
                        action: "blog-link",
                        desc: "clicked blog link",
                      })
                    );
                    navigate("/aboutme");
                  }}
                >
                  aboutme
                </div>
              </li>
              {/* <li className="footer-list-item">
                <div
                  className="footer-list-item-link"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  blog
                </div>
              </li> */}
              {/* <li className="footer-list-item">
                                <a href="/wishlist" className="footer-list-item-link">Wishlist</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/login" className="footer-list-item-link">Login</a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/signup" className="footer-list-item-link">Signup</a>
                            </li> */}
            </ul>
          </div>
          <div className="footer-socialmedia">
            <div className="footer-list-head">Social Media</div>
            <ul className="footer-list">
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-twitter-link",
                      desc: "clicked media twitter link",
                    })
                  );
                }}
              >
                <a
                  href="https://twitter.com/faisal_devop"
                  className="footer-list-item-link"
                >
                  Twitter
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-github-link",
                      desc: "clicked media github link",
                    })
                  );
                }}
              >
                <a
                  href="https://github.com/faisal-kursheedali"
                  className="footer-list-item-link"
                >
                  Github
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-linkedin-link",
                      desc: "clicked media linkedin link",
                    })
                  );
                }}
              >
                <a
                  href="https://www.linkedin.com/in/faisal-k-4a02801b2/"
                  className="footer-list-item-link"
                >
                  Linkedin
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-mail-link",
                      desc: "clicked media mail link",
                    })
                  );
                }}
              >
                <a
                  href="mailto:faisal.k.ison@gmail.com"
                  className="footer-list-item-link"
                >
                  Email
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-discord-link",
                      desc: "clicked media discord link",
                    })
                  );
                }}
              >
                <a
                  href="https://discordapp.com/users/#1279"
                  className="footer-list-item-link"
                >
                  Discord
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "media-instagram-link",
                      desc: "clicked media instagram link",
                    })
                  );
                }}
              >
                <a
                  href="https://www.instagram.com/demented_devops/"
                  className="footer-list-item-link"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-project">
            <div className="footer-list-head">Projects</div>
            <ul className="footer-list">
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "project-promodoro-link",
                      desc: "clicked project promodoro link",
                    })
                  );
                }}
              >
                <a href="/" className="footer-list-item-link">
                  Promodoro
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "project-bui-link",
                      desc: "clicked project bui link",
                    })
                  );
                }}
              >
                <a
                  href="https://bui-site.netlify.app/"
                  className="footer-list-item-link"
                >
                  BUI
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "project-interior-link",
                      desc: "clicked project interior link",
                    })
                  );
                }}
              >
                <a
                  href="https://home-interior-app.netlify.app/"
                  className="footer-list-item-link"
                >
                  Interior
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "project-mytube-link",
                      desc: "clicked project mytube link",
                    })
                  );
                }}
              >
                <a
                  href="https://mytube-webapp.netlify.app/"
                  className="footer-list-item-link"
                >
                  MyTube
                </a>
              </li>
              <li
                className="footer-list-item"
                onClick={() => {
                  dispatch(
                    setUserFooterActon({
                      path: location.pathname,
                      dateTime: dateTime,
                      action: "project-myTab-link",
                      desc: "clicked project myTab link",
                    })
                  );
                }}
              >
                <a
                  href="https://my-tab.netlify.app/"
                  className="footer-list-item-link"
                >
                  MyTab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="footer-end"
          onClick={() => {
            dispatch(
              setUserFooterActon({
                path: location.pathname,
                dateTime: dateTime,
                action: "portfolio-github-link",
                desc: "clicked on the link to portfolio sorce code in github",
              })
            );
          }}
        >
          The git-hub link for this web-app is
          <a
            href="https://github.com/faisal-kursheedali/faisal"
            className="footer-end-link"
          >
            here{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

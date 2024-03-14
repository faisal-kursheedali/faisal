import React, { useRef, useState } from "react";
import "./coverletter.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CoverLetter() {
  const [userInfo, setUserInfo] = useState({
    name: "Faisal K",
    position: "Software Development Engineer",
    address: `No 3/1 2nd main road, Srinivasa Nagar, Vayalu Road,
    Trichy-17, Tamil Nadu,
    India (620017).`,
    mian_phone: "+91 8438996467 |",
    sub_phone: "+91 8608184277",
    mian_mail: "faisal.k.ison@gmail.com |",
    sub_mail: "khurfaisal@gmail.com",
    portfolio_link: "https://faisal-app.netlify.app/",
    portfolio_text: "",
    date: true,
    experience: 2,
  });

  const [userContent, setUserContent] = useState({
    greeting: "Dear Hiring Manager,",
    para: [
      `In my previous role as a Software Development Engineer (SDE) at KILOFARMS, I honed my skills in building high-performing and user-friendly mobile applications using the Flutter framework.  During this year, I gained valuable experience in core Flutter concepts like widgets, state management, and navigation, allowing me to design and develop intuitive user interfaces.  I am also proficient in Dart, understanding its object-oriented programming principles and their application in mobile development.`,
      `Prior to transitioning to Flutter, I actively explored the world of web development through self-directed learning and participation in a bootcamp offered by NEOG. This experience provided me with a solid foundation in technologies such as React, TypeScript, Redux, and  Next.js. Additionally, I gained proficiency in back-end technologies like Express.js, Node.js, and various databases (MySQL, PostgreSQL). Having a well-rounded understanding of both front-end and back-end development allows me to grasp new concepts quickly and adapt to the ever-evolving mobile app landscape.`,
    ],
    footer: [
      `Throughout my experience in Software Development, I have undertaken numerous projects utilizing these technologies. My portfolio showcases my ability to translate complex ideas into functional applications. I am confident that my skills and enthusiasm for learning will be a valuable asset to your team.`,
      `Please find my portfolio website to learn more about me. Feel free to contact me if you have any further questions you would like to discuss.`,
    ],
    thankgiving: `Thank you for taking the time to consider my application. I look forward to hearing from you.`,
    respecting: "Sincerely,",
    applingForCompany: "Google",
    applingForRole: "SDE",
    generalLetter: false,
    showLinkInPDF: false,
  });
  let paraText = "";
  let footerText = "";
  let date = new Date();
  const [pageController, setPageController] = useState({
    editUserDetail: false,
    editUserContent: false,
    fastEdit: false,
  });
  const pdfRef = useRef(null);

  const downloadCoverLetter = () => {
    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL(" image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      const fileName = `${
        userContent.generalLetter
          ? "cover_letter"
          : `cover_letter_${userContent.applingForCompany}`
      }.pdf`;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(fileName);
    });
  };

  return (
    <>
      <div className="mainBox">
        <button onClick={downloadCoverLetter} className="DownloadBtn">
          Download cover letter 📩
        </button>

        <div className="a4Container" ref={pdfRef} id="a4CoverLetter">
          <div className="coverLetter">
            <div className="cntHeaderName">{userInfo.name}</div>
            <div className="cntHeaderPosition">{userInfo.position}</div>
            {userInfo.date ? (
              <>
                <div className="cntHeaderDate">{`${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()}`}</div>
              </>
            ) : (
              <></>
            )}
            <div className="cntHeaderHr"></div>
            <div className="cntGreeting">{userContent.greeting}</div>
            <div className="cntPara">
              <div className="cntSinglePara">
                I am writing to express my keen interest in joining{" "}
                {!userContent.generalLetter ? (
                  <b>{userContent.applingForCompany}</b>
                ) : (
                  <>In you'r company</>
                )}
                {!userContent.generalLetter ? (
                  <>
                    {" "}
                    for the <b>{userContent.applingForRole}</b> position
                  </>
                ) : (
                  <></>
                )}
                . Having {userInfo.experience} years of experience in Software
                Development, I am confident that my skills and dedication would
                be a valuable asset to your team. I am a fast learner and a
                highly motivated individual with a strong work ethic. My strong
                problem-solving skills and collaborative nature ensure I can
                tackle challenges and contribute meaningfully from day one.
              </div>
              {userContent.para.map((e, index) => {
                return (
                  <div className="cntSinglePara" key={index}>
                    {`${e}`}
                  </div>
                );
              })}
            </div>
            <div className="cntFooter">
              {userContent.footer.map((e, index) => {
                return (
                  <div className="cntSingleFooter" key={index}>
                    {`${e}`}
                  </div>
                );
              })}
            </div>
            {userContent.thankgiving ? (
              <>
                <div className="cntThanksgiving">{userContent.thankgiving}</div>
              </>
            ) : (
              <></>
            )}
            {userContent.respecting ? (
              <>
                <div className="cntRespecting">{userContent.respecting}</div>
              </>
            ) : (
              <></>
            )}
            <div className="cntFooterName">{userInfo.name}</div>
            <div className="cntFooterHr"></div>
            <div className="cntMyInfo">
              <div className="cntFooterMail">
                <div className="cntFooterMainMail">{userInfo.mian_mail}</div>
                <div className="cntFooterSubMail">{userInfo.sub_mail}</div>
              </div>
              <div className="cntFooterPhone">
                <div className="cntFooterMainPhone">{userInfo.mian_phone}</div>
                <div className="cntFooterSubPhone">{userInfo.sub_phone}</div>
              </div>
              {userInfo.address ? (
                <div className="cntFooterAddressBox">
                  <div className="cntFooterAddressHead">Address:</div>
                  <div className="cntFooterAddress">{userInfo.address}</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {/* From here we edit the cover letter */}
        <div className="coverLetterEdit">
          {!pageController.fastEdit ? (
            <>
              <h2
                onClick={() =>
                  setPageController({
                    editUserContent: pageController.editUserContent,
                    editUserDetail: pageController.editUserDetail,
                    fastEdit: !pageController.fastEdit,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ⬇️ Fast edit
              </h2>
            </>
          ) : (
            <>
              <div className="fastedit">
                <h2
                  onClick={() =>
                    setPageController({
                      editUserContent: pageController.editUserContent,
                      editUserDetail: pageController.editUserDetail,
                      fastEdit: !pageController.fastEdit,
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  ⬆️ Fast edit
                </h2>
                <input
                  type="text"
                  value={userContent.applingForCompany}
                  onChange={(e) =>
                    setUserContent({
                      ...userContent,
                      applingForCompany: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={userContent.applingForRole}
                  onChange={(e) =>
                    setUserContent({
                      ...userContent,
                      applingForRole: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={userContent.greeting}
                  onChange={(e) =>
                    setUserContent({
                      ...userContent,
                      greeting: e.target.value,
                    })
                  }
                />
                date
                <input
                  type="checkbox"
                  checked={userInfo.date}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, date: !userInfo.date })
                  }
                  style={{
                    display: "inline",
                    width: "auto",
                    marginLeft: "5px",
                  }}
                />
                <br />
                Generic Cover letter
                <input
                  type="checkbox"
                  checked={userContent.generalLetter}
                  onChange={(e) =>
                    setUserContent({
                      ...userContent,
                      generalLetter: !userContent.generalLetter,
                    })
                  }
                  style={{
                    display: "inline",
                    width: "auto",
                    marginLeft: "5px",
                  }}
                />
              </div>
            </>
          )}

          {!pageController.editUserDetail ? (
            <>
              <h2
                onClick={() =>
                  setPageController({
                    editUserContent: pageController.editUserContent,
                    editUserDetail: !pageController.editUserDetail,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ⬇️ user detail
              </h2>
            </>
          ) : (
            <div className="userInput">
              <h2
                onClick={() =>
                  setPageController({
                    editUserContent: pageController.editUserContent,
                    editUserDetail: !pageController.editUserDetail,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ⬆️ user detail
              </h2>
              <input
                type="text"
                value={userInfo.name}
                placeholder="name"
                onChange={(e) =>
                  setUserInfo(
                    (state) => (state = { ...userInfo, name: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.position}
                placeholder="position"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, position: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.mian_phone}
                placeholder="mian_phone"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, mian_phone: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.sub_phone}
                placeholder="sub_phone"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, sub_phone: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.mian_mail}
                placeholder="mian_mail"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, mian_mail: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.sub_mail}
                placeholder="sub_mail"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, sub_mail: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.portfolio_link}
                placeholder="portfolio_link"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, portfolio_link: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.portfolio_text}
                placeholder="portfolio_text"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, portfolio_text: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userInfo.experience}
                placeholder="experience"
                onChange={(e) =>
                  setUserInfo(
                    (state) =>
                      (state = { ...userInfo, experience: e.target.value })
                  )
                }
              />
              <br />
              <textarea
                type="text"
                value={userInfo.address}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, address: e.target.value });
                }}
                placeholder="address"
              />
            </div>
          )}

          {!pageController.editUserContent ? (
            <>
              <h2
                onClick={() =>
                  setPageController({
                    editUserContent: !pageController.editUserContent,
                    editUserDetail: pageController.editUserDetail,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ⬇️ Cover letter
              </h2>
            </>
          ) : (
            <div className="userContentInput">
              <h2
                onClick={() =>
                  setPageController({
                    editUserContent: !pageController.editUserContent,
                    editUserDetail: pageController.editUserDetail,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ⬆️ Cover letter
              </h2>
              date
              <input
                type="checkbox"
                checked={userInfo.date}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, date: !userInfo.date })
                }
                style={{
                  display: "inline",
                  width: "auto",
                  marginLeft: "5px",
                }}
              />
              <input
                type="text"
                value={userContent.greeting}
                placeholder="greeting"
                onChange={(e) =>
                  setUserContent(
                    (state) =>
                      (state = { ...userContent, greeting: e.target.value })
                  )
                }
              />
              Generic Cover letter
              <input
                type="checkbox"
                checked={userContent.generalLetter}
                onChange={(e) =>
                  setUserContent({
                    ...userContent,
                    generalLetter: !userContent.generalLetter,
                  })
                }
                style={{
                  display: "inline",
                  width: "auto",
                  marginLeft: "5px",
                }}
              />
              <input
                type="text"
                value={userContent.applingForCompany}
                placeholder="applingForCompany"
                onChange={(e) =>
                  setUserContent({
                    ...userContent,
                    applingForCompany: e.target.value,
                  })
                }
              />
              <input
                type="text"
                value={userContent.applingForRole}
                placeholder="applingForRole"
                onChange={(e) =>
                  setUserContent({
                    ...userContent,
                    applingForRole: e.target.value,
                  })
                }
              />
              {userContent.para.length > 0 ? (
                <>
                  {userContent.para.map((item, i) => {
                    return (
                      <div className="cntExistingParaEdit" key={i}>
                        <textarea
                          type="text"
                          value={item}
                          placeholder={`Exiating para ${i}`}
                          onChange={(e) => {
                            setUserContent((state) => {
                              let para = userContent.para;
                              para[i] = e.target.value;
                              state = { ...userContent, para };
                              return state;
                            });
                          }}
                        />
                        <button
                          className="addNewPara"
                          onClick={() => {
                            let para = userContent.para;
                            para.splice(i + 1, 0, "");
                            setUserContent({
                              ...userContent,
                              para,
                            });
                          }}
                        >
                          Add new
                        </button>
                        <button
                          className="removePara"
                          onClick={() => {
                            let para = userContent.para;
                            para.splice(i, 1);
                            setUserContent((state) => {
                              state = { ...userContent, para };
                              return state;
                            });
                          }}
                        >
                          remove this
                        </button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <textarea
                    type="text"
                    onChange={(e) => (paraText = e.target.value)}
                    placeholder="New para"
                  />
                  <button
                    className="addPara"
                    onClick={() => {
                      setUserContent(
                        (state) =>
                          (state = {
                            ...userContent,
                            para: [...userContent.para, paraText],
                          })
                      );
                    }}
                  >
                    Add
                  </button>
                </>
              )}
              {userContent.footer.length > 0 ? (
                <>
                  {userContent.footer.map((item, i) => {
                    return (
                      <div className="cntExistingFooterEdit" key={i}>
                        <textarea
                          type="text"
                          value={item}
                          placeholder={`Existing footer para ${i}`}
                          onChange={(e) => {
                            setUserContent((state) => {
                              let footer = userContent.footer;
                              footer[i] = e.target.value;
                              state = { ...userContent, footer };
                              return state;
                            });
                          }}
                        />
                        <button
                          className="addNewFooter"
                          onClick={() => {
                            let footer = userContent.footer;
                            footer.splice(i + 1, 0, "");
                            setUserContent({
                              ...userContent,
                              footer,
                            });
                          }}
                        >
                          Add new
                        </button>
                        <button
                          className="removeFooter"
                          onClick={() => {
                            let footer = userContent.footer;
                            footer.splice(i, 1);
                            setUserContent((state) => {
                              state = { ...userContent, footer };
                              return state;
                            });
                          }}
                        >
                          remove this
                        </button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <textarea
                    type="text"
                    onChange={(e) => (footerText = e.target.value)}
                    placeholder="New Footer para"
                  />
                  <button
                    className="addPara"
                    onClick={() => {
                      setUserContent(
                        (state) =>
                          (state = {
                            ...userContent,
                            footer: [...userContent.footer, footerText],
                          })
                      );
                    }}
                  >
                    Add
                  </button>
                </>
              )}
              <textarea
                type="text"
                value={userContent.thankgiving}
                placeholder="thankgiving - telling thankyou"
                onChange={(e) =>
                  setUserContent(
                    (state) =>
                      (state = { ...userContent, thankgiving: e.target.value })
                  )
                }
              />
              <input
                type="text"
                value={userContent.respecting}
                placeholder="respecting -> telling Sincerely"
                onChange={(e) =>
                  setUserContent(
                    (state) =>
                      (state = { ...userContent, respecting: e.target.value })
                  )
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

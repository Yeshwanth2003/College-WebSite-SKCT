import { useEffect, useState } from "react";
import "./Style/nisp.css";

export default function NISP() {
  let [nispData, setNispData] = useState(null);

  useEffect(() => {
    fetch("https://data.skct.edu.in/nisp/")
      .then((res) => res.json())
      .then((dats) => {
        setNispData(dats);
      });
  }, []);

  //   update Dom
  useEffect(() => {

    if (nispData === null) return;
    let aboutP = document.getElementById("nispAboutP");
    aboutP.innerHTML += nispData?.about;

    let CMdiv = document.getElementById("commiteeMember");
    CMdiv.innerHTML += nispData?.members;

    let contactP = document.getElementById("nispContactP");
    contactP.innerHTML += nispData?.contact;
  }, [nispData]);

  function scroller(event) {
    let val = event.target.getAttribute("scrollto");
    document.getElementById(val).scrollIntoView({behavior:"smooth", block: "center" });
  }

  return (
    <>
      <div className="nisp-wrapper">
        <div className="nisp-header-wrapper">
          <div className="nisp-header-headingDiv">
            <h2 className="nisp-header-h2">NISP</h2>
          </div>
          <div className="nisp-header-body">
            <ul className="nisp-navUl">
              <li className="nisp-navli">
                <div className="nisp-navli-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.01 512.01"
                  >
                    <g>
                      <g>
                        <path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163    c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253    c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667    C514.096,262.747,514.096,249.264,505.754,240.923z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="nisp-navli-text">
                  <p
                    className="nisp-navli-p"
                    onClick={(event) => {
                      scroller(event);
                    }}
                    scrollto="$About"
                  >
                    About NISP
                  </p>
                </div>
              </li>
              <li className="nisp-navli">
                <div className="nisp-navli-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.01 512.01"
                  >
                    <g>
                      <g>
                        <path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163    c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253    c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667    C514.096,262.747,514.096,249.264,505.754,240.923z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="nisp-navli-text">
                  <p
                    className="nisp-navli-p"
                    onClick={(event) => {
                      scroller(event);
                    }}
                    scrollto="$COMMITEEmem"
                  >
                    Committee Members
                  </p>
                </div>
              </li>
              <li className="nisp-navli">
                <div className="nisp-navli-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.01 512.01"
                  >
                    <g>
                      <g>
                        <path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163    c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253    c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667    C514.096,262.747,514.096,249.264,505.754,240.923z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="nisp-navli-text">
                  <p
                    className="nisp-navli-p"
                    onClick={(event) => {
                      scroller(event);
                    }}
                    scrollto="$Contact"
                  >
                    Contact
                  </p>
                </div>
              </li>
              <li className="nisp-navli">
                <div className="nisp-navli-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.01 512.01"
                  >
                    <g>
                      <g>
                        <path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163    c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253    c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667    C514.096,262.747,514.096,249.264,505.754,240.923z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="nisp-navli-text">
                  <p
                    className="nisp-navli-p"
                    onClick={(event) => {
                      scroller(event);
                    }}
                    scrollto="$PolicyDoc"
                  >
                    Policy Documents
                  </p>
                </div>
              </li>
              <li className="nisp-navli">
                <div className="nisp-navli-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512.01 512.01"
                  >
                    <g>
                      <g>
                        <path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163    c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253    c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667    C514.096,262.747,514.096,249.264,505.754,240.923z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="nisp-navli-text">
                  <p
                    className="nisp-navli-p"
                    onClick={(event) => {
                      scroller(event);
                    }}
                    scrollto="$Events"
                  >
                    Event
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="nisp-body-wrapper">
          <main id="nispBody" className="nav-body-main">
            <div className="nisp-body-headerDiv">
              <h2 className="nisp-header-h2">
                NATIONAL INSTITUTIONAL STARTUP POLICY (NISP)
              </h2>
            </div>
            <div className="nisp-aboutDiv">
              <h3 id="$About" className="nisp-body-headings">
                About NISP
              </h3>
              <p id="nispAboutP" className="nisp-about-p"></p>
            </div>
            <div id="commiteeMember" className="nisp-CMdiv">
              <h3 id="$COMMITEEmem" className="nisp-body-headings">
                COMMITTEE MEMBERS
              </h3>
            </div>
            <div className="nisp-policy-doc">
              <h3 id="$PolicyDoc" className="nisp-body-headings">
                POLICY DOCUMENTS
              </h3>
              {nispData !== null &&
                nispData.policy.map((elem) => {
                  console.log("hi");
                  return (
                    <>
                      <NISPCard
                        NAME={elem.name}
                        LINK={`https://data.skct.edu.in${elem.pdf}`}
                      />
                    </>
                  );
                })}
            </div>
            <div className="nisp-policy-doc">
              <h3 id="$Events" className="nisp-body-headings">
                EVENTS
              </h3>
              {nispData !== null &&
                nispData.event.map((elem) => {
                  console.log("hi");
                  return (
                    <>
                      <NISPCard
                        NAME={elem.name}
                        LINK={`https://data.skct.edu.in${elem.pdf}`}
                      />
                    </>
                  );
                })}
            </div>
            <div className="nisp-contact-div">
              <h3 id="$Contact" className="nisp-body-headings">
                CONTACT PERSON
              </h3>
              <p id="nispContactP" className="nisp-contact-p"></p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function NISPCard({ LINK, NAME }) {
  return (
    <>
      <div className="nispCard-wrapper">
        <a
          href={LINK}
          className="nispCard-linkWrapper"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="nispCard-body">
            <div className="nispCard-iconDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                width="30px"
                height="30px"
                fill="skyblue"
              >
                <g>
                  <g>
                    <path d="M704.8,540.2H582.3V377.5H417.7v162.7H295.2L500,745L704.8,540.2z M800.5,419.6c52.3,3.8,97,25.2,134,64.1c37,38.9,55.5,85.2,55.5,138.8c0,56.1-20.1,104.3-60.3,144.5s-88.4,60.3-144.5,60.3H255c-67.6,0-125.4-23.9-173.2-71.8S10,649.9,10,582.3c0-62.5,21.1-117.1,63.2-163.7c42.1-46.6,93.8-73.1,155-79.4c26.8-49.8,64.4-90,112.9-120.6c48.5-30.6,101.4-45.9,158.9-45.9c74,0,139.1,23.3,195.2,69.9S786.5,348.2,800.5,419.6z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="calanderCard-nameDiv">
              <p className="calanderCardName">{NAME}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

import { lazy, Suspense, useEffect, useState } from "react";
import Loading from '../Loading'
import "./Style/academicResearch.css";

const ARPAGESTATES = {
  ABOUTUS: "0",
  POLICY: "1",
  JP: "2",
  BP: "3",
  CP: "4",
  FR: "5",
  BPS: "6",
};

export default function AcademicResearch() {
  let [inbuiltRS, setIRS] = useState(ARPAGESTATES.ABOUTUS);

  useEffect(() => {
    let listz = document.querySelectorAll("#ArNavList");
    listz.forEach((elem) => {
      elem.classList.remove("ar-nav-li-cur");
      if (elem.getAttribute("pagename") === inbuiltRS)
        elem.classList.add("ar-nav-li-cur");
    });
  }, [inbuiltRS]);

  return (
    <>
      <div className="ar-wrapper">
        <div className="ar-container">
          <div className="ar-headingDiv">
            <h2 className="ar-heading">Academic Research</h2>
            <div className="ar-nav">
              <ul className="ar-nav-ul">
                <li
                  id="ArNavList"
                  className="ar-nav-li ar-nav-li-cur"
                  pagename={ARPAGESTATES.ABOUTUS}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.ABOUTUS);
                    }}
                  >
                    About Us
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.POLICY}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.POLICY);
                    }}
                  >
                    Policy
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.JP}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.JP);
                    }}
                  >
                    Journals Publications
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.BP}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.BP);
                    }}
                  >
                    Books Published
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.BPS}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.BPS);
                    }}
                  >
                    Books Chapters Publications
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.CP}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.CP);
                    }}
                  >
                    Conference Publications
                  </button>
                </li>
                <li
                  id="ArNavList"
                  className="ar-nav-li"
                  pagename={ARPAGESTATES.FR}
                >
                  <button
                    className="ar-nav-button"
                    onClick={() => {
                      setIRS(ARPAGESTATES.FR);
                    }}
                  >
                    Funding Received
                  </button>
                </li>
              </ul>
            </div>
            <div className="ar-nav-triDotDiv">
              <input className="ar-h-input" type="checkbox" id="arradio" />
             <label htmlFor="arradio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                >
                  <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="ar-body">
             <ARrouter pageState={inbuiltRS}/>
          </div>
        </div>
      </div>
    </>
  );
}

function ARrouter(pageState){
   if(false){

   }
   else{
    let Component = lazy(()=>import("./AcademicResearchPages/AboutUs"));
    return(
      <>
      <Suspense fallback={<Loading />}>
           <Component />
      </Suspense>
      </>
    )
   }
}
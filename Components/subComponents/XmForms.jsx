import { useEffect, useState } from "react";
import "./Style/xmForm.css";

export default function XmForm() {
  let [fD, setFd] = useState([]);

  useEffect(() => {
    import("../../DataCenter/subComponentsData/XamDatas/xmForm")
      .then((res) => res.default)
      .then((dats) => {
        setFd(dats);
      });
  }, []);

  return (
    <>
      <div className="xmf-wrapper">
        <div className="xmf-container">
          <div className="xmf-headingDiv">
            <h2 className="xmf-heading">FORMS</h2>
          </div>
          <div className="xmf-body">
            {fD.length > 0 &&
              fD.map((elem) => {
                return (
                  <>
                    <F1
                      LINK={`https://data.skct.edu.in${elem.pdf}`}
                      NAME={elem.name}
                    />
                  </>
                );
              })}
            {FormInnerLink.map((elem) => {
              return (
                <>
                  <F2 LINK={`${elem.link}`} NAME={elem.name} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function F2({ LINK, NAME }) {
  return (
    <>
      <a href={LINK} className="f1-link" target={"_blank"} rel="noreferrer">
        <div className="f1-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="blue"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
          </svg>
          <span className="f1-span">{NAME}</span>
        </div>
      </a>
    </>
  );
}

function F1({ LINK, NAME }) {
  return (
    <>
      <a href={LINK} className="f1-link" target={"_blank"} rel="noreferrer">
        <div className="f1-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            width="30px"
            height="30px"
            fill="blue"
          >
            <g>
              <g>
                <path d="M704.8,540.2H582.3V377.5H417.7v162.7H295.2L500,745L704.8,540.2z M800.5,419.6c52.3,3.8,97,25.2,134,64.1c37,38.9,55.5,85.2,55.5,138.8c0,56.1-20.1,104.3-60.3,144.5s-88.4,60.3-144.5,60.3H255c-67.6,0-125.4-23.9-173.2-71.8S10,649.9,10,582.3c0-62.5,21.1-117.1,63.2-163.7c42.1-46.6,93.8-73.1,155-79.4c26.8-49.8,64.4-90,112.9-120.6c48.5-30.6,101.4-45.9,158.9-45.9c74,0,139.1,23.3,195.2,69.9S786.5,348.2,800.5,419.6z" />
              </g>
            </g>
          </svg>
          <span className="f1-span">{NAME}</span>
        </div>
      </a>
    </>
  );
}

const FormInnerLink = [
  {
    name: "APPLICATION FOR ISSUE OF NEW / DUPLICATE CERTIFICATE",
    link: "/",
  },
  {
    name: "APPLICATION FOR NAME CHANGE",
    link: "/",
  },
  {
    name: "APPLICATION FOR TRANSCRIPTION",
    link: "/",
  },
  {
    name: "APPLICATION FOR WITHDRAWAL FROM END SEMESTER EXAMINATION",
    link: "/",
  },
  {
    name: "APPLICATION FOR TEMPRORARY BREAK OF STUDY",
    link: "/",
  },
  {
    name: "APPLICATION FOR PAYMENT OF CONDONATION FEE",
    link: "/",
  },
];

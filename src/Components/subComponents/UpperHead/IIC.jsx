import { useEffect, useState } from "react";
import "./Style/iic.css";

export default function IIC() {
  let [iicData, setIICData] = useState([]);

  useEffect(() => {
    import("../../../DataCenter/subComponentsUpperData/iicData")
      .then((dats) => {
        setIICData(dats.default);
      });
  }, []);

  useEffect(() => {
    if (iicData.length === 0) return;

    let aboutP = document.getElementById("iicAboutPara");
    aboutP.innerHTML += iicData[0].about;

    let peopleDiv = document.getElementById("iicPeopleDiv");
    peopleDiv.innerHTML += iicData[0].members;
  }, [iicData]);

  return (
    <>
      <div className="iic-wrapper">
        <div className="iic-contents">
          <div className="iic-headingDiv">
            <h2 className="iic-heading">INSTITUTION'S INNOVATION COUNCIL</h2>
          </div>
          <div className="iic-body">
            <div className="iic-aboutDiv">
              <h2 className="iic-body-heading">ABOUT IIC</h2>
              <p id="iicAboutPara" className="iic-about-p"></p>
            </div>
            <div id="iicPeopleDiv" className="iic-people-div">
              <h2 className="iic-body-heading">PEOPLE</h2>
            </div>
            <div className="iic-calander-div">
              <h2 className="iic-body-heading">CALENDER</h2>
              <IICcalCard
                NAME={"IIC ACADEMIC CALENDER"}
                LINK={`https://data.skct.edu.in${iicData[0]?.calender}`}
              />
            </div>
            <div className="iic-events-div">
              <h2 className="iic-body-heading">EVENTS</h2>
              <ul className="iic-events-ul">
                {iicData.length > 0 &&
                  iicData[0].events.map((elem) => {
                    return (
                      <>
                        <IICCard2
                          NAME={elem.name}
                          LINK={`https://data.skct.edu.in${elem.pdf}`}
                        />
                      </>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function IICcalCard({ LINK, NAME }) {
  return (
    <>
      <div className="iicCalCard-wrapper">
        <a
          href={LINK}
          className="iicCalCard-linkWrapper"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="iicCalCard-body">
            <div className="iicCalCard-iconDiv">
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

function IICCard2({ LINK, NAME }) {
  return (
    <>
      <a href={LINK} className="iicCard2-a" target={"_blank"} rel="noreferrer">
        <li className="iicCard-li">{NAME}</li>
      </a>
    </>
  );
}

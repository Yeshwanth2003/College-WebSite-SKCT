import { useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import "./Style/acaCalander.css";

export default function AcademicsCalander({ calanderLink }) {
  let [calData, setCalData] = useState([]);

  useFetch(
    calanderLink !== undefined
      ? calanderLink
      : "https://data.skct.edu.in/calender/",
    ({ err, data }) => {
      setCalData(data);
    }
  );

  return (
    <>
      <div className="calender-wrapper">
        <div className="calender-content">
          <div className="calederHeader-div">
            <h2 className="calenderHeader-h2">ACADEMIC CALENDAR</h2>
          </div>
          <div className="calender-body">
            {calData.length > 0 &&
              calData.map((elem, index) => {
                return (
                  <>
                    <CalenderCard
                      LINK={`https://data.skct.edu.in${elem.pdf}`}
                      NAME={elem.name}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

function CalenderCard({ LINK, NAME }) {
  return (
    <>
      <div className="calenderCard-wrapper">
        <a
          href={LINK}
          className="calenderCard-linkWrapper"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="calenderCard-body">
            <div className="calenderCard-iconDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                width="50px"
                height="50px"
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

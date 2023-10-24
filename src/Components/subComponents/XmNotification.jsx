import "./Style/xmresult.css";
import { useState } from "react";
import useFetch from "../../CustomHooks/useFetch";

// haveUsed xmResults since similar

export default function XmResults() {
  let [xmResultData, setXmResultData] = useState([]);

  useFetch("https://data.skct.edu.in/notify/", ({ err, data }) => {
    setXmResultData(data);
  });

  return (
    <>
      <div className="xmresult-wrapper">
        <div className="xmresult-contentDiv">
          <div className="xmresult-headingDiv">
            <h2 className="xmresult-heading">NOTIFICATIONS</h2>
          </div>
          <div className="xmresult-body">
            <div className="xmreult-link-holder">
              {xmResultData.length !== 0 &&
                xmResultData.map((elem, index) => {
                  return (
                    <>
                      <XmResultsCard
                        NAME={elem.name}
                        LINK={elem.url}
                        key={index.toString()}
                      />
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function XmResultsCard({ NAME, LINK }) {
  console.log(LINK);
  return (
    <>
      <a
        href={LINK}
        target="_blank"
        rel="noreferrer"
        className="xmresultCard-link"
      >
        <div className="xmresultCard-contentDiv">
          <div className="xmresultcard-logoDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="blue"
            >
              <path fill="none" d="M24 24H0V0h24v24z" />
              <path d="M4.5 11h-2V9.75c0-.41-.34-.75-.75-.75S1 9.34 1 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C6 9.34 5.66 9 5.25 9s-.75.34-.75.75V11zm3.25-.5h.75v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S11.16 9 10.75 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75zm5.5 0H14v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S16.66 9 16.25 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75zM21.5 9H19c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h2c.83 0 1.5-.68 1.5-1.5v-1c0-.82-.67-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z" />
            </svg>
          </div>
          <div className="xmresultcard-pDiv">
            <p style={{ color: "blue" }} className="xmresult-card-p">
              {NAME}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

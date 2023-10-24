import { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import "./Style/eventDese.css";

export default function EventDesc({ externalPageEID }) {
  let eventId =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  let [thisData, setThisData] = useState(null);

  useFetch(
    `https://data.skct.edu.in/events/${
      externalPageEID ? externalPageEID : eventId
    }/`,
    ({ err, data }) => {
      setThisData(data);
    }
  );

  return (
    <>
      <div className="eventDesc-wrapper">
        <div className="eventDesc-container">
          <div className="eventDesc-headingDiv">
            <h1 className="eventDesc-heading">{thisData?.name}</h1>
          </div>
          <div className="eventDesc-body">
            <div className="eventDesc-contentDiv">
              <div className="eventDesc-imgDiv">
                <img
                  src={`https://data.skct.edu.in${thisData?.image}`}
                  alt=""
                  className="eventDesc-img"
                />
              </div>
              <div className="eventDesc-contentWrapper">
                <p className="eventDesc-date">
                  DATE :- {new Date(thisData?.date).toLocaleDateString()}
                </p>
                {thisData !== null &&
                  thisData.description.split("\r\n").map((elem) => {
                    return (
                      <>
                        <p className="eventDesc-descP">{elem}</p>
                      </>
                    );
                  })}
                <div className="eventDesc-buttonDiv">
                  {thisData?.file?.length > 0 && (
                    <a
                      href={`https://data.skct.edu.in${thisData?.file}`}
                      className="eventDesc-button"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <button className="eventDesc-button">
                        Download File
                      </button>
                    </a>
                  )}
                  {thisData?.image?.length > 0 && (
                    <a
                      href={`https://data.skct.edu.in${thisData?.image}`}
                      className="eventDesc-button"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <button className="eventDesc-button">
                        Download Brochure
                      </button>
                    </a>
                  )}
                  {thisData?.url?.length > 0 && (
                    <a
                      href={`${thisData?.url}`}
                      className="eventDesc-button"
                      rel="noreferrer"
                      target={"_blank"}
                    >
                      <button className="eventDesc-button">Go to Link</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

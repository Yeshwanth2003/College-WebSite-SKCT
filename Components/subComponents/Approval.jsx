import { useEffect, useState } from "react";
import "./Style/approval.css";

export default function Approval() {
  let [approvalData, setAppovalData] = useState([]);

  useEffect(() => {
    fetch("https://data.skct.edu.in/approvals")
      .then((res) => res.json())
      .then((dats) => {
        createJSON(dats);
      });

    function createJSON(data) {
      let keys = [
        "Anna University",
        "NAAC",
        "NBA",
        "NIRF",
        "AICTE",
        "UGC",
        "Atal",
      ];
      let finalData = [];

      for (let i of keys) {
        let oneObj = {
          title: i,
          img: null,
          credits: [],
        };

        data.forEach((element) => {
          if (!element.name.includes(i)) return;

          if (!oneObj.img) {
            oneObj.img = element.logo;
          }

          oneObj.credits.push(element.name);
        });
        finalData.push(oneObj);
      }
      setAppovalData(finalData);
    }
  }, []);

  return (
    <>
      <div className="approval-wrapper">
        <div className="approval-contentDiv">
          <div className="approval-headingDiv">
            <h2 className="approval-h2">APPROVALS RANKING AND ACCREDITATION</h2>
          </div>
          <div className="approval-body">
            <ul className="approval-ul">
              {approvalData.map((elem) => {
                return (
                  <>
                    <ApprovalCard
                      credits={elem.credits}
                      img={elem.img}
                      title={elem.title}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function ApprovalCard({ title, img, credits }) {
  return (
    <>
      <label htmlFor={`input${title}`} className="apcard-lable">
        <input type="checkbox" id={`input${title}`} className="apcard-input"/>
        <li className="apcard-li">
          <div className="apcard-wrapper">
            <div className="apcard-info-div">
              <img
                src={`https://data.skct.edu.in${img}`}
                alt=""
                className="apcard-img"
              />
              <h3 className="apcard-heading">{title}</h3>
            </div>
            <div className="apcard-list-div">
              <ul className="apcard-list-ul">
                {credits.map((elem) => {
                  return (
                    <>
                      <li className="apcard-list-li">{elem}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>
      </label>
    </>
  );
}

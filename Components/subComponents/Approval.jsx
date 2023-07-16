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

          oneObj.credits.push({
            name: element.name,
            link: `https://data.skct.edu.in${element.pdf}`,
          });
        });
        finalData.push(oneObj);
      }
      setAppovalData(finalData);
    }
  }, []);

  useEffect(() => {
    console.log(approvalData);
  }, [approvalData]);

  return (
    <>
      <div className="approval-wrapper">
        <div className="approval-contentDiv">
          <div className="approval-headingDiv">
            <h2 className="approval-h2">APPROVALS RANKING AND ACCREDITATION</h2>
          </div>
          <div className="approval-body">
            <div className="approval-body-inner">
              {approvalData.map((elem,index) => {
                return (
                  <>
                    <ApprovalCard
                      credits={elem.credits}
                      img={elem.img}
                      title={elem.title}
                      index={index}
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

function ApprovalCard({ title, img, credits,index }) {
  return (
    <>
      <div class="apcard-wrapper">
        <input type="checkbox" id={`apcardInfoInput${index}`} class="apcard-info-input" />
        <label htmlFor={`apcardInfoInput${index}`} class="apcard-interlable">
          <div class="apcard-inter">
            <div class="apcard-img-wrapper">
              <img
                src={`https://data.skct.edu.in${img}`}
                alt=""
                class="apcard-img"
              />
            </div>
            <div class="apcard-title-wrapper">
              <h3 class="apcard-h3">
                {title}
              </h3>
            </div>
          </div>
        </label>
        <div class="apcard-body">
          <ul class="apcard-ul">
            {
              credits.map(elem=>{
                return(
                  <>
                  <a href={elem.link} className="apcard-link" target={"_blank"} rel="noreferrer">
                    <li className="apcard-li">
                      {elem.name}
                    </li>
                  </a>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  );
}

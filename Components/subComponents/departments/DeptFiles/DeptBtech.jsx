import { useEffect, useState } from "react";
import "./Style/deptBE.css";

export default function DeptBe({ currentDepartment }) {
  let [btechData, setBtechData] = useState([]);

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/btech`)
      .then((res) => res.json())
      .then((dats) => {
        setBtechData(dats.btech.split("\r\n"));
      });
  }, [currentDepartment]);

  return (
    <>
      <div className="deptBe-wrap">
        <div className="deptBe-container">
          <div className="deptBe-headingdiv">
            <h2 className="deptBe-heading">B.TECH PROGRAM</h2>
          </div>
          <div className="deptBe-body">
            {btechData.map((elem) => {
              return (
                <>
                  <p className="deptBe-para">
                    {elem
                      .replaceAll("<ul>", "")
                      .replaceAll("</ul>", "")
                      .replaceAll("<li>", "")
                      .replaceAll("</li>", "")
                      .replaceAll("<br>", "")
                      .replaceAll("<b>", "")
                      .replaceAll("</b>", "")
                      .replaceAll("</br>", "")

                      }
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

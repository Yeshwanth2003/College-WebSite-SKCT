import { useEffect, useState } from "react";
import "./Style/deptBE.css";

export default function DeptBe({ currentDepartment }) {
  let [btechData, setBtechData] = useState([]);

  useEffect(() => {
    import(`../../../../DataCenter/DepartmentsData/${currentDepartment}/btechData`)
      .then((res) => res.default)
      .then((dats) => {
        setBtechData(dats.btech.split("\r\n"));
      })
      .catch(()=>{
        window.location.pathname=`/departments/${currentDepartment}/home`
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

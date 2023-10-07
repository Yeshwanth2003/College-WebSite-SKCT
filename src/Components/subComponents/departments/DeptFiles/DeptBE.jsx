import { useEffect, useState } from "react";
import "./Style/deptBE.css";

export default function DeptBe({ currentDepartment }) {
  let [beData, setBeData] = useState([]);

  useEffect(() => {
    import(`../../../../DataCenter/DepartmentsData/${currentDepartment}/beData`)
      .then((res) => res.default)
      .then((dats) => {
        setBeData(dats.beprogram.split("\r\n"));
      })
      .catch(err=>{
        window.location.pathname=`/departments/${currentDepartment}/home`
      });
  }, [currentDepartment]);

  return (
    <>
      <div className="deptBe-wrap">
        <div className="deptBe-container">
          <div className="deptBe-headingdiv">
            <h2 className="deptBe-heading">B.E PROGRAM</h2>
          </div>
          <div className="deptBe-body">
            {beData.map((elem) => {
              return (
                <>
                  <p className="deptBe-para">
                    {elem
                      .replaceAll("<ul>", "")
                      .replaceAll("</ul>", "")
                      .replaceAll("<li>", "")
                      .replaceAll("</li>","")
                      .replaceAll("<br>","")
                      .replaceAll("<b>","")
                      .replaceAll("</b>","")
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

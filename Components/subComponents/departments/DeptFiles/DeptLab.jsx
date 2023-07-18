import { useEffect, useState } from "react";
import "./Style/deptLab.css";

export default function DeptLab({ currentDepartment }) {
  let [labData, setLabData] = useState([]);

  useEffect(() => {
      import(`../../../../DataCenter/DepartmentsData/${currentDepartment}/Lab/labData`)
      .then(res=>res.default)
      .then((dats) => {
        setLabData(dats);
      });
  }, [currentDepartment]);

  useEffect(() => {
    let clubCardParz = document.querySelectorAll("#labCardPara");
    if (clubCardParz.length === 0) return;
    labData.forEach((elem, index) => {
      clubCardParz[index].innerHTML += elem.description;
    });
  }, [labData]);

  return (
    <>
      <div className="deptlab-wrapper">
        <div className="deptLab-container">
          <div className="deptLab-headingDiv">
            <h2 className="deptLab-heading">LAB</h2>
          </div>
          <div className="deptLab-body">
            {labData.length > 0 &&
              labData.map((elem) => {
                return (
                  <>
                    <LabCard
                      name={elem.name}
                      img1={`https://data.skct.edu.in${elem.image}`}
                      img2={
                        elem.img2.length > 0
                          ? `https://data.skct.edu.in${elem.img2}`
                          : ""
                      }
                      img3={
                        elem.img3.length > 0
                          ? `https://data.skct.edu.in${elem.img3}`
                          : ""
                      }
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

function LabCard({ name, img1, img2, img3 }) {
  return (
    <>
      <div className="labCard-wrapper">
        <details className="labCard-details" >
          <summary className="labCard-summary"><h3 className="labCard-summary-h3">{name}</h3></summary>
          <div className="labCard-body">
            <div className="labCard-imgHolder">
              <div className="labCard-imgDiv">
                <img src={img1} alt="" className="labCard-img" />
              </div>
              {img2.length > 0 && (
                <div className="labCard-imgDiv">
                  <img src={img2} alt="" className="labCard-img" />
                </div>
              )}
              {img3.length > 0 && (
                <div className="labCard-imgDiv">
                  <img src={img3} alt="" className="labCard-img" />
                </div>
              )}
            </div>
            <div className="labCard-contentDiv">
              <p id="labCardPara" className="labCard-p"></p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}

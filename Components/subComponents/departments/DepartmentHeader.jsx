import { useEffect, useState } from "react";
import "./Style/departmentHeader.css";

export default function DepartmentHeader({ DataMapper }) {
  let [headerData, setHeaderData] = useState([]);
  let [thisDeptData, setThisDeptData] = useState([]);

  useEffect(() => {
    let currentDepartment = window.location.pathname.split("/")[2];
    let currentDepartmentData = DataMapper.filter((elem) => {
      return elem.key.toLowerCase() === currentDepartment.toLowerCase();
    });
    setHeaderData(currentDepartmentData[0]["headers"]);
    setThisDeptData(currentDepartmentData);
  }, [DataMapper]);

  return (
    <>
      <div className="depHeader-wrapper">
        <div className="depHeader-headingDiv">
          {thisDeptData.length > 0 &&
            (() => {
              return (
                <>
                  <h2 className="deptHeader-h3">
                    {thisDeptData[0].departmentName}
                  </h2>
                </>
              );
            })()}
        </div>
        <div className="deptHeader-body">
          <ul className="deptHeader-ul">
            {headerData.length > 0 &&
              headerData.map((elem) => {
                return <DepartmentHeaderCardGenerator curLst={elem} />;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

function DepartmentHeaderCardGenerator({ curLst }) {
  return (
    <>
      <li className="dptheaderCardGen-li">
        {curLst.subHeaders.length === 0 ? (
          <DepartmentHeaderC1 obj={curLst} />
        ) : (
          <DepartmentHeaderC2 obj={curLst} />
        )}
      </li>
    </>
  );
}

function DepartmentHeaderC1({ obj }) {
  return (
    <>
      <a href={obj.url} className="deptHeaderc1-link">
        <div className="deptHeaderc1-linkWrapper">
          <div className="deptHeaderc1-iconDiv">
            <i className="material-icons deptHeaderc1-icon">{obj.icon}</i>
          </div>
          <div className="deptHeaderc1-nameDiv">
            <p className="deptHeaderc1-pz">{obj.name}</p>
          </div>
        </div>
      </a>
    </>
  );
}
function DepartmentHeaderC2({ obj }) {
  return (
    <>
      <div className="deptHeaderc2-dpHolder">
        <label>
          <input
            id={`deptHeaderc2Input${obj.name}`}
            type="checkbox"
            className="deptHeaderc2-input"
          />
          <DepartmentHeaderC3 obj={obj} />
        </label>
        <div
          id="deptHeaderDropDownDiv"
          className="deptHeaderc2-dropDownDiv-wrapper"
        >
          <ul className="deptHeaderc2-ul">
            {obj.subHeaders.map((elem) => {
              return (
                <>
                  <DepartmentHeaderC1 obj={elem} />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
function DepartmentHeaderC3({ obj }) {
  return (
    <>
      <div className="deptHeaderc1-linkWrapper">
        <div className="deptHeaderc1-iconDiv">
          <i className="material-icons deptHeaderc1-icon">{obj.icon}</i>
        </div>
        <div className="deptHeaderc1-nameDiv deptHeaderc3-droper">
          <p className="deptHeaderc1-pz">{obj.name}</p>
        </div>
      </div>
    </>
  );
}

import './Style/deptBE.css'
import { useEffect, useState } from 'react';

export default function DeptME({currentDepartment}){

     let[phdData,setPhdData] = useState([]);

     useEffect(() => {
          import(`../../../../DataCenter/DepartmentsData/${currentDepartment}/phdData`)
            .then((res) => res.default)
            .then((dats) => {
              setPhdData(dats.phd.split("\r\n"));
            })
            .catch(()=>{
              window.location.pathname=`/departments/${currentDepartment}/home`
            });
        }, [currentDepartment]);

     return(
          <>
         <div className="deptBe-wrap">
        <div className="deptBe-container">
          <div className="deptBe-headingdiv">
            <h2 className="deptBe-heading">PH.D PROGRAM</h2>
          </div>
          <div className="deptBe-body">
            {phdData.map((elem) => {
              return (
                <>
                  <p className="deptBe-para">
                    {elem.replaceAll("<br>","").replaceAll("<b>","").replaceAll("</b>","")}
                    </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
          </>
     )
}
import './Style/deptBE.css'
import { useEffect, useState } from 'react';

export default function DeptME({currentDepartment}){

     let[phdData,setPhdData] = useState([]);

     useEffect(() => {
          fetch(`https://data.skct.edu.in/${currentDepartment}/phdprogram/`)
            .then((res) => res.json())
            .then((dats) => {
              setPhdData(dats.phd.split("\r\n"));
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
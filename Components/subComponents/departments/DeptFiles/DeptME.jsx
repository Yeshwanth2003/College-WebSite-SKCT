import './Style/deptBE.css'
import { useEffect, useState } from 'react';

export default function DeptME({currentDepartment}){

     let[meData,setMeData] = useState([]);

     useEffect(() => {
          fetch(`https://data.skct.edu.in/${currentDepartment}/meprogram`)
            .then((res) => res.json())
            .then((dats) => {
              setMeData(dats.meprogram.split("\r\n"));
            });
        }, [currentDepartment]);

     return(
          <>
         <div className="deptBe-wrap">
        <div className="deptBe-container">
          <div className="deptBe-headingdiv">
            <h2 className="deptBe-heading">M.E PROGRAM</h2>
          </div>
          <div className="deptBe-body">
            {meData.map((elem) => {
              return (
                <>
                  <p className="deptBe-para">{elem}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
          </>
     )
}
import { useEffect, useState } from 'react'
import './Style/deptBOstudent.css'

export default function DeptBOStudent({currentDepartment}){

     let[BOSData,setBOSData]=useState([]);

     useEffect(()=>{
          fetch(`https://data.skct.edu.in/${currentDepartment}/beststud/`)
          .then(res=>res.json())
          .then(dats=>{
               setBOSData(dats);
          })
     },[currentDepartment])

     return(
          <>
          <div className="deptBos-wrapper">
               <div className="deptBos-container">
                    <div className="deptBos-headingDiv">
                         <h2 className="deptBos-heading">{currentDepartment}-BEST OUTGOING STUDENTS</h2>
                    </div>
                    <div className="deptBos-body">
                         <table className="deptBos-table">
                              <thead className="deptBos-thead">
                                   <tr className="deptBos-tr">
                                        <td className="deptBos-td">S.NO</td>
                                        <td className="deptBos-td">Name</td>
                                        <td className="deptBos-td">Batch/Year</td>
                                   </tr>
                              </thead>
                              <tbody className="deptBos-tbody">
                                   {
                                        BOSData.length >0 &&
                                        BOSData.map((elem,index)=>{
                                             return(
                                                  <>
                                                  <BOSCard index={index+1} name={elem.name} year={elem.batch}/>
                                                  </>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
          </>
     )
}

function BOSCard({index,name,year}){
     return(
          <>
            <tr className="bosCard-tr">
               <td className="bosCard-td">{index}</td>
               <td className="bosCard-td">{name}</td>
               <td className="bosCard-td">{year}</td>
            </tr>
          </>
     )
}
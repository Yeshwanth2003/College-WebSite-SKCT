import { useEffect, useState } from 'react'
import './Style/proffessionalAsso.css'

export default function ProffAsso(){

     let [proffassoData,setProffassoData] = useState([]);

     useEffect(()=>{

          import("../../DataCenter/subComponentsData/AcademicsData/proffessionalAsso")
          .then(res=>res.default)
          .then(dats=>{
               dats.sort((a,b)=>Number(b.year)-Number(a.year))
               setProffassoData(dats)
          })
     },[])

     return(
          <>
          <div className="proffasso-wrapper">
               <div className="proffasso-content">
                    <div className="proffasso-headingDiv">
                         <h2 className="proffasso-h2">PROFESSIONAL ASSOCIATION</h2>
                    </div>
                    <div className="proffasso-body">
                         <table className="proffasso-table">
                                   <thead className="proffasso-thead">
                                        <tr className="proffasso-headRow">
                                             <td className="proffasso-headData">S.NO</td>
                                             <td className="proffasso-headData">Name Of Association</td>
                                             <td className="proffasso-headData">Year</td>
                                             <td className="proffasso-headData">Activity</td>
                                        </tr>
                                   </thead>
                                   <tbody className="proffasso-tbody">
                                       {
                                         proffassoData.length>0&&
                                         proffassoData.map((elem,index)=>{
                                             return(
                                                  <>
                                                  <ProffAssoCard INDEX={index+1} NAME={elem.association} YEAR={elem.year} ACTIVITY={elem.activity}/>
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

function ProffAssoCard({INDEX,NAME,YEAR,ACTIVITY}){
     return(
          <>
           <tr className="proffCard-tbody-row">
               <td className="proffCard-tbody-data">{INDEX}</td>
               <td className="proffCard-tbody-data">{NAME}</td>
               <td className="proffCard-tbody-data">{YEAR}</td>
               <td className="proffCard-tbody-data">{ACTIVITY}</td>
           </tr>
          </>
     )
}
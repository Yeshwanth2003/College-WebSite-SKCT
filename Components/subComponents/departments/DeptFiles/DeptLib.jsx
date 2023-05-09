import { useEffect, useState } from 'react'
import './Style/deptLib.css'

export default function DeptLib({currentDepartment}){

     let [libCover,setLibCover] = useState("");
     let [libData,setLibData] = useState("");

     useEffect(()=>{
       fetch(`https://data.skct.edu.in/${currentDepartment}/library/`)
       .then(res=>res.json())
       .then(dats=>{
          console.log(dats);
          setLibCover(`https://data.skct.edu.in${dats[0].img}`);
          setLibData(dats[0].desc)
       })
     },[currentDepartment])

     useEffect(()=>{
         document.querySelector("#deptLibDataContainerPara").innerHTML=libData
     },[libData])

return(
     <>
     <div className="deptLib-wrapper">
        <div className="deptLib-coverDiv">
          <img src={libCover} alt="" className="deptLib-coverImg" />
        </div>
        <div className="deptLib-contents">
          <div className="deptLib-headingDiv">
               <h2 className="deptLib-heading">DEPARTMENT LIBRARY</h2>
          </div>
          <div className="deptLib-body">
               <p id='deptLibDataContainerPara' className="deptLib-p-Container"></p>
          </div>
        </div>
     </div>
     </>
)
}
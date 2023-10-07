import './Style/deptFooter.css'
import { useEffect,useState } from 'react'

export default function DeptFooter(){

     let[hodName,setHodName] = useState("")
     let[hodEmail,setHodEmail]=useState("")
     let[hodNum,setHodNum]=useState("")

     useEffect(() => {
          let currentDepartment = window.location.pathname.split("/")[2];
          if(!currentDepartment){
               window.location.pathname="/"
               return;
             }
          import(`../../../DataCenter/DepartmentsData/${currentDepartment}/hod/hodData`)
          .then(res=>res.default)
          .then(dats=>{
               setHodName(dats.name)
               setHodEmail(dats.email)
               setHodNum(dats.phone_num)
          })
        }, []);

     return(
          <>
          <div className="deptFooter-wrapper">
               <div className="deptFooter-contentDiv">
                 <h2 className="deptFooter-cons">HEAD OF THE DEPARTMENT</h2>
                 <h3 className="deptFooter-cons">{hodName}</h3>
                 <br />
                 <br />
                 <h4 className="deptFooter-cons">{`EMAIL: ${hodEmail}`}</h4>
                 <h4 className="deptFooter-cons">{`PHONE: ${hodNum}`}</h4>
               </div>
               <div className="deptFooter-cpyDiv">
               <h4 className="deptFooter-cons">Copyright © 2021 SKCT</h4>
               </div>
          </div>
          </>
     )
}
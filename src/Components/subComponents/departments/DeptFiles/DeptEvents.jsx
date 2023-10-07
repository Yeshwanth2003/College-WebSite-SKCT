import { useEffect, useState } from 'react'
import './Style/deptEvents.css'

export default function DeptEvents({currentDepartment}) {

     let [deptEvents,setDeptEvents] = useState([]);

     useEffect(()=>{
      fetch(`https://data.skct.edu.in/${currentDepartment}/events/`)
      .then(res=>res.json())
      .then(dats=>{
          setDeptEvents(dats)
      })
     },[currentDepartment])

     return(
          <>
          <div className="deptEvents-wrapper">
               <div className="deptEvents-container">
                    <div className="deptEvents-headingDiv">
                         <h1 className="deptEvents-heading">Events</h1>
                    </div>
                    <div className="deptHeading-body">
                         {
                              deptEvents.length>0&&
                              deptEvents.map((elem,index)=>{
                                   return(
                                        <>
                                        <DeptEventCard name={elem.name} date={elem.date} url={`/departments/${currentDepartment}/events/${elem.pk}`} img={`https://data.skct.edu.in${elem.image}`}/>
                                        </>
                                   )
                              })
                         }
                    </div>
               </div>
          </div>
          </>
     )
}

function DeptEventCard({img,url,name,date}) {
     return(
          <>
          <div className="deptEveC-wrapper">
             <div className="deptEveC-imgDiv">
               <img src={img} alt="" className="deptEveC-img" />
             </div>
             <div className="deptEveC-contents">
               <h2 className="deptEveC-h2">
                    <a href={url} className="deptEveC-a">
                         {name}
                    </a>
               </h2>
               <p className="deptEveC-p">
                    {new Date(date).toLocaleDateString()}
               </p>
             </div>
          </div>
          </>
     )
}
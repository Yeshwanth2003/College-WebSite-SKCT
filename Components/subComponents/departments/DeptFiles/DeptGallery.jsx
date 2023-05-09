import { useEffect, useState } from 'react'
import './Style/deptGallery.css'

export default function DeptGallery({currentDepartment}){

     let [gallaryData,setGallaryData] = useState([]);

     useEffect(()=>{
       fetch(`https://data.skct.edu.in/${currentDepartment}/gallery/`)
       .then(res=>res.json())
       .then(dats=>{
          setGallaryData(dats)
       })
     },[currentDepartment])

     return(
          <>
          <div className="deptG-wrapper">
               <div className="deptG-contents">
                    <div className="deptG-headingDiv">
                         <h2 className="deptG-heading">GALLERY</h2>
                    </div>
                    <div className="deptG-body">
                         {
                              gallaryData.length>0 &&
                              gallaryData.map((elem)=>{
                                   return(
                                        <>
                                        <DeptGalleryCard img={`https://data.skct.edu.in${elem.url}`} name={elem.tip}/>
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

function DeptGalleryCard({img,name}){
 return(
     <>
     <div className="dGCard-wrapper">
          <img src={img} alt="" className="dGCard-img" />
          <div className="dGCard-tipHolder">
               <p className="dGCard-tip">{name}</p>
          </div>
     </div>
     </>
 )
}
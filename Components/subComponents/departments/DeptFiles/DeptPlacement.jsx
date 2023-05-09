import { useEffect, useState } from 'react'
import './Style/deptPlacement.css'

export default function DeptPlacement({currentDepartment}){

     let[placementData,setPlacementData] = useState({});

     useEffect(()=>{
        fetch(`https://data.skct.edu.in/${currentDepartment}/placement/`)
        .then(res=>res.json())
        .then(dats=>{
          setPlacementData(dats)
        })
     },[currentDepartment])

     return(
          <>
          <div className="deptPlace-wrapper">
               <div className="deptPlace-container">
                    <div className="deptPlace-headingDiv">
                         <h2 className="deptPlace-heading">PLACEMENT STATISTICS</h2>
                    </div>
                    <div className="deptPlace-body">
                         {
                           placementData?.placement?.length>0 &&
                           placementData.placement.map((elem)=>{
                              return(
                                   <>
                                   <PlaceCard1 link={`https://data.skct.edu.in${elem.pdf}`} name={elem.name}/>
                                   </>
                              )
                           })
                         }
                    </div>
                    <div className="deptPlace-headingDiv">
                         <h2 className="deptPlace-heading">OUR RECRUITERS</h2>
                    </div>
                    <div className="deptPlace-body deptPlace-body2">
                         {
                          placementData?.rec?.length>0 &&
                          placementData.rec.map((elem)=>{
                               return(
                                   <>
                                   <PlaceCard2 link={`https://data.skct.edu.in${elem.img}`}/>
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
function PlaceCard1({name,link}){
 return(
     <>
     <a href={link} className="placeC1-link" target={'_blank'} rel="noreferrer">
          <div className="placeC1-container">
               <div className="placeC1-symbolDiv">
                    <span className="placeC1-span">&#8594;</span>
               </div>
               <div className="placeC1-nameDiv">
                    <p className="placeC1-p">
                     PLACED STUDENT IN THE YEAR OF - {name}
                    </p>
               </div>
          </div>
     </a>
     </>
 )
}
function PlaceCard2({link}){
   return(
     <>
     <div className="placeCard2-wrapper">
          <img src={link} alt="" className="placeCard2-img" />
     </div>
     </>
   )
}
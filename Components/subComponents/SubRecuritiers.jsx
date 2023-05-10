import { useState,useEffect } from 'react'
import './Style/subrecuritiers.css'

export default function SubRecuritiers(){

     let [sRData,setSRData] = useState([]);

     useEffect(()=>{
          fetch("https://data.skct.edu.in/homeone/")
          .then(res=>res.json())
          .then(dats=>{
               setSRData(dats.rec)
          })
     })

     return(
          <>
          <div className="rec-wrapper">
               <div className="rec-contents">
                    <div className="rec-headingDiv">
                         <h2 className="rec-h2">RECRUITERS</h2>
                    </div>
                    <div className="rec-body">
                         <div className="rec-main">
                              <div className="rec-main-headingDiv">
                                  <h4 className="rec-h3">OUR LEADING RECRUITERS</h4>
                              </div>
                              <div className="rec-main-body">
                                   {
                                        sRData.length>0 &&
                                        sRData.map((elem)=>{
                                             return(
                                                  <>
                                                  <RecCard link={`https://data.skct.edu.in/${elem.img}`}/>
                                                  </>
                                             )
                                        })
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          </>
     )
}

function RecCard({link}){
   return(
     <>
     <div className="rec-img-div">
          <img src={link} alt="" className="rec-img" />
     </div>
     </>
   )
}
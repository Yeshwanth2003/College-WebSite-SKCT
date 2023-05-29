import { useEffect, useState } from 'react';
import './Style/regulations.css';

export default function Regulations(){

     let [regData,setRegData] = useState([]);

     useEffect(()=>{
        import("../../DataCenter/subComponentsData/XamDatas/xmRegulations")
        .then(res=>res.default)
        .then(dats=>{
          setRegData(dats)
        })
     },[])

     return(
          <>
          <div className="reg-wrapper">
               <div className="reg-container">
                      <div className="reg-headingDiv">
                         <h1 className="reg-heading">Regulations</h1>
                      </div>
                      <div className="reg-body">
                         {
                              regData.length>0 &&
                              regData.map((elem)=>{
                                   return(
                                        <>
                                        <RegTemp Data={elem} />
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
function RegTemp({Data}){
       return(
          <>
          <div className="regTemp-wrapper">
               <div className="regTemp-headingDiv">
                    {Data.title}
               </div>
               <div className="regTemp-elems">
                    {
                         Data.depts.map((elem)=>{
                              return(
                                   <>
                                   <a href={`https://data.skct.edu.in${elem.pdf}`} className="regTemp-link" target={"_blank"} rel={"noreferrer"}>
                                        <div className="regTemp-linkDiv">
                                             {elem.name}
                                        </div>
                                   </a>
                                   </>
                              )
                         })
                    }
               </div>
          </div>
          </>
       )
}
import { useEffect, useState } from 'react'
import './Style/approval.css'

export default function Approval(){

     let [approvalData,setAppovalData] = useState([]);

     useEffect(()=>{
      fetch("https://data.skct.edu.in/approvals")
      .then(res=>res.json())
      .then(dats=>{
           setAppovalData(dats)
      })
     },[])

    return (
     <>
       <div className="approval-wrapper">
          <div className="approval-contentDiv">
               <div className="approval-headingDiv">
                    <h2 className="approval-h2">
                    APPROVALS RANKING AND ACCREDITATION
                    </h2>
               </div>
               <div className="approval-body">
                    <ul className="approval-ul">
                    {
                         approvalData.length!==0 &&
                         approvalData.map((elem,index)=>{
                               return(
                                   <>
                                   <ApprovalCard ImgDiv={`https://data.skct.edu.in${elem.logo}`} Name={elem.name} PdfLink={`https://data.skct.edu.in${elem.pdf}`} key={index.toString()}/>
                                   </>
                               )
                         })
                    }
                    </ul>
               </div>
          </div>
       </div>
     </>
    )
}

function ApprovalCard({PdfLink,ImgDiv,Name}){
     return(
          <>
          <li className="approval-li">
               <a href={PdfLink} className="approval-links">
                  <div className="approval-linkDiv">
                    <div className="approval-linkImg-div">
                    <img src={ImgDiv} alt="" className="approvalLink-img" />
                    </div>
                    <div className='approval-linkText-div'> 
                       <p className="approval-linkText">
                         {Name}
                       </p>
                    </div>
                  </div>
               </a>
          </li>
          </>
     )
}
import { useEffect, useState } from "react"
import './Style/pdfViewer.css'

export default function PDFViewer({link}){

     let [PDF,setPDF] = useState(null);

     useEffect(()=>{
         
       import(`../DataCenter/CommonPDF/${link}`)
       .then(res=>{
          setPDF(res.default)
       })
     },[link])

     return(
          <>
          <embed type="application/pdf" src={PDF}></embed>
          </>
     )
}
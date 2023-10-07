import { useEffect } from 'react'
import './styles/aboutus.css'

export default function AboutUs(){
     useEffect(()=>{
       import("../../../DataCenter/subComponentsData/Research/AcademicResearch/aboutus")
       .then(res=>res.default)
       .then((dats)=>{
          let wrapper = document.getElementById("arAboutWrapper");
          wrapper.innerHTML+=dats.content;
       })    
     })
     return(
          <>
          <div id='arAboutWrapper' className="ar-aboutus-wrapper">

          </div>
          </>
     )
}
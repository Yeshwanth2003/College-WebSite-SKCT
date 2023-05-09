import { useEffect, useState } from 'react'
import './Style/cgallery.css'

export default function CGallery(){

     let [galleryData,setGalleryData] = useState([]);

     useEffect(()=>{
          fetch("https://data.skct.edu.in/cgallery/")
          .then(res=>res.json())
          .then(dats=>{
               setGalleryData(dats)
          })
     },[])

     return(
          <>
           <div className="cgallery-wrapper">
               <div className="cgallery-container">
                    <div className="cgallery-headingDiv">
                         <h2 className="cgallery-h2">GALLERY</h2>
                    </div>
                    <div className="cgallery-body">
                       {
                         galleryData.length >0 && 
                         galleryData.map((elem)=>{
                              return(
                                   <>
                                   <GalleryCard link={`https://data.skct.edu.in${elem.img}`}/>
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

function GalleryCard({link}){
     return(
          <>
          <div className="cgallery-imgDiv">
               <img src={link} alt="" className="cgallery-img" />
          </div>
          </>
     )
}
import { useEffect, useState } from 'react'
import './Style/skctMedia.css'

export default function SKCTMedia(){

     let[mediaData,setMediaData] = useState([]);

     useEffect(()=>{
          fetch("https://data.skct.edu.in/skm/")
          .then(res=>res.json())
          .then(dats=>{
            setMediaData(dats)
          })
     },[])

     return(
          <>
          <div className="skctmedia-wrapper">
               <div className="skctmedia-contentdiv">
                    <div className="skctmedia-headerDiv">
                         <h2 className='skctmedia-h2'>SKCT IN MEDIA</h2>
                    </div>
                    <div className="skctmedia-body">
                         <div className="skctmedia-bodyNav">
                              <a  href="https://drive.google.com/open?id=1NQGGNUKR4JLGZky1WIpySurq68VFZZu5" className="skctmedia-driverLink">More....</a>
                         </div>
                         <div className="skctmedia-actBody">
                         <div className="skctmedia-actBody-inner">
                              {
                                   mediaData.length!==0 && 
                                   mediaData.reverse().map((elem,index)=>{
                                        return(
                                             <>
                                             <MediaCard IMG={`https://data.skct.edu.in${elem.img}`} TEXT={elem.des}/>
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
function MediaCard({IMG,TEXT}){
   return(
     <>
     <div className="mediaCard-wrapper">
          <div className="mediaCard-imgDiv">
            <img src={IMG} alt="" className="mediaCard-img" />
          </div>
          <div className="mediaCard-textDiv">
               <p className="mediaCard-p">
                    {TEXT}
               </p>
          </div>
     </div>
     </>
   )
}
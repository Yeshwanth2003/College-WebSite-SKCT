import { useContext, useEffect, useState } from "react";
import ContextTag from "./ContextFile";
import "./Style/alumni.css";

export default function Alumni() {

     let {alumniData} = useContext(ContextTag);
  

     let [alumniLeftPos,setAlumniLeftPos] = useState(0)

     useEffect(()=>{
     let totalLength = alumniData.length*100;
     let timeOut = 
     setInterval(()=>{
       setAlumniLeftPos(preVal=>{
          if(preVal<totalLength)return preVal+=100;
          return 0
       })
     },4000)

     return (()=>{clearInterval(timeOut)})
     },[alumniData])

     function MoveAnnouncement(side) {
          let totalAnnouncementLength = alumniData.length * 100 - 100;
          if (side === "right") {
            setAlumniLeftPos((preVal) => {
              if (preVal < totalAnnouncementLength) {
                return (preVal += 100);
              }
              return 0;
            });
          } else {
            setAlumniLeftPos((preVal) => {
              if (preVal === 0) return totalAnnouncementLength;
              return (preVal -= 100);
            });
          }
        }

  return (
    <>
      <div className="alumni-holderDiv">
        <div className="alumni-headingDiv">
          <h2 className="mainHome-runner1-all-Heading">ALUMNI SPEAKS</h2>
        </div>
        <div className="alumni-runnerDiv">
          <div id="AlumniRunner" className="alumni-runner" style={{ width: `${alumniData.length*100}%`,left:`-${alumniLeftPos===(alumniData.length*100)?0:alumniLeftPos}%`}}>
            {
               alumniData.map((elem,index)=>{
                    return(
                         <>
                         <AlumniCard
                NAME={elem.name}
                PROFILE={`https://data.skct.edu.in${elem.img}`}
                DESC={elem.text}
              />
                         </>
                    )
               })
              
            }
          </div>
          <div className="alumni-moveRight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 700 700"
              className="alumni-move" 
              onClick={()=>{MoveAnnouncement("right")}}
              fill="white"
            >
              <g>
                <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
              </g>
            </svg>
          </div>
          <div className="alumni-moveLeft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 700 700"
              className="alumni-move"
              onClick={()=>{MoveAnnouncement("left")}}
              fill="white"
            >
              <g>
                <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

function AlumniCard({ NAME, PROFILE, DESC }) {
  return (
    <>
      <div className="alumniCard-wrapper">
        <div className="alumni-profileDiv">
          <div
            className="alumni-profile"
            style={{ backgroundImage: `url(${PROFILE})`, "--i": 0 }}
          ></div>
          <div className="alumni-nameDiv">
            <h3 className="alumni-name">{NAME}</h3>
          </div>
        </div>
        <div className="alumni-aboutDiv">
          <p className="alumni-about">{DESC}</p>
        </div>
      </div>
    </>
  );
}

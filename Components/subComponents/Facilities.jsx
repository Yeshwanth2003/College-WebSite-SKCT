import { useEffect, useState } from "react";
import "./Style/facilities.css";

export default function Facilities() {
  let [reelWidth, setReelWidth] = useState(0);
  let [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    fetch("https://data.skct.edu.in/facilities/")
      .then((res) => res.json())
      .then((dats) => {
        setFacilitiesData(dats);
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          // alert("you are on mobile")
          setReelWidth(100)
        }
        else{
          setReelWidth(dats.length*100)
        }
      });
  }, []);

  // Lap runner Controll

  useEffect(()=>{
     let navButtons=document.querySelectorAll("#facilityNavButton")
     navButtons.forEach((elem)=>{
      elem.addEventListener("click",(event)=>{
        let leftPos = event.target.getAttribute("number")
        let reel = document.querySelector("#facilitiesReel");
        reel.style.left=`-${leftPos*100}%`
      })
     })
    })

  return (
    <>
      <div className="facilities-wrapper">
        <div className="facilities-heading-div">
          <h1 className="facilities-heading">FACILITIES</h1>
        </div>
        <div className="facilities-body">
          <div className="facilities-lapNav">
            <ul className="facilities-lapNav-ul">
              {
                facilitiesData.length>0&&
                facilitiesData.map((elem,index)=>{
                  return(
                    <>
                    <FacilityNavCard NAME={elem.title} NUMBER={index} key={index.toString()}/>
                    </>
                  )
                })
              }
              </ul>
          </div>
          <div className="facilities-runner">
            <div className="facilities-runner-wrapper">
              <div
              id="facilitiesReel"
                className="facilities-reelDiv"
                style={{ width: `${reelWidth}%` }}
              >
                {
                  facilitiesData.length>0&&
                  facilitiesData.map((elem,index)=>{
                    return(
                      <>
                      <FacilityCard DESE={elem.description} NAME={elem.title} IMG={`https://data.skct.edu.in${elem.img[0].image}`} key={index.toString()} val={index}/>
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
  );
}

function FacilityCard({NAME,IMG,DESE}){
  return (
    <>
    <div className="facilityCard-wrapper">
      <div className="facilityCard-div1">
        <div className="facilityCard-headingDiv">
          <h2 className="facilityCard-heading">{NAME}</h2>
        </div>
        <div className="facilityCard-imgWrapper">
          <div className="facilityCard-imgDiv">
            <img src={IMG} alt="" className="facilityCard-img" />
          </div>
        </div>
      </div>
      <div className="facilityCard-div2">
        <p className="facilityCard-p">
          {DESE}
        </p>
      </div>
    </div>
    </>
  )
}
function FacilityNavCard({NAME,NUMBER}) {
   return(
    <>
    <li className="facilityNavCard-li">
      <div className="facilityNavCard-wrapper" >
        <div className="facilityNavCard-iconDiv"></div>
        <div className="facilityNavCard-textDiv">
          <h4 id="facilityNavButton" className="facilityNavCard-h3" number={`${NUMBER}`}>{NAME}</h4>
        </div>
      </div>
    </li>
    </>
   )
}
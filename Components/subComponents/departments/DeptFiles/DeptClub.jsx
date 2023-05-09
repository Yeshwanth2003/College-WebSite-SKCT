import { useEffect, useState } from "react";
import "./Style/deptClub.css";

export default function DeptClub({ currentDepartment }) {
  let [clubData, setClubData] = useState([]);

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/club`)
      .then((res) => res.json())
      .then((dats) => {
        setClubData(dats);
      });
  }, [currentDepartment]);

  useEffect(()=>{
   let clubCardParz = document.querySelectorAll("#clubCardPara");
   if(clubCardParz.length===0)return;
   clubData.forEach((elem,index)=>{
     clubCardParz[index].innerHTML+=elem.details
   })
  },[clubData])

  return (
    <>
      <div className="deptClub-wrapper">
        <div className="deptClub-container">
          <div className="deptClub-headingDiv">
            <h2 className="deptClub-heading">CLUB</h2>
          </div>
          <div className="deptClub-body">
            {clubData.length > 0 &&
              clubData.map((elem, index) => {
                return (
                  <>
                    <ClubCard
                      desc={elem.details}
                      img={`https://data.skct.edu.in${elem.photo}`}
                      name={elem.name}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

function ClubCard({ name, img }) {
  return (
    <>
      <div className="clubCard-wrapper">
        <details className="clubCard-details" open>
          <summary className="clubCard-summary"><h3 className="clubCard-summaryH1">{name}</h3></summary>
          <div className="clubCard-body">
            <div className="clubCard-imgDiv">
              <img src={img} alt="" className="clubCard-img" />
            </div>
            <div className="clubCard-pDiv">
              <p id="clubCardPara" className="clubCard-p"></p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}

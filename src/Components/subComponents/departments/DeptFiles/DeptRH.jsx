import { useEffect, useState } from "react";
import "./Style/deptRH.css";

export default function DeptRH({ currentDepartment }) {
  let [rhData, setRhData] = useState([]);

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/rh/`)
      .then((res) => res.json())
      .then((dats) => {
        setRhData(dats);
      });
  }, [currentDepartment]);

  return (
    <>
      <div className="deptrh-wrapper">
        <div className="deptrh-container">
          <div className="deptrh-headingDiv">
            <h2 className="deptrh-heading">RANK HOLDERS</h2>
          </div>
          <div className="deptrh-body">
            {rhData.length > 0 &&
              rhData.map((elem) => {
                return (
                  <>
                    <RankCard
                      name={elem.name}
                      img={`https://data.skct.edu.in${elem.img}`}
                      batch={elem.batch}
                      rank={elem.rank}
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


function RankCard({name,img,batch,rank}){
     return(
          <>
          <div className="rankcard-wrapper">
               <div className="rankcard-imgDiv">
                    <img src={img} alt="" className="rankCard-img" />
               </div>
               <div className="rankCard-contentDiv">
                    <h2 className="rankccard-name">{name}</h2>
                    <h4 className="rankcard-batch">{batch}</h4>
                    <h4 className="rankcard-rank">{rank}</h4>
               </div>
          </div>
          </>
     )
}
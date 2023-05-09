import { useEffect, useRef, useState } from "react";
import "./Style/deptAssociation.css";

export default function DeptAssociation({ currentDepartment }) {
  let [assoData, setAssoData] = useState([]);
  let [reelWidth, setReelWidth] = useState("0%");
  let MoveAnnouncement = useRef((side)=>{});
  let curLeft = useRef(0)

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/association/`)
      .then((res) => res.json())
      .then((dats) => {
        setAssoData(dats[0]);
        setReelWidth(`${dats[0]["images"].length * 100}%`);
      });
  }, [currentDepartment]);


  // Move Slide

  useEffect(()=>{
    MoveAnnouncement.current = (side)=>{
      let maxWidth = parseInt(reelWidth)
      let reel = document.querySelector("#AssoReel");
      if (side === "right") {
            if(curLeft.current <maxWidth-100){
                curLeft.current+=100;
            }
            else{
                curLeft.current=0
            }
           } else {
                if(curLeft.current >0){
                     curLeft.current-=100;
                }
                else{
                     curLeft.current=maxWidth-100
                }
           }
           reel.style.left = `-${curLeft.current}%`
  }
  },[reelWidth])

  return (
    <>
      <div className="deptAsso-wrapper">
        <div className="deptAsso-container">
          <div className="deptAsso-headingDiv">
            <h2 className="deptAsso-heading">
              {currentDepartment} ENGINEERING ASSOCIATION
            </h2>
          </div>
          <div className="deptAsso-body">
            <div className="deptAsso-runnerDiv">
              <div
                className="mainHome-runner1-part1-moveleft"
                onClick={() => MoveAnnouncement.current("left")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
                  version="1.1"
                  viewBox="0 0 700 700"
                  className="svg-move svg-trans"
                >
                  <g>
                    <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
                  </g>
                </svg>
              </div>
              <div
                className="mainHome-runner1-part1-moveright"
                onClick={() => MoveAnnouncement.current("right")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
                  version="1.1"
                  viewBox="0 0 700 700"
                  className="svg-move"
                >
                  <g>
                    <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
                  </g>
                </svg>
              </div>
              <div id="AssoReel" className="deptAsso-reel" style={{ width: reelWidth }}>
                {assoData !== null &&
                  assoData?.images?.map((elem, index) => {
                    return (
                      <>
                        <AssoCard2
                          img={`https://data.skct.edu.in${elem.img}`}
                          name={elem.des.split("\r")[0]}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="deptAsso-headingDiv">
            <h2 className="deptAsso-heading">MEMBER DETAILS</h2>
          </div>
          <div className="deptAsso-body">
            <div className="deptAsso-bodyContents">
              <h2 className="deptAsso-addheading">FACULTY MEMBERS</h2>
              <table className="deptAsso-table">
                <thead className="deptAsso-thead">
                  <tr className="deptAsso-trH">
                    <td className="deptAsso-tdH">S.NO</td>
                    <td className="deptAsso-tdH">Name</td>
                    <td className="deptAsso-tdH">Designation</td>
                    <td className="deptAsso-tdH">Email</td>
                  </tr>
                </thead>
                <tbody className="deptAsso-tbody">
                  {assoData !== null &&
                    assoData?.facultys?.map((elem, index) => {
                      return (
                        <>
                          <AssoTableCard
                            index={index + 1}
                            one={elem.name.replaceAll("\r\n", "  ")}
                            two={elem.position}
                            three={elem.email}
                          />
                        </>
                      );
                    })}
                </tbody>
              </table>
              <h2 className="deptAsso-addheading">STUDENT MEMBERS</h2>
              <table className="deptAsso-table">
                <thead className="deptAsso-thead">
                  <tr className="deptAsso-trH">
                    <td className="deptAsso-tdH">S.NO</td>
                    <td className="deptAsso-tdH">Name</td>
                    <td className="deptAsso-tdH">Class & Section</td>
                    <td className="deptAsso-tdH">Designation</td>
                  </tr>
                </thead>
                <tbody className="deptAsso-tbody">
                  {assoData !== null &&
                    assoData?.students?.map((elem, index) => {
                      return (
                        <>
                          <AssoTableCard
                            index={index + 1}
                            one={elem.name.replaceAll("\r\n", "  ")}
                            two={elem.class}
                            three={elem.designation}
                          />
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="deptAsso-headingDiv">
            <h2 className="deptAsso-heading">
              ACHIEVEMENTS & COMPLETED EVENTS
            </h2>
          </div>
          <div className="deptAsso-body-spl">
            {assoData !== null &&
              assoData?.achievements?.map((elem, index) => {
                return (
                  <>
                    <AssoCard1
                      link={`https://data.skct.edu.in${elem.pdf}`}
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

function AssoTableCard({ index, one, two, three }) {
  return (
    <>
      <tr className="assoTC-tr">
        <td className="assoTC-td">{index}</td>
        <td className="assoTC-td">{one}</td>
        <td className="assoTC-td">{two}</td>
        <td className="assoTC-td">{three}</td>
      </tr>
    </>
  );
}
function AssoCard1({ link, name }) {
  return (
    <>
      <a href={link} className="assoC1-link" target={"_blank"} rel="noreferrer">
        <div className="assoC1-wrapper">
          <div className="assoC1-imgDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              width="50px"
              height="50px"
              fill="skyblue"
            >
              <g>
                <g>
                  <path d="M704.8,540.2H582.3V377.5H417.7v162.7H295.2L500,745L704.8,540.2z M800.5,419.6c52.3,3.8,97,25.2,134,64.1c37,38.9,55.5,85.2,55.5,138.8c0,56.1-20.1,104.3-60.3,144.5s-88.4,60.3-144.5,60.3H255c-67.6,0-125.4-23.9-173.2-71.8S10,649.9,10,582.3c0-62.5,21.1-117.1,63.2-163.7c42.1-46.6,93.8-73.1,155-79.4c26.8-49.8,64.4-90,112.9-120.6c48.5-30.6,101.4-45.9,158.9-45.9c74,0,139.1,23.3,195.2,69.9S786.5,348.2,800.5,419.6z" />
                </g>
              </g>
            </svg>
          </div>
          <div className="assoC1-conDiv">
            <p className="assoC1-p">{name}</p>
          </div>
        </div>
      </a>
    </>
  );
}
function AssoCard2({ img, name }) {
  return (
    <>
      <div className="assoC2-wrapper">
        <img src={img} alt="" className="assoC2-img" />
        <div className="assoC2-cDiv">
          <p className="assoC2-p">{name}</p>
        </div>
      </div>
    </>
  );
}

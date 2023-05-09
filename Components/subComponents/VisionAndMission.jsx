import { useEffect } from "react";
import "./Style/VisionAndMission.css";

export default function VAndM() {
     
  useEffect(() => {
    let reel = document.getElementById("reelDiv");
    let moveR = document.getElementById("moveRightSvgVandM");
    let moveL = document.getElementById("moveLeftSvgVandM");

    let reelLen = 300;
    let currReel = 0;
    let intervalPointer = setInterval(() => {
      reel.style.left = `-${currReel}%`;
      if (currReel < reelLen) currReel += 100;
      else currReel = 0;
    }, 3000);

    moveL.addEventListener('click',()=>{
         if (currReel >0) currReel -= 100;
         else currReel = 300;
         reel.style.left = `-${currReel}%`;
     })

    moveR.addEventListener('click',()=>{
     if (currReel < reelLen) currReel += 100;
      else currReel = 0;
     reel.style.left = `-${currReel}%`;
    })


    return () => {
      clearInterval(intervalPointer);
    };
  }, []);

  return (
    <>
      <div className="vandm-wrapper">
        <div className="vandm-theory">
          <div className="vandm-vission">
            <div className="vandm-heading">
              <h2 className="vandm-h2">Vision</h2>
            </div>
            <div className="vandm-content">
              <p className="vamdm-p vandm-unWan">
                Sri Krishna College of Technology aspires to be recognized as
                one of the pioneers in imparting world class technical education
                through technology enabled innovative teaching learning
                processes with a focus on research activities to cater, to the
                societal needs.
              </p>
            </div>
          </div>
          <div className="vandm-mission">
            <div className="vandm-heading">
              <h2 className="vandm-h2">Mission</h2>
            </div>
            <div className="vandm-content">
              <p className="vamdm-p">
                To be recognized as centre of excellence in science, engineering
                and technology through effective teaching and learning processes
                by providing a conducive learning environment.
              </p>
              <p className="vamdm-p">
                To foster research and development with creative and
                entrepreneurial skills by means of innovative applications of
                technology.
              </p>
              <p className="vamdm-p">
                Accomplish expectations of the society and industry by nurturing
                the students to be competent professionals with integrity.
              </p>
            </div>
          </div>
        </div>
        <div className="vandm-runnerDiv">
          <div className="vandm-runnerContainer">
            <div id="reelDiv" className="vandm-reel">
              <div className="vandm-runner"></div>
              <div className="vandm-runner"></div>
              <div className="vandm-runner"></div>
              <div className="vandm-runner"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              version="1.1"
              viewBox="0 0 700 700"
              className="svg-move-vandm svg-move-rot-vandm"
              id="moveLeftSvgVandM"
            >
              <g>
                <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              version="1.1"
              viewBox="0 0 700 700"
              className="svg-move-vandm"
              style={{ right: 0 }}
              id="moveRightSvgVandM"
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

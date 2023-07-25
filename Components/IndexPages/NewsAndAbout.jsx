import { useContext, useEffect, useRef } from "react";
import ContextTag from "../ContextFile";
import "./style/newsandabout.css";
import IARunner from "./IARunner"

export default function NewsAndAbout() {
  return (
    <>
      <div className="nanda-wrapper">
        <div className="nanda-aboutdiv">
          <div className="nanda-about-wrapper">
            <div className="nanda-headingdiv">
              <h2 className="all-heading-orange">ABOUT SKCT</h2>
            </div>
            <div className="nanda-about-content">
              <p className="nanda-about">
                {`Nestled at the foothills of the Western Ghats, located in a
              sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna
              College of Technology (SKCT) is a vibrant institute of higher
              education established in 1985 promoted by Sri Krishna
              Institutions. An extraordinary freedom of opportunity—to explore,
              to collaborate and to challenge oneself is the hallmark of the
              Institute. Being an autonomous institute, affiliated to Anna
              University, Chennai, and approved by AICTE, New Delhi, SKCT lays
              strong emphasis on collaborative research and stands apart from
              other institutes by its participatory work culture, student care
              programmes and high industry interaction. In a span of 37 years,
              it has emerged as one of the premier engineering colleges for
              learning, discovery and innovation due to the dynamic leadership
              of the Chairperson and Managing Trustee Smt S Malarvizhi. Being an
              acclaimed educationalist, she continues to contribute profusely
              for the glory and happiness of advancing generations. The college
              is accredited with A Grade by NAAC and eligible undergraduate
              programs are accredited by the National Board of Accreditation
              (NBA), New Delhi. The college offers 8 undergraduate programmes
              and 6 postgraduate programmes in engineering, technology, and
              Management Studies.`}
              </p>
            </div>
          </div>
          <div className="about-add-div">
            <IARunner />
          </div>
          {/*  */}
        </div>
        <div className="nanda-newsdiv">
          <News />
        </div>
      </div>
    </>
  );
}

function News() {
  let { newsData } = useContext(ContextTag);
  let runnerRef = useRef();

  useEffect(() => {
    const totalWidth = newsData.length * 100;
    let runnerDiv = runnerRef.current;
    let left = 0;
    let timeoutPointer;
    // auto move
    (() => {
      timeoutPointer = setInterval(intervalFunction, 3000);
    })();
    // hover
    (() => {
      let rightMove = document.querySelector("#rigthMove");
      let leftMove = document.querySelector("#leftMove");
      let hoverListenDiv = document.querySelector("#hoverListenDiv");

      hoverListenDiv.addEventListener("mouseover", () => {
        clearInterval(timeoutPointer);
      });

      hoverListenDiv.addEventListener("mouseleave", () => {
        timeoutPointer = setInterval(intervalFunction, 3000);
      });

      leftMove.addEventListener("click", mover.bind(null, "left"));
      rightMove.addEventListener("click", mover.bind(null, "rigth"));

      function mover(direction) {
        if (direction === "rigth") {
          if (left > 0) {
            left -= 100;
          } else {
            left = totalWidth - 100;
          }
          runnerDiv.style.left = `-${left}%`;
        } else {
          if (left < totalWidth - 100) {
            left += 100;
          } else {
            left = 0;
          }
          runnerDiv.style.left = `-${left}%`;
        }
      }
    })();
    function intervalFunction() {
      if (left < totalWidth - 100) {
        left += 100;
      } else {
        left = 0;
      }
      runnerDiv.style.left = `-${left}%`;
    }
    return () => {
      clearInterval(timeoutPointer);
    };
  }, [newsData]);

  return (
    <>
      <div className="news-wrapper">
        <div className="news-headingDiv">
          <h2 className="all-heading-orange">NEWS</h2>
        </div>
        <div className="news-runnerHolder">
          <div
            className="news-runner"
            style={{ width: `${newsData.length * 100}%` }}
            ref={runnerRef}
          >
            {newsData.map((elem, index) => {
              return (
                <>
                  <NewsFragment data={elem} key={index} />
                </>
              );
            })}
          </div>
          <div id="hoverListenDiv" className="news-hover-listener"></div>
          <div id="rigthMove" className="news-runnerleft"></div>
          <div id="leftMove" className="news-runnerrigth"></div>
        </div>
      </div>
    </>
  );
}

function NewsFragment({ data }) {
  return (
    <>
      <div className="newfragment-holder">
        <div className="newsfragment-wrapper">
          <div className="newfrag-imgdiv">
            <img
              src={`https://data.skct.edu.in${data.img}`}
              alt=""
              className="newfrag-img"
            />
          </div>
          <div className="newfrag-content">
            <div className="newsfrag-heading-div">
              <h2 className="newsfrag-h2">{data.name}</h2>
            </div>
            <div className="newsfrag-new-div">
              <p className="newsfrag-p">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

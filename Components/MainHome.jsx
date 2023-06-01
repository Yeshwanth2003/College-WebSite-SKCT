import { useEffect, useState } from "react";
import "./Style/mainHome.css";
import Recruiters from "./Recruiters";
import ContextTag from "./ContextFile";
import CampusVideos from "./CampusVideos";
import Alumni from "./Alumni";
import { Link } from "react-router-dom";
import { Img_Err_Solver } from "./WholeApp";

export default function MainHome() {
  // Home Events states
  // upEvents
  let [ifUP, setUP] = useState(false);
  let [upData, setUPData] = useState([]);
  // news
  let [newsRunnerWidth, setNewsRunnerWidth] = useState(1);
  let [newsData, setNewsData] = useState([]);
  let [newsLeftPostions, setNLP] = useState(0);
  // announcement
  let [announcementData, setAnnouncementData] = useState([]);
  let [announcementLeftPosition, setAnnouncementLeftPosition] = useState(0);

  //  Rec Data
  let [recData, setRecData] = useState([]);
  // Alumni Data
  let [alumniData, setAlumniData] = useState([]);

  // // Check browser version
  // useEffect(() => {
  //   let version = parseInt(
  //     window.navigator.userAgent
  //       .split(" ")
  //       .filter((elem) => elem.includes("Chrome"))[0]
  //       .split("/")[1]
  //       .split(".")[0]
  //   );
  //   if (version < 108) {
  //     alert("Use Latest Browser version for better user experience");
  //   }
  // }, []);

  // IMG Error

  useEffect(() => {
    Img_Err_Solver();
  });

  // home Events sideeffect
  useEffect(() => {
    fetch("https://data.skct.edu.in/home/?format=json")
      .then((res) => res.json())
      .then((dats) => {
        setUP(true);
        setUPData(dats[0]["events"].reverse());
        setNewsRunnerWidth(dats[0]["news"].length);
        setNewsData(dats[0]["news"]);
        setAnnouncementData(dats[0]["announcements"]);
      });
  }, []);

  // newsRunner Animation
  useEffect(() => {
    if (newsRunnerWidth <= 1) return;
    let widthOfNews = newsRunnerWidth * 100;
    let leftPosition = 0;
    const newsIntervel = setInterval(() => {
      if (leftPosition < widthOfNews - 100) {
        leftPosition += 100;
      } else {
        leftPosition = 0;
      }
      setNLP(leftPosition);
    }, 3000);
    // let newsRunnerDiv = document.querySelector("#newsRunnerDiv")
    // newsRunnerDiv.onclick=()=>{
    //   console.log("hi");
    // }
    return () => {
      clearInterval(newsIntervel);
    };
  }, [newsRunnerWidth]);

  // announcement Runner
  useEffect(() => {
    let totalAnnouncementLength = announcementData.length * 100 - 100;

    let announcementInterval = setInterval(() => {
      if (announcementLeftPosition < totalAnnouncementLength) {
        setAnnouncementLeftPosition((preVal) => (preVal += 100));
      } else {
        setAnnouncementLeftPosition(0);
      }
    }, 5000);

    return () => {
      clearInterval(announcementInterval);
    };
  }, [announcementData]);

  // REC and Alumni Data
  useEffect(() => {
    fetch("https://data.skct.edu.in/homeone/?format=json")
      .then((res) => res.json())
      .then((dats) => {
        setRecData(dats["rec"]);
        setAlumniData(dats["test"]);
      });
  }, []);

  function MoveAnnouncement(side) {
    let totalAnnouncementLength = announcementData.length * 100 - 100;
    if (side === "right") {
      setAnnouncementLeftPosition((preVal) => {
        if (preVal < totalAnnouncementLength) {
          return (preVal += 100);
        }
        return 0;
      });
    } else {
      setAnnouncementLeftPosition((preVal) => {
        if (preVal === 0) return totalAnnouncementLength;
        return (preVal -= 100);
      });
    }
  }

  function MainHomeRunner1() {
    return (
      <>
        <div className="mainHome-runner1-wrapper">
          <div className="mainHome-runner1-part1">
            <div className="mainHome-runner1-part1-wrapper">
              <div
                className="mainHome-runner1-part1-moveleft"
                onClick={() => MoveAnnouncement("left")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
                  version="1.1"
                  viewBox="0 0 700 700"
                  className="svg-move svg-trans mainRunner-home-svg"
                >
                  <g>
                    <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
                  </g>
                </svg>
              </div>
              <div
                className="mainHome-runner1-part1-moveright"
                onClick={() => MoveAnnouncement("right")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
                  version="1.1"
                  viewBox="0 0 700 700"
                  className="svg-move mainRunner-home-svg"
                >
                  <g>
                    <path d="m479.92 248.08-217.84-199.92c-12.879-12.879-33.039-12.879-45.922 0-12.879 12.879-12.879 33.039 0 45.922l168.56 185.92-168 185.92c-12.879 12.879-12.879 33.039 0 45.922 6.1602 6.1602 14.559 9.5195 22.961 9.5195 8.3984 0 16.801-3.3594 22.961-9.5195l217.84-199.92c16.801-17.922 16.801-45.922-0.55859-63.844z" />
                  </g>
                </svg>
              </div>
              <div
                className="mainHome-runner1-contentHolderDiv"
                style={{
                  width: `${announcementData.length * 100}%`,
                  left: `-${announcementLeftPosition}%`,
                }}
              >
                {announcementData.length > 0 &&
                  announcementData.map((elem, index) => {
                    return (
                      <>
                        <AnnouncementCard
                          IMG={`https://data.skct.edu.in${elem.img}`}
                          DESE={elem.description}
                          key={index.toString()}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="mainHome-runner1-part2">
            <div className="mainHome-runner1-utilityDiv">
              <div className="mainHome-runner1-CC-div">
                <div className="mainHome-runner1-tneaHolder">
                  <h1>TNEA CODE</h1>
                  <h1>2722</h1>
                </div>
              </div>
              <div className="mainHome-runner1-utilityBox">
                <div className="mainHome-runner1-feesPayDiv">
                  <Link
                    to="/feepayment"
                    className="mainHome-runner1-feespayLink"
                  >
                    <button className="mainHome-runner1-feespayButton">
                      <h2>ONLINE FEES</h2>
                      <h2>PAYMENT</h2>
                    </button>
                  </Link>
                </div>
                <div className="mainHome-runner1-admissionsDiv">
                  <Link
                    to="/admissions"
                    className="mainHome-runner1-admissionsLink"
                  >
                    <button className="mainHome-runner1-admissionsButton">
                      <h3>ADMISSIONS</h3>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mainHome-runner1-upcomingEventDiv">
              <div className="mainHome-runner1-upcomingEvent-Wrapper">
                <div className="mainHome-runner1-upcomingEvent-HeadingDiv">
                  <h2 className="mainHome-runner1-all-Heading">
                    UPCOMING EVENTS
                  </h2>
                </div>
                <div className="mainHome-runner1-upEv-bodydiv">
                  <div className="mainHome-runner1-upEv-boxWrapper">
                    <div className="mainHome-runner1-upEv-box .mainHome-scrollbar">
                      {/* Home Events */}
                      {ifUP &&
                        upData.map((elem, index) => {
                          let date = new Date(elem.date).getDate();
                          let month = mkMonth(new Date(elem.date).getMonth());
                          return (
                            <>
                              <UpcomingEventCard
                                date={date}
                                month={month}
                                infoTitle={elem.name}
                                key={indexedDB.toString()}
                                link={`/allevents/${elem.pk}`}
                              />
                            </>
                          );
                        })}
                    </div>
                    <div className="mainHome-runner1-upEv-moreEv-div">
                      <div className="mainHome-runner1-upEv-buttonWrapper">
                        <Link
                          to="/allevents"
                          className="mainHome-runner1-eventBtn-link"
                        >
                          <button className="mainHome-runner1-eventBtn">
                            <h3>All Events</h3>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function IARunner() {
    let [iaRunnerData, setIARunnerData] = useState([]);

    useEffect(() => {
      import("../DataCenter/InstutionAccomplishment/instutionAccomplishment")
        .then((res) => res.default)
        .then((dats) => {
          setIARunnerData(dats);
        });
    }, []);

    // IMG Error

    useEffect(() => {
      Img_Err_Solver();
    });

    function IARunnerTemp({ IMG }) {
      return (
        <>
          <Link to="/" className="mainhome-ia-runner-link">
            <div className="mainhome-ia-runner-imgwrapper-box">
              <img src={IMG} alt="" className="mainhome-ia-runner-img" />
            </div>
          </Link>
        </>
      );
    }

    return (
      <>
        <div className="mainHome-IArunner-wrapper">
          <div className="mainHome-IArunner-headingBox">
            <h2 className="mainHome-runner1-all-Heading">
              INSTITUTE ACCOMPLISHMENTS
            </h2>
          </div>
          <div className="mainHome-IArunner-Box">
            <div className="mainHome-IArunner-runnerDiv">
              {iaRunnerData.map((elem) => {
                return (
                  <>
                    <IARunnerTemp IMG={elem.img} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  function NewsAndAbout() {
    return (
      <>
        <div className="newsandabout-wrapper">
          <div className="newsandabout-news1-wrapper">
            <div className="newsandabout-headingWrapper">
              <h2 className="mainHome-runner1-all-Heading">NEWS</h2>
            </div>
            <div className="newsandabout-newsBox">
              <div
                id="newsRunnerDiv"
                className="newandabout-newrunner"
                style={{
                  width: `${newsRunnerWidth * 100}%`,
                  left: `-${
                    newsRunnerWidth * 100 -
                    (newsLeftPostions === 0 ? 100 : newsLeftPostions)
                  }%`,
                }}
              >
                {newsRunnerWidth !== 1 &&
                  newsData.map((elem, index) => {
                    return (
                      <>
                        <NewsCard
                          IMG={`https://data.skct.edu.in${elem.img}`}
                          HEADING={elem.name}
                          PARA={elem.description}
                          key={`${index}`}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="newsandabout-about-wrapper">
            <div className="newsandabout-headingWrapper">
              <h2 className="mainHome-runner1-all-Heading">ABOUT SKCT</h2>
            </div>
            <p className="newsandabout-aboutCLG">
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
          <div className="newsandabout-news2-wrapper">
            <div className="newsandabout-headingWrapper">
              <h2 className="mainHome-runner1-all-Heading">NEWS</h2>
            </div>
            <div className="newsandabout-newsBox">
              <div
                id="newsRunnerDiv"
                className="newandabout-newrunner"
                style={{
                  width: `${newsRunnerWidth * 100}%`,
                  left: `-${newsLeftPostions}%`,
                }}
              >
                {newsRunnerWidth !== 1 &&
                  newsData.map((elem, index) => {
                    return (
                      <>
                        <NewsCard
                          IMG={`https://data.skct.edu.in${elem.img}`}
                          HEADING={elem.name}
                          PARA={elem.description}
                          key={index.toString}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mainHome-wrapper">
        <MainHomeRunner1 />
        <IARunner />
        <NewsAndAbout />
        <CampusVideos />
        <div className="mainHome-alumini-Wrapper">
          <ContextTag.Provider value={{ alumniData }}>
            <Alumni />
          </ContextTag.Provider>
        </div>
        <div className="mainHome-recDivWrapper">
          <ContextTag.Provider value={{ recData }}>
            <Recruiters />
          </ContextTag.Provider>
        </div>
      </div>
    </>
  );
}

function UpcomingEventCard({ date, month, infoTitle, key, link }) {
  return (
    <>
      <div className="upcomingEvent-box" key={key}>
        <div className="upcomingEvent-calanderBox">
          <div className="upcomingEvent-calender">
            <div className="upcomingEvent-calender-month">
              <span className="upcomingEvent-calender-monthSpan">{month}</span>
            </div>
            <div className="upcomingEvent-calender-date">
              <span className="upcomingEvent-calender-dateSpan">{date}</span>
            </div>
          </div>
        </div>
        <div className="upcomingEvent-infoBox">
          <Link to={link} className="upcomingEvent-linkku">
            <p className="upcomingEvent-infoP">{infoTitle}</p>
          </Link>
        </div>
      </div>
    </>
  );
}

function AnnouncementCard({ IMG, DESE }) {
  return (
    <>
      <div className="announcementCard-wrapper">
        <img src={IMG} alt="" className="announcementCard-img" />
        <div className="announcementCard-waterMark">
          <h3 className="announcement-h3">{DESE}</h3>
        </div>
      </div>
    </>
  );
}

function NewsCard({ IMG, HEADING, PARA }) {
  return (
    <>
      <div className="newCard-wrapper">
        <div className="newCard-img">
          <img src={IMG} alt="." className="newCard-Act-img" />
        </div>
        <div className="newCard-theory">
          <h2 className="newCard-heading">{HEADING}</h2>
          <p className="newCard-para">{PARA}</p>
        </div>
      </div>
    </>
  );
}

function mkMonth(byNum) {
  let month;
  switch (byNum) {
    case 0:
      month = "JANUARY";
      break;
    case 1:
      month = "FEBRUARY";
      break;
    case 2:
      month = "MARCH";
      break;
    case 3:
      month = "APRIL";
      break;
    case 4:
      month = "MAY";
      break;
    case 5:
      month = "JUNE";
      break;
    case 6:
      month = "JULY";
      break;
    case 7:
      month = "AUGUST";
      break;
    case 8:
      month = "SEPTEMBER";
      break;
    case 9:
      month = "OCTOBER";
      break;
    case 10:
      month = "NOVEMBER";
      break;
    case 11:
      month = "DECEMBER";
      break;
    default:
      month = "ERROR";
  }
  return month;
}

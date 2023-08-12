import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ContextTag from "../ContextFile";
import "./style/eventsandmainrunner.css";

export default function EventsAndMainRunner() {
  return (
    <>
      <div className="eandmr-wrapper">
        <div className="eandmr-p1">
          <div className="eandmr-p1-contentholderdiv">
            <AnnouncementRunner />
          </div>
        </div>
        <div className="eandmr-p2">
          <Part2Elements />
          <Part2Events />
        </div>
      </div>
    </>
  );
}
function AnnouncementRunner() {
  let { announcementData } = useContext(ContextTag);
  let runnerRef = useRef();
  useEffect(() => {
    const totalWidth = announcementData.length * 100;
    let runnerDiv = runnerRef.current;
    let left = 0;
    let timeoutPointer;
    // auto move
    (() => {
      timeoutPointer = setInterval(intervalFunction, 3000);
    })();
    // hover
    (() => {
      let rightMove = document.querySelector("#announcementRigthMove");
      let leftMove = document.querySelector("#announcementLeftMove");
      let hoverListenDiv = document.querySelector(
        "#announcementHoverListenDiv"
      );

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
  }, [announcementData]);

  return (
    <>
      <div
        className="announcementRunner-reel"
        style={{ width: `${announcementData.length * 100}%` }}
        ref={runnerRef}
      >
        {announcementData.map((elem, index) => {
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
      <div
        id="announcementHoverListenDiv"
        className="announcement-runner-controller"
      ></div>
      <div
        id="announcementRigthMove"
        className="announcement-runner-left"
      ></div>
      <div
        id="announcementLeftMove"
        className="announcement-runner-rigth"
      ></div>
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
function Part2Events() {
  let { eventsData } = useContext(ContextTag);
  return (
    <>
      <div className="p2-events-wrapper">
        <div className="p2-events-div">
          <div className="p2-events-heading-div">
            <h2 className="all-heading-orange">UPCOMING EVENTS</h2>
          </div>
          <div className="p2-events-body">
            <div className="p2-events-listDiv">
              {eventsData.map((elem, index) => {
                let date = new Date(elem.date).getDate();
                let month = mkMonth(new Date(elem.date).getMonth());
                return (
                  <>
                    <UpcomingEventCard
                      date={date}
                      month={month}
                      infoTitle={elem.name}
                      key={index.toString()}
                      link={`/allevents/${elem.pk}`}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="p2-events-button-div">
            <Link className="p2-events-link" to="/allevents">
              <button className="p2-events-button">All Events</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function UpcomingEventCard({ date, month, infoTitle, link }) {
  return (
    <>
      <div className="upcomingEvent-box" >
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
function Part2Elements() {
  return (
    <>
      <div className="mainHome-runner1-utilityDiv">
        <div className="mainHome-runner1-CC-div">
          <div className="mainHome-runner1-tneaHolder">
            <h1>TNEA CODE</h1>
            <h1>2722</h1>
          </div>
        </div>
        <div className="mainHome-runner1-utilityBox">
          <div className="mainHome-runner1-feesPayDiv">
            <Link to="/feepayment" className="mainHome-runner1-feespayLink">
              <button className="mainHome-runner1-feespayButton">
                <h2>ONLINE FEES</h2>
                <h2>PAYMENT</h2>
              </button>
            </Link>
          </div>
          <div className="mainHome-runner1-admissionsDiv">
            <Link to="/admissions" className="mainHome-runner1-admissionsLink">
              <button className="mainHome-runner1-admissionsButton">
                <h3>ADMISSIONS</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export function mkMonth(byNum) {
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

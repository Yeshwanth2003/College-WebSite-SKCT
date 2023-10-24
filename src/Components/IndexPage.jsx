import { useState, useEffect } from "react";
import IARunner from "./IndexPages/IARunner";
import Alumni from "./IndexPages/Alumni";
import ContextTag from "./ContextFile";
import Recruiters from "./IndexPages/Recruiters";
import CampusView from "./IndexPages/CampusView";
import NewsAndAbout from "./IndexPages/NewsAndAbout";
import EventsAndMainRunner from "./IndexPages/EventsAndMainRunner";
import Courses from "./IndexPages/Courses";
import useImport from "../CustomHooks/useImport";
import "./Style/indexpage.css";

export default function Indexpage() {
  let [alumniData, setAlumniData] = useState([]);
  let [recData, setRecData] = useState([]);
  let [newsData, setNewsData] = useState([]);
  let [eventsData, setEventsData] = useState([]);
  let [announcementData, setAnnouncementData] = useState([]);

  useImport("IndexData/home.js", ({ err, data }) => {
    setEventsData(data[0]["events"].reverse());
    setNewsData(data[0]["news"]);
    setAnnouncementData(data[0]["announcements"].reverse());
  });

  useImport("IndexData/homeone.js", ({ err, data }) => {
    setRecData(data["rec"]);
    setAlumniData(data["test"]);
  });

  return (
    <>
      <ContextTag.Provider value={{ eventsData, announcementData }}>
        <EventsAndMainRunner />
      </ContextTag.Provider>
      <IARunner />
      <ContextTag.Provider value={{ newsData }}>
        <NewsAndAbout />
      </ContextTag.Provider>
      <Courses />
      <CampusView />
      <ContextTag.Provider value={{ alumniData }}>
        <Alumni />
      </ContextTag.Provider>
      <ContextTag.Provider value={{ recData }}>
        <Recruiters />
      </ContextTag.Provider>
    </>
  );
}

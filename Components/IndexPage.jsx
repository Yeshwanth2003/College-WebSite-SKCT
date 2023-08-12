import { useState, useEffect } from "react";
import IARunner from "./IndexPages/IARunner";
import Alumni from "./IndexPages/Alumni";
import ContextTag from "./ContextFile";
import Recruiters from "./IndexPages/Recruiters";
import CampusView from "./IndexPages/CampusView";
import NewsAndAbout from "./IndexPages/NewsAndAbout";
import EventsAndMainRunner from "./IndexPages/EventsAndMainRunner";
import "./Style/indexpage.css";

export default function Indexpage() {
  let [alumniData, setAlumniData] = useState([]);
  let [recData, setRecData] = useState([]);
  let [newsData, setNewsData] = useState([]);
  let [eventsData, setEventsData] = useState([]);
  let [announcementData, setAnnouncementData] = useState([]);

  useEffect(() => {
    fetch("https://data.skct.edu.in/homeone/?format=json")
      .then((res) => res.json())
      .then((dats) => {
        setRecData(dats["rec"]);
        setAlumniData(dats["test"]);
      });
  }, []);
  useEffect(() => {
    fetch("https://data.skct.edu.in/home/?format=json")
      .then((res) => res.json())
      .then((dats) => {
        setEventsData(dats[0]["events"].reverse());
        setNewsData(dats[0]["news"]);
        setAnnouncementData(dats[0]["announcements"].reverse());
      });
  }, []);

  return (
    <>
      <ContextTag.Provider value={{ eventsData, announcementData }}>
        <EventsAndMainRunner />
      </ContextTag.Provider>
      <div className="indexpage-iarunner-wrapper">
        <IARunner />
      </div>
      <ContextTag.Provider value={{ newsData }}>
        <NewsAndAbout />
      </ContextTag.Provider>
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

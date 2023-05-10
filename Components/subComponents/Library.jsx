import "./Style/library.css";
import React, { useEffect, useState, useCallback } from "react";

function Scrollmenu({ title, sections }) {
  const scrollto = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-menu">
        <div className="scroll-menu-title" style={{ padding: "16px 0px 0px" }}>
          <h4>{title}</h4>
        </div>
        <hr className="scroll-menu-divider" />

        <div className="scroll-menu-sections" role="list">
          {sections.map((section, id) => (
            <div
              key={id}
              className="scroll-menu-section"
              onClick={() => scrollto(section)}
            >
              <div className="scroll-menu-icon">
                <svg
                  height="16"
                  width="16"
                  fill="#0000FF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </div>
              <div className="scroll-menu-section-title">{section}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Imageslider({ slides, fit = "cover", fill = "white" }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIdx === 0;
    const index = isFirstSlide ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(index);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIdx === slides.length - 1;
    const index = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(index);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3.5 * 1000);
    return () => clearInterval(interval);
  }, [goToNext, slides]);

  return (
    <>
      <div className="slider">
        <div
          className="slider-arrows"
          onClick={goToPrev}
          style={{ left: "2vw" }}
        >
          <svg
            fill={fill}
            width="26px"
            height="26px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
        <div
          id="slide-next"
          className="slider-arrows"
          onClick={goToNext}
          style={{ right: "2vw" }}
        >
          <svg
            fill={fill}
            width="26px"
            height="26px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div
          className="slides"
          style={{ transform: `translate(-${currentIdx * 100}%)` }}
        >
          {slides?.map((slide, id) => (
            <div key={id} className="slide-img-box">
              <img
                key={id}
                src={`https://data.skct.edu.in${slide?.img}`}
                alt={`${slide?.name}`}
                style={{
                  objectFit: fit,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Accordion({ des, name, imgs }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={active ? "accordion active" : "accordion"}>
        <div className="accordion-title" onClick={() => setActive(!active)}>
          <span>{name}</span>
          <div className="accordion-icon">
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
        <div className={"accordion-description"}>
          <p className="acc-desc-p">{des}</p>
          <div className="description-img-box">
            {imgs?.map((img, id) => (
              <div key={id} className="description-img">
                <img
                  src={`https://data.skct.edu.in${
                    img.img === undefined ? img : img.img
                  }`}
                  alt={img.img === undefined ? img : img.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Library(props) {
  let sections = [
    "About Library",
    "Central Library",
    "Unique Feature",
    "Digital Library",
    "Timings",
    "Guidelines for Students",
    "Library Staff",
    "Events",
  ];

  const [lib, setLib] = useState({});
  useEffect(() => {
    fetch("https://data.skct.edu.in/library/?format=json")
      .then((response) => response.json())
      .then((data) => setLib(data));
  }, []);

  const slides = [];
  const imgs = lib?.img !== undefined && lib?.img;
  const len = imgs.length;

  for (let i = 0; i < len; i++) {
    slides.push({
      img: imgs[i],
      name: imgs[i].replace("/media/", ""),
    });
  }

  return (
    <>
      <div className="library-container">
        <Scrollmenu title="library @ skct" sections={sections} />

        <div className="library-content">
          <div className="lib-content-slider">
            {imgs !== undefined && <Imageslider slides={slides} />}
          </div>

          <div className="library-text-content">
            <h6 id="About Library" className="lib-section-title">
              about library
            </h6>
            <p className="lib-section-content">
              Welcome! In a time of rapid change, SKCT Central Library continues
              to stand at the center of intellectual life on campus, with
              world-class collections and services in print, online, and in
              person. Our Library serves as an indispensable partner in study,
              teaching and research at the College.
            </p>

            <h6 id="About Library" className="lib-section-title">
              vision
            </h6>
            <p className="lib-section-content">
              The vision of the SKCT Engineering College Library is to provide
              our users seamless access to onsite and world-wide information
              services and to support the delivery of the information with a
              creative internal network of human and material resources.
            </p>

            <h6 className="lib-section-title">mission</h6>
            <p className="lib-section-content">
              The Library upholds these values by:
            </p>
            <ul className="lib-section-list-content">
              <li>
                Developing, Organizing, and maintaining a collection that
                attempts to meet the needs of our users.
              </li>
              <li>
                Developing and strengthening working relationships with faculty,
                and students.
              </li>
              <li>
                Providing instruction that enables users to access and evaluate
                information resources.
              </li>
              <li>
                Developing opportunities for improving library environments and
                optimizing existing physical facilities for both users and
                staff.
              </li>
              <li>
                Encouraging and supporting the professional growth, individual
                growth, and job satisfaction of our staff members.
              </li>
            </ul>

            <h6 id="Central Library" className="lib-section-title">
              central library
            </h6>
            <p className="lib-section-content">
              Our central library is one of the biggest college libraries in and
              around Coimbatore District with state-of-the-art facilities for
              comfortable access to the knowledge sources With built up area of
              5000 Sq.ft. and seating capacity of 250, it has comfortable
              spacious General Section, Reference section, Periodical section,
              Technical section, and Discussion room.
            </p>
            <p className="lib-section-content">
              Our library has Barcode based Inspro plus library software with
              OPAC facility for easy search and location of books even from
              departments and throughout the campus. Currently, our library has
              over 74,463 volumes in 42,049 titles. Our college subscribes to
              252 National and International print periodicals and 8000 national
              & international online e-journals.
            </p>

            <h6 className="lib-section-title">goals</h6>
            <ol className="lib-section-list-content">
              <li>
                Optimize the efficiency and effectiveness of library services to
                our users.
              </li>
              <li>
                Develop and effectively utilize two-way communication to inform
                and gather input from our stake holders.
              </li>
              <li>Develop and retain highly skilled staff.</li>
              <li>Improve the physical environment for users and staff.</li>
            </ol>

            <h6 className="lib-section-title">best library practice</h6>
            <ul className="lib-section-list-content">
              <li>User Education Program</li>
              <li>Student Library advisory committee</li>
              <li>Best library user award for staff and students</li>
              <li>
                Access to digital repository through Intra site access
                (172.17.0.3)
              </li>
              <li>Resource Sharing through Intranet site.</li>
              <li>Conducting various Programs to Students / Faculty</li>
              <li>
                Books / Periodicals Recommendation Forms for Students and
                Faculty
              </li>
              <li>Intra Library Loan through DELNET</li>
              <li>Book exhibition</li>
              <li>Extended library hours</li>
              <li>User feedback</li>
            </ul>

            <h6 id="Unique Feature" className="lib-section-title">
              unique features
            </h6>
            <ul className="lib-section-list-content">
              <li>Air Conditioned Periodical section.</li>
              <li>Stone building Architecture.</li>
              <li>Built in area of 1495.75sqm.</li>
              <li>Discussion Rooms</li>
              <li>Wi-Fi Connectivity</li>
              <li>Seating capacity for 250 students.</li>
              <li>Multimedia/Digital Library</li>
            </ul>

            <h6 className="lib-section-title">services</h6>
            <ul className="lib-section-list-content">
              <li>Lending</li>
              <li>Reference</li>
              <li>OPAC/Web OPAC</li>
              <li>Current Awareness Service / SDI Service</li>
              <li>Reprographic Service</li>
              <li>Internet access</li>
              <li>E-Journal access</li>
              <li>Access to NPTEL Video Tutorials and Web Courses</li>
              <li>Information Retrieval/ Print out /Scanning</li>
              <li>Referral Service</li>
              <li>Inter Library Loan</li>
              <li>User Orientation</li>
              <li>News Paper Clippings</li>
              <li>Career and Placement Aid</li>
              <li>Question Bank</li>
            </ul>

            <h6 className="lib-section-title">ict enabled library services</h6>
            <ul className="lib-section-list-content">
              <li>Fully Automated Library Services</li>
              <li>Barcode / Smartcard / Circulation</li>
              <li>Multimedia Enabled Digital Library</li>
              <li>Access to E-Journals / E-Books / E-News Papers</li>
              <li>NPTEL Video Lectures and Web Course</li>
              <li>
                IEEE Online, ASCE, ASME Digital Collections AND EBSCO Online
                Database
              </li>
              <li>Intranet E-Library access</li>
            </ul>

            <h6 id="Digital Library" className="lib-section-title">
              digital library
            </h6>
            <p className="lib-section-content">
              The separate Digital library is functioning in the central
              library. It is equipped with 66 multimedia systems and has a
              collection of more than 6560 CD-ROMS and 1671 DVDs on the latest
              and advanced topics in all areas of studies. We have an Intrasite
              which has all the Question papers, NPTEL Videos, web courses, MIT
              course ware and Database like ASME,ASCE, EBSCO Lite, DELNET,NDL
              and Swayam. We also have a membership with British council library
              Chennai.
            </p>

            <h6 className="lib-section-title">book bank facility</h6>
            <p className="lib-section-content">
              Our Library has book bank facility with 2521 books. These books
              are utilized by students under SC/ST quota.
            </p>

            <h6 id="Timings" className="lib-section-title">
              library timings
            </h6>
            <ul className="lib-section-list-content">
              <li>8.45 a.m. to 8.00 p.m. on Working days</li>
              <li>9:30 a.m. to 5.00 p.m. on Sundays and Holidays</li>
            </ul>

            <h6 className="lib-section-title">circulation</h6>
            <p className="lib-section-content">
              <b>Issue and Return</b>
              <br />
              8.45a.m. to 6.30 p.m. on Working days
              <br />
              9:45a.m. to 4.30 p.m. on Sundays and Holidays
              <br />
              UG - 6 Books 15 days
              <br />
              PG - 5 Books 15 days
              <br />
              Teaching Staff - 8 Books1 semester
              <br />
              Non –Teaching Staff - 3 Books1 month
              <br />
            </p>

            <h6 id="Guidelines for Students" className="lib-section-title">
              guidelines to students
            </h6>
            <ul className="lib-section-list-content">
              <li>
                Every time you visit the library enter your name and time
                (In/Out) in the login register.
              </li>
              <li>Always come with your ID Card.</li>
              <li>Please keep silence when you are inside the Library.</li>
              <li>
                Only blank sheets are allowed inside the library.(Notebooks &
                bags are not allowed)
              </li>
              <li>
                Personal book, jewellery and costly items are not permitted.
              </li>
              <li>
                Do not make any mark with pen or pencil on books and
                periodicals. If you are found marking you shall replace it with
                a new book.
              </li>
              <li>
                For replacement of lost books, do not purchase second hand
                books. Replace the book of the same edition or updated edition
                only.
              </li>
              <li>
                Don’t borrow books from other ID Card, if you do so your account
                will be blocked.
              </li>
              <li>
                Before entering the digital library login the register with
                system number.
              </li>
              <li>Keep your personal belonging at entrance shelf.</li>
              <li>Avoid thronging (crowd) at the entrance.</li>
              <li>
                Don’t tear the newspaper separately. Don’t cut the news paper
                and magazine. If found the particular person’s account will be
                blocked.
              </li>
              <li>
                Avoid moving books and journals from one section to another
                section.
              </li>
              <li>
                Photocopies of books borrowed from the library can be taken in
                the library itself. For other materials use the reprographic
                section outside the library. While leaving the library switch
                off the fans & lights. While leaving the digital library
                shutdown the system and switch Off fans.
              </li>
            </ul>

            <h6 id="Library Staff" className="lib-section-title">
              library staff
            </h6>
            <ol className="lib-section-list-content">
              {lib?.name?.map((faculty, id) => (
                <li key={id}>{faculty.faculty_name}</li>
              ))}
            </ol>

            <h6 id="Events" className="lib-section-title">
              events
            </h6>
            <hr className="lib-menu-divider" />
            {lib?.events?.map((event, id) => (
              <Accordion
                key={id}
                name={event.name}
                des={event.des}
                imgs={event.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

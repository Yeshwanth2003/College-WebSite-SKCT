import "./Style/sports.css";
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

export default function Sports(props) {
  let sections = [
    "Gallery",
    "Achievements",
    "Sports Press Release",
    "Downloads",
    "Contact",
  ];

  const [sports, setSports] = useState({});
  useEffect(() => {
    fetch("https://data.skct.edu.in/college_sports/?format=json")
      .then((response) => response.json())
      .then((data) => setSports(data));
  }, []);

  const slides = sports?.slider;

  return (
    <>
      <div className="sports-container">
        <Scrollmenu title="sports @ skct" sections={sections} />

        <div className="sports-content">
          <div className="sports-slider">
            <Imageslider slides={slides} />
          </div>

          <div className="sports-text-content">
            <h6
              id="Gallery"
              className="sports-section-title"
              style={{ padding: "8px 0px 3px" }}
            >
              gallery
            </h6>
            <hr className="sports-menu-divider" />
            {sports?.games?.map((game, id) => (
              <Accordion key={id} name={game.name} imgs={game.img} />
            ))}

            <h6 id="Achievements" className="sports-section-title">
              achievements
            </h6>
            <div className="sports-pdf-table">
              {sports?.achieve?.map((event, id) => (
                <a
                  key={id}
                  style={{ textDecoration: "none" }}
                  href={`https://data.skct.edu.in${event.pdf}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sports-achievements">
                    <div className="sports-dld-icon">
                      <svg
                        width="32"
                        height="32"
                        fill="#2196F3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                    <div className="sports-achievement-title">{event.name}</div>
                  </div>
                </a>
              ))}
            </div>

            <h6 id="Sports Press Release" className="sports-section-title">
              sports press release
            </h6>
            <div className="sports-press-release">
              {sports?.media?.map((media, id) => (
                <div key={id} className="sports-media-box">
                  <div
                    className="sports-media-img"
                    style={{
                      backgroundImage: `url(https://data.skct.edu.in${media.img})`,
                    }}
                  />
                  <div className="sports-media-title">
                    <a
                      href={`https://data.skct.edu.in${media.img}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {media.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h6 id="Downloads" className="sports-section-title">
              downloads
            </h6>
            <div className="sports-pdf-table">
              {sports?.downloads?.map((event, id) => (
                <a
                  key={id}
                  style={{ textDecoration: "none" }}
                  href={`https://data.skct.edu.in${event.pdf}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sports-achievements">
                    <div className="sports-dld-icon">
                      <svg
                        width="32"
                        height="32"
                        fill="#2196F3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                    <div className="sports-achievement-title">{event.name}</div>
                  </div>
                </a>
              ))}
            </div>

            <div id="Contact" className="sports-contact-box">
              <h6 className="sports-section-title">contact</h6>
              {sports?.contact?.map((contact, id) => (
                <div key={id}>
                  <img
                    src={`https://data.skct.edu.in${contact.image}`}
                    alt={contact.image.replace("/media/", "")}
                  />
                  <p className="sports-contact-name">{contact.name}</p>
                  <p className="sports-contact-det">
                    Email:{" "}
                    <a
                      className="sports-contact-email"
                      href={`mailto:${contact.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.email}
                    </a>
                    <br />
                    Phone: {contact.phone_num}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

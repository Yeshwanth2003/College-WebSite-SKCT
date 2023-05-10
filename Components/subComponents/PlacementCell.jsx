/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Style/placementCell.css";
import React, { useEffect, useState, useCallback } from "react";

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

export default function Placementcell(props) {
  const [phv, setPhv] = useState({});
  useEffect(() => {
    fetch("https://data.skct.edu.in/phv/?format=json")
      .then((response) => response.json())
      .then((data) => setPhv(data));
  }, []);

  const slides = [];
  const imgs = phv?.slide !== undefined && phv?.slide;
  const len = imgs.length;

  for (let i = 0; i < len; i++) {
    slides.push({
      img: imgs[i].image,
      name: imgs[i].image.replace("/media/", ""),
    });
  }

  const stat = phv?.stat !== undefined && phv?.stat[0];

  return (
    <>
      <div className="pt-pcell">
        <h2 className="pt-pcell-header">placements</h2>
        <hr
          style={{
            height: "1px",
            borderWidth: "0",
            backgroundColor: "lightgray",
            margin: "14px 16px",
          }}
        />

        <div className="pt-pcell-contents">
          <div className="styled-slider">
            {imgs !== undefined && (
              <Imageslider slides={slides} fit="contain" fill="black" />
            )}
          </div>

          <div className="pt-pcell-overview">
            <div className="pt-pcell-outer" id="companies">
              <div className="pt-pcell-inner">
                <span>250 +</span>
                <p>companies for placements</p>
              </div>
            </div>

            <div className="pt-pcell-outer" id="offers">
              <div className="pt-pcell-inner">
                <span>800 +</span>
                <p>Offers Every Year</p>
              </div>
            </div>

            <div className="pt-pcell-outer" id="packages">
              <div className="pt-pcell-inner">
                <p>Highest package of Rs</p>
                <span>44 Lakhs</span>
              </div>
            </div>

            <div className="pt-pcell-outer" id="org">
              <div className="pt-pcell-inner">
                <p>
                  MoUs with Top Renowned organisation and Alumni Entrepreneurs
                </p>
              </div>
            </div>
          </div>

          <div className="pt-pcell-container">
            <div className="pt-pcell-outer-box">
              <div className="pt-pcell-container-box">
                <div className="pt-pcell-stats">
                  <div className="pt-pcell-tab">placement statistics</div>
                  <div className="pt-pcell-stat-outer">
                    <div className="pt-pcell-stat-graphs">
                      <div>
                        <img
                          className="pt-pcell-graphs"
                          src={`https://data.skct.edu.in${stat?.img1}`}
                          alt="Frame_379_1.png"
                          width="85%"
                        />
                      </div>
                      <div>
                        <img
                          className="pt-pcell-graphs"
                          src={`https://data.skct.edu.in${stat?.img2}`}
                          alt="IMG-20230206-WA0005.jpg"
                          width="85%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    height: "2px",
                    borderWidth: "0",
                    color: "whitesmoke",
                    backgroundColor: "whitesmoke",
                  }}
                />
                <div className="pt-pcell-contact-us">
                  <div className="pt-pcell-tab">contact us</div>
                  <div className="pt-pcell-contact-content">
                    Sri krishna College of Technology
                    <div className="pt-pcell-mail">
                      <svg
                        fill="#ff9800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                      <label>&ensp;</label>
                      <a
                        className="pt-pcell-mail-tag"
                        href="mailto:ptdivision@skct.edu.in"
                        target="_blank"
                      >
                        ptdivision@skct.edu.in
                      </a>
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

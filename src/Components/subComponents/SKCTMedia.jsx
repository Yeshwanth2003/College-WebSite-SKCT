import { useState } from "react";
import useImport from "../../CustomHooks/useImport";
import "./Style/skctMedia.css";

export default function SKCTMedia() {
  let [mediaData, setMediaData] = useState([]);
  let [hoverImg, setHI] = useState(null);
  let [overlayDisplay, setOVD] = useState("none");

  useImport("subComponentsData/Media@SKCT/mediaData", ({ err, data }) => {
    setMediaData(data);
  });

  function closeHover() {
    setHI(null);
    setOVD("none");
  }
  function setImagHover(val) {
    setHI(val);
    setOVD("block");
  }
  return (
    <>
      <div className="skctmedia-wrapper">
        <div className="skctmedia-contentdiv">
          <div className="skctmedia-headerDiv">
            <h2 className="skctmedia-h2">SKCT IN MEDIA</h2>
          </div>
          <div className="skctmedia-body">
            <div className="skctmedia-bodyNav">
              <a
                href="https://drive.google.com/open?id=1NQGGNUKR4JLGZky1WIpySurq68VFZZu5"
                className="skctmedia-driverLink"
              >
                More....
              </a>
            </div>
            <div className="skctmedia-actBody">
              <div className="skctmedia-actBody-inner">
                {mediaData.length !== 0 &&
                  mediaData.reverse().map((elem, index) => {
                    return (
                      <>
                        <MediaCard
                          IMG={`https://data.skct.edu.in${elem.img}`}
                          TEXT={elem.des}
                          setImagHover={setImagHover}
                        />
                      </>
                    );
                  })}
                <div
                  className="skctMedia-hoverDiv-overlay"
                  style={{ display: overlayDisplay }}
                ></div>
                {hoverImg !== null && (
                  <div className="skctmedia-actbody-hoverdiv">
                    <div className="skctMedia-hover-body">
                      <div className="skctMedia-hover-imgDiv">
                        <img
                          src={hoverImg}
                          alt=""
                          className="skctMedia-hover-img"
                        />
                      </div>
                    </div>
                    <div className="media-hoverdiv-close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="28px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="28px"
                        fill="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          closeHover();
                        }}
                      >
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function MediaCard({ IMG, TEXT, setImagHover }) {
  return (
    <>
      <div
        className="mediaCard-wrapper"
        onClick={() => {
          setImagHover(IMG);
        }}
      >
        <div className="mediaCard-imgDiv">
          <img src={IMG} alt="" className="mediaCard-img" />
        </div>
        <div className="mediaCard-textDiv">
          <p className="mediaCard-p">{TEXT}</p>
        </div>
      </div>
    </>
  );
}

import { useCallback, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import "./Style/cgallery.css";

export default function CGallery() {
  let [galleryData, setGalleryData] = useState([]);
  let [currentImage, setCurrentImage] = useState(null);
  let [thisIndex, setThisIndex] = useState(0);

  useFetch("https://data.skct.edu.in/cgallery/", ({ err, data }) => {
    setGalleryData(data.reverse());
  });

  const imgViewr = useCallback(
    function (link) {
      setCurrentImage(link);
      galleryData.forEach((elem, index) => {
        if (link === elem.img) {
          setThisIndex(index);
        }
      });
    },
    [galleryData]
  );

  function imgMover(side) {
    let val;
    if (side === 1) {
      val = --thisIndex;
    } else {
      // right
      val = ++thisIndex;
    }
    //     handle exceeding index
    if (val < 0) {
      val = galleryData.length - 1;
    } else if (val >= galleryData.length) {
      val = 0;
    }
    galleryData.forEach((elem, index) => {
      if (val === index) {
        setThisIndex(val);
        setCurrentImage(galleryData[val].img);
        return;
      }
    });
  }

  return (
    <>
      <div className="cgallery-wrapper">
        <div className="cgallery-container">
          <div className="cgallery-headingDiv">
            <h2 className="cgallery-h2">GALLERY</h2>
          </div>
          <div className="cgallery-body">
            {galleryData.length > 0 &&
              galleryData.map((elem) => {
                return (
                  <>
                    <GalleryCard
                      link={`https://data.skct.edu.in${elem.img}`}
                      elemLink={elem.img}
                      imgViewr={imgViewr}
                    />
                  </>
                );
              })}
            {currentImage && (
              <>
                <div className="overWrap">
                  <div className="overWrap-cgallery-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 -960 960 960"
                      width="30"
                      fill="white"
                      className="cgallery-close"
                      onClick={() => {
                        setCurrentImage(null);
                      }}
                    >
                      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                    </svg>
                    <img
                      src={`https://data.skct.edu.in${currentImage}`}
                      alt=""
                      className="overwrap-cgallery-image"
                    />
                    <div
                      className="overwrap-cgallery-right"
                      onClick={imgMover.bind(this, 0)}
                    ></div>
                    <div
                      className="overwrap-cgallery-left"
                      onClick={imgMover.bind(this, 1)}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function GalleryCard({ link, imgViewr, elemLink }) {
  return (
    <>
      <div className="cgallery-imgDiv" onClick={imgViewr.bind(this, elemLink)}>
        <img loading="lazy" src={link} alt="" className="cgallery-img" />
      </div>
    </>
  );
}

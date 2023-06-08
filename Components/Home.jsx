import "./Style/home.css";
import { lazy, Suspense, useEffect } from "react";
import Header, { MobileNav } from "./Header";
import ContextTag from "./ContextFile";
import Loading from "./Loading";
import FooterNav from "./FooterNav";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  // moveTop handler
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY >= 300) {
        document.querySelector("#scrollDiv").classList.add("showScroll-Div");
      } else {
        document.querySelector("#scrollDiv").classList.remove("showScroll-Div");
      }
    };
  }, []);

  // mobilenav slider
  function setNavDisplay() {
    let slider = document.getElementById("mobileNavSliderDiv");
    let sliderParent = document.getElementById("mobileNavSliderParent");
    sliderParent.classList.toggle("home-mobileNavSlider-display");
    slider.classList.toggle("home-mobileNav-slide-SildeIn");
  }

  return (
    <>
      <div className="home-overall-div">
        <header className="home-header-wrapper">
          <ContextTag.Provider value={{ setNavDisplay }}>
            <Header />
          </ContextTag.Provider>
        </header>
        <MyRouter />
        <FooterNav />
      </div>
      <div id="mobileNavSliderParent" className="home-mobileNavSlider">
        <div id="mobileNavSliderDiv" className="home-mobileNav-slide">
          <div className="mobileNavHolder">
            <ContextTag.Provider value={{ setNavDisplay }}>
              <MobileNav />
            </ContextTag.Provider>
          </div>
        </div>
      </div>
      <div className="home-social-links">
        <ul className="home-social-links-ul">
          <li className="home-social-links-li" style={{ "--i": 0 }}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/skctofficial/"
              className="home-social-link-a"
            >
              <div className="fb sociLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="15px"
                  height="15px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M32,11h5c0.552,0 1,-0.448 1,-1v-6.737c0,-0.524 -0.403,-0.96 -0.925,-0.997c-1.591,-0.113 -4.699,-0.266 -6.934,-0.266c-6.141,0 -10.141,3.68 -10.141,10.368v6.632h-7c-0.552,0 -1,0.448 -1,1v7c0,0.552 0.448,1 1,1h7v19c0,0.552 0.448,1 1,1h7c0.552,0 1,-0.448 1,-1v-19h7.222c0.51,0 0.938,-0.383 0.994,-0.89l0.778,-7c0.066,-0.592 -0.398,-1.11 -0.994,-1.11h-8v-5c0,-1.657 1.343,-3 3,-3z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </li>
          <li className="home-social-links-li" style={{ "--i": 1 }}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://twitter.com/skct_official"
              className="home-social-link-a"
            >
              <div className="twitter sociLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="15px"
                  height="15px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </li>
          <li className="home-social-links-li" style={{ "--i": 2 }}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/skct__official/"
              className="home-social-link-a"
            >
              <div className="instagram sociLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="15px"
                  height="15px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </li>
          <li className="home-social-links-li" style={{ "--i": 3 }}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/skct__official/"
              className="home-social-link-a"
            >
              <div className="linkedin sociLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="15px"
                  height="15px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </li>
          <li className="home-social-links-li" style={{ "--i": 4 }}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href=" https://www.youtube.com/channel/UCLtRq0iFEf2BQ2-VECJBUbA"
              className="home-social-link-a"
            >
              <div className="youtube sociLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="15px"
                  height="15px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M13,5l3,9v6h2v-6l3,-9h-2l-2,6l-2,-6zM24,9c-1.06641,0 -1.58984,0.16797 -2.24219,0.70313c-0.625,0.52734 -0.79687,0.93359 -0.75781,2.29688v5c0,0.99609 0.16406,1.65234 0.76563,2.23438c0.625,0.58203 1.21484,0.76563 2.23438,0.76563c1.06641,0 1.64844,-0.18359 2.25,-0.76562c0.625,-0.55859 0.75,-1.23828 0.75,-2.23437v-5c0,-0.88281 -0.15625,-1.71875 -0.76172,-2.27734c-0.625,-0.57422 -1.26953,-0.72266 -2.23828,-0.72266zM29,9v9c0,0.97266 0.98047,2 2,2c1.01953,0 1.55859,-0.51172 2,-1v1h2v-11h-2v8c-0.01172,0.68359 -0.81641,1 -1,1c-0.20703,0 -1,-0.04297 -1,-1v-8zM24,11c0.30078,0 1,-0.00391 1,1v5c0,0.96875 -0.67578,1 -1,1c-0.30078,0 -1,-0.01172 -1,-1v-5c0,-0.81641 0.43359,-1 1,-1zM10,22c-3.59375,0 -6,2.38281 -6,6v9.5c0,3.61719 2.40625,6.5 6,6.5h30c3.59375,0 6,-2.38281 6,-6v-10c0,-3.61719 -2.40625,-6 -6,-6zM12,26h6v2h-2v12h-2v-12h-2zM26,26h2v4c0.23047,-0.35937 0.57422,-0.64453 0.90234,-0.80469c0.32031,-0.16406 0.64453,-0.25781 0.97266,-0.25781c0.64844,0 1.15625,0.23438 1.50391,0.67188c0.34766,0.44141 0.62109,1.02734 0.62109,1.89063v6c0,0.74219 -0.25,1.20313 -0.57812,1.59766c-0.32031,0.39453 -0.80078,0.89453 -1.42187,0.90234c-1.05078,0.01172 -1.61328,-0.55078 -2,-1v1h-2zM18,29h2v8c0,0.23047 0.26953,1.00781 1,1c0.8125,-0.00781 0.82031,-0.76562 1,-1v-8h2v11h-2v-1c-0.37109,0.4375 -0.5625,0.57422 -0.98047,0.78125c-0.41406,0.23438 -0.83594,0.21875 -1.22656,0.21875c-0.48437,0 -1.03516,-0.4375 -1.29297,-0.76562c-0.23047,-0.30078 -0.5,-0.60937 -0.5,-1.23437zM36.19922,29c0.94922,0 1.61719,0.20313 2.12109,0.73438c0.51563,0.53125 0.67969,1.15234 0.67969,2.15234v3.11328h-4v1.54688c0,0.55859 0.07422,0.91406 0.21875,1.125c0.13672,0.23047 0.41406,0.33203 0.78125,0.32813c0.40625,-0.00391 0.66406,-0.08594 0.80078,-0.26953c0.14063,-0.16406 0.19922,-0.62891 0.19922,-1.23047v-0.5h2v0.59375c0,1.08984 -0.08594,1.90234 -0.625,2.43359c-0.50781,0.55859 -1.30078,0.81641 -2.33984,0.81641c-0.94922,0 -1.69141,-0.28125 -2.22266,-0.85937c-0.53125,-0.57812 -0.80859,-1.37109 -0.80859,-2.39062v-4.70703c0,-0.90625 0.31641,-1.57812 0.89844,-2.17578c0.46875,-0.48047 1.34766,-0.71094 2.29688,-0.71094zM29,30.5c-0.55078,0 -0.99219,0.49609 -1,1v6c0.00781,0.28906 0.44922,0.5 1,0.5c0.55078,0 1,-0.42578 1,-0.97656v-5.02344c0,-1 -0.44922,-1.5 -1,-1.5zM36,31c-0.55078,0 -0.99219,0.46484 -1,1v1h2v-1c0,-0.61328 -0.44922,-1 -1,-1z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div id="scrollDiv" className="scrollTo-topDiv" onClick={ScrollTop}>
        <svg
          enable-background="new 0 0 32 32"
          height="40px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" />
        </svg>
      </div>
    </>
  );
}
function ScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function MyRouter() {
  return (
    <>
      <Routes>
        {/* Loop Back Route */}
        <Route
          path="*"
          element={(() => {
            let Component = lazy(() => import("./MainHome"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route path="/allevents">
        <Route
          index
          element={(() => {
            let Component = lazy(() => import("./subComponents/AllEvents"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path=":val"
          element={(() => {
            let Component = lazy(() => import("./subComponents/EventDesc"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        </Route>
        {/* About Us */}
        <Route
          path="/overView"
          element={(() => {
            let Component = lazy(() =>
              import("./subComponents/VisionAndMission")
            );
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/management"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Management"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/approvals"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Approval"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/skctmedia"
          element={(() => {
            let Component = lazy(() => import("./subComponents/SKCTMedia"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/skctdigest"
          element={(() => {
            let Component = lazy(() => import("./subComponents/DailyNews"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* Academics */}
        <Route
          path="/department"
          element={(() => {
            let Component = lazy(() => import("./subComponents/departments/DepartmentMain"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/academicsCalender"
          element={(() => {
            let Component = lazy(() => import("./subComponents/AcaCalander"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/proffesionalAssociation"
          element={(() => {
            let Component = lazy(() => import("./subComponents/ProffessionalAsso"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* exam */}
        <Route
          path="/exam/staff"
          element={(() => {
            let Component = lazy(() => import("./subComponents/CeoOffice"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/exam/forms"
          element={(() => {
            let Component = lazy(() => import("./subComponents/XmForms"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/regulations"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Regulations"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/exam/results"
          element={(() => {
            let Component = lazy(() => import("./subComponents/XmResults"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/exam/notify"
          element={(() => {
            let Component = lazy(() => import("./subComponents/XmNotification"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* Campus Life */}
        <Route
          path="/facilities"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Facilities"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/library"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Library"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/sports"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Sports"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/hostel"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Hostel"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/nss_yrc"
          element={(() => {
            let Component = lazy(() => import("./subComponents/CampusNssYRC"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/social"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Social"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/gallery"
          element={(() => {
            let Component = lazy(() => import("./subComponents/CGallery"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* placement */}
        <Route
          path="/placement/placement_cell"
          element={(() => {
            let Component = lazy(() => import("./subComponents/PlacementCell"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/recruiters"
          element={(() => {
            let Component = lazy(() => import("./subComponents/SubRecuritiers"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/placement/training"
          element={(() => {
            let Component = lazy(() => import("./subComponents/PTraining"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* research */}
        <Route
          path="/academicResearch"
          element={(() => {
            let Component = lazy(() => import("./subComponents/AcademicResearch"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/iprCell"
          element={(() => {
            let Component = lazy(() => import("./subComponents/IPRcell"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* admissions */}
        <Route
          path="/admissions"
          element={(() => {
            let Component = lazy(() => import("./subComponents/Admission"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* Industry Connect */}
        <Route
          path="/mous"
          element={(() => {
            let Component = lazy(() => import("./subComponents/MoUs"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/coe"
          element={(() => {
            let Component = lazy(() => import("./subComponents/COE"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/industry_supported_lab"
          element={(() => {
            let Component = lazy(() => import("./subComponents/IndustrySupportedLab"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        {/* UpperHead */}
        <Route
          path="/coreValues"
          element={(() => {
            let Component = lazy(() => import("./subComponents/UpperHead/CoreValues"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/coreValues"
          element={(() => {
            let Component = lazy(() => import("./subComponents/UpperHead/CoreValues"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/iic"
          element={(() => {
            let Component = lazy(() => import("./subComponents/UpperHead/IIC"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/nisp"
          element={(() => {
            let Component = lazy(() => import("./subComponents/UpperHead/NISP"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route
          path="/contact"
          element={(() => {
            let Component = lazy(() => import("./subComponents/UpperHead/Contact"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
      </Routes>
    </>
  );
}
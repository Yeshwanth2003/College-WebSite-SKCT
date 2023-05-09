import "./Style/departmentMain.css";
import Header from "../../Header";
import ContextTag from "../../ContextFile";
import { Suspense, useEffect, lazy } from "react";
import DataMapper from "./DepartmentDataMapper";
import Loader from "../../Loading";
import DepartmentHeader from "./DepartmentHeader";
import DeptFooter from "./DeptFooter";
import clgLogoImg from '../../asserts/collegeHeaderLogo.png'

export default function DepartmentMain() {
  if (window.location.pathname === "/departments") {
    return <DepartmentLister />;
  } else {
    return <DepartmentWebWrapper />;
  }
}

function DepartmentLister() {
  return (
    <>
      <div className="departmentHome-mainDiv">
        <div className="departmentHome-contentDiv">
          <header className="departmentHome-header">
            <h2 className="departmentHome-heading">DEPARTMENTS</h2>
          </header>
          <main className="departmentHome-body">
            <ul className="departmentHome-ul">
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/CIVIL/home"
                        className="departmentHome-summeryLink"
                      >
                        CIVIL ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Civil Engineering
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      M.E Structural Engineering
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/CSE/home"
                        className="departmentHome-summeryLink"
                      >
                        COMPUTER SCIENCE AND ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Computer Science And Engineering
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      B.Tech Artificial Intelligence And Data Science
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      B.E Computer Science And Engineering{"(Cyber Security)"}
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      B.E Computer Science And Engineering
                      {"(Internet Of Things)"}
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      B.E Computer Science And Engineering
                      {"(Artificial Intelligence And Machine Learning)"}
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      M.E Computer Science And Engineering
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/ECE/home"
                        className="departmentHome-summeryLink"
                      >
                        ELECTRONIS AND COMMUNICATION ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Electronics And Communication Engineering
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      M.E Applied Electronics
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/EEE/home"
                        className="departmentHome-summeryLink"
                      >
                        ELECTRICAL AND ELECTRONICS ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Electrical And Electronics Engineering
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      M.E Power System Engineering
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/ICE/home"
                        className="departmentHome-summeryLink"
                      >
                        INSTRUMENTATION AND CONTROL ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Instrumentation And Control Engineering
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/MECH/home"
                        className="departmentHome-summeryLink"
                      >
                        MECHANICAL ENGINEERING
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.E Mechanical Engineering
                    </li>
                    <li className="departmentHome-detailsUl-listz">
                      M.E Engineering Design Program
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/IT/home"
                        className="departmentHome-summeryLink"
                      >
                        INFORMATION TECHNOLOGY
                      </a>
                    </div>
                  </summary>
                  <ul className="departmentHome-detailsUl">
                    <li className="departmentHome-detailsUl-listz">
                      B.Tech Information Technology
                    </li>
                  </ul>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/S&H/home"
                        className="departmentHome-summeryLink"
                      >
                        SCIENCE AND HUMANITIES
                      </a>
                    </div>
                  </summary>
                </details>
              </li>
              <li className="departmentHome-li">
                <details open className="departmentHome-detalis">
                  <summary className="departmentHome-Summery">
                    <div className="departmentHome-summeryDiv">
                      <a
                        href="/departments/SOM/home"
                        className="departmentHome-summeryLink"
                      >
                        MASTER OF BUSINESS ADMINISTRATION
                      </a>
                    </div>
                  </summary>
                </details>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

function DepartmentWebWrapper() {
  useEffect(() => {
    window.addEventListener("scroll",
    function () {
      if (window.scrollY >= 300) {
        document.querySelector("#scrollDiv").classList.add("showScroll-Div");
      } else {
        document.querySelector("#scrollDiv").classList.remove("showScroll-Div");
      }
    })
  });

  function setNavDisplay() {
    let slider = document.getElementById("deptNavSliderDiv");
    let sliderParent = document.getElementById("deptNavSliderParent");
    sliderParent.classList.toggle("dept-mobileNavSlider-display");
    slider.classList.toggle("dept-mobileNav-slide-SildeIn");
  }

  return (
    <>
      <div className="departmentWrapper-main">
        <header className="departmentWrapper-header">
          <ContextTag.Provider value={{ setNavDisplay }}>
            <Header />
          </ContextTag.Provider>
        </header>
        <main className="departmentWrapper-body">
          <div className="departmentWrapper-navWrapper">
            <DepartmentHeader DataMapper={DataMapper} />
          </div>
          <div className="departmentWrapper-bodyWrapper">
            <DepartmentInternalRouter />
            <DeptFooter />
          </div>
        </main>
      </div>
      <div id="deptNavSliderParent" className="dept-mobileNavSlider">
        <div id="deptNavSliderDiv" className="dept-mobileNav-slide">
          <div className="mobileNavHolder">
            <div
              className="mobileNav-outer"
              onClick={() => setNavDisplay()}
            ></div>
            <div className="mobileNav-contentsHoldz">
              <div className="deptMobileNav-logoDiv">
                <div className="deptMobileNav-logoDiv-imgDiv">
                  <img src={clgLogoImg} alt="" className="deptMobileNav-logoDiv-img" />
                </div>
              </div>
              <DepartmentHeader DataMapper={DataMapper} />
            </div>
          </div>
        </div>
      </div>
      <div className="home-social-links">
        <ul className="home-social-links-ul">
          <li className="home-social-links-li" style={{ "--i": 0 }}>
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
          </li>
          <li className="home-social-links-li" style={{ "--i": 1 }}>
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
          </li>
          <li className="home-social-links-li" style={{ "--i": 2 }}>
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
          </li>
          <li className="home-social-links-li" style={{ "--i": 3 }}>
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
          </li>
          <li className="home-social-links-li" style={{ "--i": 4 }}>
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

function DepartmentInternalRouter() {
  // civil Routers
  if (window.location.pathname.startsWith("/departments/CIVIL", 0)) {
    if (window.location.pathname === "/departments/CIVIL/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CIVIL/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/CIVIL/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CIVIL/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CIVIL/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CIVIL/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CIVIL/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/CIVIL/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/CIVIL/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="CIVIL" />
            </Suspense>
          </>
        );
      } else {
        alert("eve civil");

        return (
          <>
            {"hello<br>there"}
            {/* further event */}
          </>
        );
      }
    }
    else if (window.location.pathname === "/departments/CIVIL/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/higher_studies") {
      let Component = lazy(() => import("./DeptFiles/DeptHS"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CIVIL/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CIVIL" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // CSE router
  else if (window.location.pathname.startsWith("/departments/CSE", 0)) {
    if (window.location.pathname === "/departments/CSE/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/CSE/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/CSE/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/CSE/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/CSE/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="CSE" />
            </Suspense>
          </>
        );
      } else {
        alert("eve cse");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/CSE/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/CSE/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="CSE" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // ECE router
  else if (window.location.pathname.startsWith("/departments/ECE", 0)) {
    if (window.location.pathname === "/departments/ECE/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/ECE/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ECE/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/ECE/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/ECE/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="ECE" />
            </Suspense>
          </>
        );
      } else {
        alert("eve ECE");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/ECE/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ECE/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ECE" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // EEE router
  else if (window.location.pathname.startsWith("/departments/EEE", 0)) {
    if (window.location.pathname === "/departments/EEE/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/EEE/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/EEE/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/EEE/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/EEE/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="EEE" />
            </Suspense>
          </>
        );
      } else {
        alert("eve EEE");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/EEE/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/EEE/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="EEE" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  } // ICE router
  else if (window.location.pathname.startsWith("/departments/ICE", 0)) {
    if (window.location.pathname === "/departments/ICE/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/ICE/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/ICE/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/ICE/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/ICE/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="ICE" />
            </Suspense>
          </>
        );
      } else {
        alert("eve ICE");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/ICE/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/ICE/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="ICE" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // MECH router
  else if (window.location.pathname.startsWith("/departments/MECH", 0)) {
    if (window.location.pathname === "/departments/MECH/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/MECH/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/MECH/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/MECH/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/MECH/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="MECH" />
            </Suspense>
          </>
        );
      } else {
        alert("eve IT");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/MECH/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/MECH/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="MECH" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // IT router
  else if (window.location.pathname.startsWith("/departments/IT", 0)) {
    if (window.location.pathname === "/departments/IT/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/IT/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/IT/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/IT/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/IT/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="IT" />
            </Suspense>
          </>
        );
      } else {
        alert("eve IT");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/IT/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/IT/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="IT" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // S&H router
  else if (window.location.pathname.startsWith("/departments/S&H", 0)) {
    if (window.location.pathname === "/departments/S&H/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/S&H/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/S&H/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/S&H/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/S&H/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="S&H" />
            </Suspense>
          </>
        );
      } else {
        alert("eve IT");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/S&H/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/S&H/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="S&H" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  }
  // SOM router
  else if (window.location.pathname.startsWith("/departments/SOM", 0)) {
    if (window.location.pathname === "/departments/SOM/home") {
      let Component = lazy(() => import("./DeptFiles/DepartmentHome"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component DataMapper={DataMapper} currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/faculty") {
      let Component = lazy(() => import("./DeptFiles/DeptFaculty"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname === "/departments/SOM/AcademicsCalender"
    ) {
      let Component = lazy(() => import("./DeptFiles/DeptAccCalander"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/BE_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBE"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/ME_program") {
      let Component = lazy(() => import("./DeptFiles/DeptME"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/PhD_program") {
      let Component = lazy(() => import("./DeptFiles/DeptPhD"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/Btech_program") {
      let Component = lazy(() => import("./DeptFiles/DeptBtech"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (window.location.pathname === "/departments/SOM/library") {
      let Component = lazy(() => import("./DeptFiles/DeptLib"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOM" />
          </Suspense>
        </>
      );
    } else if (
      window.location.pathname.startsWith("/departments/SOM/events", 0)
    ) {
      console.log(window.location.pathname);
      if (window.location.pathname === "/departments/SOM/events") {
        let Component = lazy(() => import("./DeptFiles/DeptEvents"));
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Component currentDepartment="SOM" />
            </Suspense>
          </>
        );
      } else {
        alert("eve IT");
        return <>{/* further event */}</>;
      }
    }
    else if (window.location.pathname === "/departments/SOH/club") {
      let Component = lazy(() => import("./DeptFiles/DeptClub"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/lab") {
      let Component = lazy(() => import("./DeptFiles/DeptLab"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/placements") {
      let Component = lazy(() => import("./DeptFiles/DeptPlacement"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/rankholder") {
      let Component = lazy(() => import("./DeptFiles/DeptRH"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/association") {
      let Component = lazy(() => import("./DeptFiles/DeptAssociation"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/bestoutgoingstudent") {
      let Component = lazy(() => import("./DeptFiles/DeptBOStudent"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH"/>
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/Disguinshed_alumini") {
      let Component = lazy(() => import("./DeptFiles/DeptDisAlumni"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/testimonial") {
      let Component = lazy(() => import("./DeptFiles/DeptAlumTest"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else if (window.location.pathname === "/departments/SOH/gallery") {
      let Component = lazy(() => import("./DeptFiles/DeptGallery"));
      return (
        <>
          <Suspense fallback={<Loader />}>
            <Component currentDepartment="SOH" />
          </Suspense>
        </>
      );
    }
    else{
      window.location.pathname='/'
    }
  } 
  // end route
  else {
    window.location.pathname = "/";
  }
}
function ScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

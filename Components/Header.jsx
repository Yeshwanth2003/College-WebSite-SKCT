import "./Style/header.css";
import { useContext, useEffect } from "react";
import ContextTag from "./ContextFile";
import ClgLogoImg from "./asserts/collegeHeaderLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="Header-overall">
        <LaptopHeader />
        <MobileHeader />
      </div>
    </>
  );
}
function HeaderLogo() {
  return (
    <>
      <div className="header-LogoWrapper">
        <img className="header-logoImg" src={ClgLogoImg} alt="" />
      </div>
    </>
  );
}

function LaptopHeader() {
  return (
    <>
      <div className="laptopHeader_wrapper">
        <div className="laptopHeader-upperPart">
          <div className="laptopHeader-upperLink-Holder">
            <ul className="laptopHeader-upperLink-ul">
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <Link to="/coreValues" className="laptopHeader-addLink">
                      Core Values
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <Link
                      to={"/IQAC"}
                      className="laptopHeader-addLink"
                      style={{ color: "gold" }}
                    >
                      IQAC
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <Link
                      to="/iic"
                      className="laptopHeader-addLink"
                      style={{ color: "gold" }}
                    >
                      IIC
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="http://117.239.103.162/"
                      className="laptopHeader-addLink"
                    >
                      Alumni
                    </a>
                  </h5>
                </div>
              </li>
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <Link to="/nisp" className="laptopHeader-addLink">
                      NISP
                    </Link>
                  </h5>
                </div>
              </li>
              <li className="laptopHeader-upperLink-li">
                <div className="laptopHeader-upperLink-contentDiv">
                  <h5>
                    <Link to="/contact" className="laptopHeader-addLink">
                      Contact Us
                    </Link>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="laptopHeader-lowerPart">
          <div className="laptopHeader-logoDiv">
            <HeaderLogo />
          </div>
          <nav className="laptopHeader-navBar">
            <ul className="laptopHeader-ul-lower">
              <li className="laptopHeader-li-lower">
                <div
                  className="laptopHeader-li-ContentDiv"
                  style={{ justifyContent: "center" }}
                >
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Home
                    </Link>
                  </h4>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv ">
                  <h4 className="laptop-linkHeading">
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      About Us
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv aboutUs-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to={"/overView"}
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Vision & Mission
                        </li>
                      </Link>
                      <Link
                        to={"/management"}
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Management</li>
                      </Link>
                      <Link
                        to="/approvals"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Approvals & Accreditation
                        </li>
                      </Link>
                      <Link
                        to="/skctmedia"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Media @ SKCT
                        </li>
                      </Link>
                      <Link
                        to="/skctdigest"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Daily News Letter @ SKCT
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Academics
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv academics-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/department"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Department</li>
                      </Link>
                      <Link
                        to="/academicsCalender"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Academics Calendar
                        </li>
                      </Link>
                      <Link
                        to="/proffesionalAssociation"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Professional Association
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Examination
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv examination-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/exam/staff"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">CEO Office</li>
                      </Link>
                      <Link
                        to="/academicsCalender"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li laptopHeader-dropDown-li-SubListContainer">
                          TimeTable
                          <div className="laptopHeader-dropDown-subListDiv">
                            <ul className="laptopHeader-dropDown-subListUl">
                              <Link
                                to="/"
                                className="laptopHeader-dropDown-subListLink"
                                style={{ fontSize: "1em" }}
                              >
                                <li className="laptopHeader-dropDown-li laptopHeader-dropDown-subListLi">
                                  End Sem Exam
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </li>
                      </Link>
                      <Link
                        to="/exam/forms"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Forms</li>
                      </Link>
                      <Link
                        to="/regulations"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Regulations
                        </li>
                      </Link>
                      <Link
                        to="/exam/results"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Results</li>
                      </Link>
                      <Link
                        to="/exam/notify"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Notification
                        </li>
                      </Link>
                      <a
                        href="https://nad.gov.in/"
                        target={"_blank"}
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                        rel="noreferrer"
                      >
                        <li className="laptopHeader-dropDown-li">NAD</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Campus Life
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv CL-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/facilities"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Facilities</li>
                      </Link>
                      <Link
                        to="/library"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Library</li>
                      </Link>
                      <Link
                        to="/sports"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Sports</li>
                      </Link>
                      <Link
                        to="/hostel"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Hostel</li>
                      </Link>
                      <Link
                        to="/nss_yrc"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">NSS/YRC</li>
                      </Link>
                      <Link
                        to="/social"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Social and Community Services
                        </li>
                      </Link>
                      <Link
                        to="/gallery"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Gallery</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Placement
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv placements-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/placement/placement_cell"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Placement Cell
                        </li>
                      </Link>
                      <Link
                        to="/recruiters"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Recruiters</li>
                      </Link>
                      <Link
                        to="/placement/training"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">Training</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Research
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv research-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/academicResearch"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Academic Research
                        </li>
                      </Link>
                      <Link
                        to="/iprCell"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">IPR Cell</li>
                      </Link>
                      <Link
                        to="/researchCenter"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Research Centers
                        </li>
                      </Link>
                      <Link
                        to="/iic"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Incubation Centers
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/admissions"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Admissions
                    </Link>
                  </h4>
                </div>
              </li>
              <li className="laptopHeader-li-lower">
                <div className="laptopHeader-li-ContentDiv">
                  <h4>
                    <Link
                      to="/"
                      className="laptopHeader-links laptopheader-mainLink"
                    >
                      Industry Connect
                    </Link>
                  </h4>
                  <div className="laptopHeader-dropDownDiv IC-dropDown-Lap">
                    <ul className="laptopHeader-dropDown-ul">
                      <Link
                        to="/mous"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">MoUS</li>
                      </Link>
                      <Link
                        to="/coe"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">COE</li>
                      </Link>
                      <Link
                        to="/industry_supported_lab"
                        className="laptopHeader-links"
                        style={{ fontSize: "1em" }}
                      >
                        <li className="laptopHeader-dropDown-li">
                          Industry Supported Lab
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function MobileHeader() {
  let { setNavDisplay } = useContext(ContextTag);

  function toogleMobileNav() {
    setNavDisplay();
  }

  useEffect(() => {
    document.querySelectorAll("a.mobile-nav-link").forEach((elem) => {
      elem.addEventListener("click", () => {
        toogleMobileNav();
      });
    });
  });

  return (
    <>
      <div className="header-mobile">
        <div className="mobile-trigram-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="40%"
            height="30%"
            viewBox="0 0 122.879 103.609"
            fill="white"
            onClick={() => toogleMobileNav()}
            className="mobile-trigram-svg"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
              />
            </g>
          </svg>
        </div>
        <div className="mobile-header-content-div">
          <h2 className="mobile-header-heading">SKCT</h2>
        </div>
      </div>
    </>
  );
}

export function MobileNav() {
  let { setNavDisplay } = useContext(ContextTag);

  function toogleMobileNav() {
    setNavDisplay();
  }
  function swipeFun(event) {
    // console.log(event);
  }
  return (
    <>
      <div className="mobile-nav-body" onMouseDown={(event) => swipeFun(event)}>
        <div
          className="mobile-nav-release"
          onClick={() => toogleMobileNav()}
        ></div>
        <nav className="mobile-nav">
          <HeaderLogo />
          <div className="mobile-nav-content-holder-div">
            <ul className="mobile-nav-content-ul">
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      version="1.1"
                      viewBox="0 0 16 12"
                    >
                      <polygon points="8 0 16 6 13 6 13 12 9 12 9 9 7 9 7 12 3 12 3 6 0 6" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/">
                        Home
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 576 512"
                    >
                      <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/admissions">
                        Admissions
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 576 512"
                    >
                      <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/nisp">
                        NISP
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="examinationInput"
                  name="innerDiv2Openner"
                />
                <div className="mobile-nav-innerDiv1 ">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 576 512"
                    >
                      <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="examinationInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">Examination</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-examinationHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-examination mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/exam/staff">
                              COE Office
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/management">
                              Time Table
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/exam/forms">
                              Forms
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/regulations">
                              Regulations
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/exam/results"
                            >
                              Results
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/exam/notify">
                              Notification
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <a
                              className="mobile-nav-link"
                              target={"_blank"}
                              rel="noreferrer"
                              href="https://nad.gov.in/"
                            >
                              NAD
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="aboutUsInput"
                  name="innerDiv2Openner"
                />
                <div className="mobile-nav-innerDiv1 ">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 25 25"
                      height="25"
                      viewBox="0 0 24 24"
                      width="25"
                    >
                      <g>
                        <rect fill="none" height="24" width="24" />
                      </g>
                      <g>
                        <g />
                        <g>
                          <path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                          <path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                          <path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </g>
                      </g>
                      <g display="none">
                        <g display="inline" />
                        <g display="inline">
                          <path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
                          <path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
                          <path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="aboutUsInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">About Us</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-abUsHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-aboutUs mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/overView">
                              Vision & Mission
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/management">
                              Management
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/approvals">
                              Approvals & Accreditation
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/skctmedia">
                              Media @ SKCT
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/skctdigest">
                              Daily News Letter @ SKCT
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="academicsInput"
                  name="innerDiv2Openner"
                />
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M45.4 37.9L27.1 19.6c1.8-4.6.8-10.1-2.9-13.8-4-4-10-4.8-14.8-2.5l8.7 8.7-6.1 6.1-8.7-8.7C1 14.2 1.8 20.2 5.8 24.2c3.7 3.7 9.2 4.7 13.8 2.9l18.3 18.3c.8.8 2.1.8 2.8 0l4.7-4.7c.8-.7.8-2 0-2.8z" />
                      <path clip-rule="evenodd" d="M0 0h48v48H0z" fill="none" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="academicsInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">Academics</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-acaHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-academics mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/department">
                              Department
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/academicsCalender"
                            >
                              Academics Calendar
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/proffesionalAssociation"
                            >
                              Professional Association
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="CLInput"
                />
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      viewBox="0 0 25 25"
                      width="25"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="CLInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">Campus Life</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-CamHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-CL mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/facilities">
                              Facilities
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/library">
                              Library
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/sports">
                              Sports
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/hostel">
                              Hostel
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/nss_yrc">
                              NSS/YRC
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/gallery">
                              Gallery
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="placementInput"
                />
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="placementInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">Placements</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-placementHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-placements mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/placement/placement_cell"
                            >
                              Placement Cell
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/recruiters">
                              Recruiters
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/placement/training"
                            >
                              Training
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="researchInput"
                />
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      viewBox="0 0 25 25"
                      width="25"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="researchInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">Research</span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-researchHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-research mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/academicResearch"
                            >
                              Academic Research
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/iprCell">
                              IPR Cell
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/researchCenters"
                            >
                              Research Centers
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/">
                              Incubation Center
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <input
                  className="mobile-nav-opener-input"
                  type="checkbox"
                  id="ICInput"
                />
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <label
                      className="mobile-nav-opener-label"
                      htmlFor="ICInput"
                    >
                      <div className="mobile-nav-linkDiv">
                        <span className="mobile-nav-link">
                          Industry Connect
                        </span>
                      </div>
                      <div className="mobile-nav-innerDiv2-handler mobile-nav-innerDiv2-ICHAN"></div>
                    </label>
                  </div>
                </div>
                <div className="mobile-nav-innerDiv2-IC mobile-nav-innerDiv2">
                  <ul className="mobile-nav-innerDiv2-ul">
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/mous">
                              MoUS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link className="mobile-nav-link" to="/coe">
                              COE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mobile-nav-content-li">
                      <div className="mobile-nav-innerDiv1">
                        <div className="mobile-nav-link-logoDiv">
                          {/* Logo Here */}
                        </div>
                        <div className="mobile-nav-link-content">
                          <div className="mobile-nav-linkDiv">
                            <Link
                              className="mobile-nav-link"
                              to="/industry_supported_lab"
                            >
                              Industry Supported Lab
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                    >
                      <path d="M512 597.994667q108.010667 0 225.002667 46.997333t116.992 123.008l0 85.994667-684.010667 0 0-85.994667q0-76.010667 116.992-123.008t225.002667-46.997333zM512 512q-69.994667 0-120-50.005333t-50.005333-120 50.005333-121.002667 120-51.008 120 51.008 50.005333 121.002667-50.005333 120-120 50.005333z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/">
                        Alumni
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 576 512"
                    >
                      <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/feepayment">
                        Online Fees Payment
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mobile-nav-content-li">
                <div className="mobile-nav-innerDiv1">
                  <div className="mobile-nav-link-logoDiv">
                    <svg
                      className="mobile-nav-icon"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                    </svg>
                  </div>
                  <div className="mobile-nav-link-content">
                    <div className="mobile-nav-linkDiv">
                      <Link className="mobile-nav-link" to="/contact">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

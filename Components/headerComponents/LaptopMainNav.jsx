import { Link } from "react-router-dom";

export default function LaptopMainNav() {
  return (
    <>
      <ul className="laptopHeader-ul-lower">
        {/* we had an home */}
        <li className="laptopHeader-li-lower">
          <div className="laptopHeader-li-ContentDiv ">
            <h4 className="laptop-linkHeading">
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
                  <li className="laptopHeader-dropDown-li">Vision & Mission</li>
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
                  <li className="laptopHeader-dropDown-li">Media @ SKCT</li>
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
                          to="/endSemTimetable"
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
                  <li className="laptopHeader-dropDown-li">Regulations</li>
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
                  <li className="laptopHeader-dropDown-li">Notification</li>
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
                  <li className="laptopHeader-dropDown-li">Placement Cell</li>
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
                  <li className="laptopHeader-dropDown-li">Research Centers</li>
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
              <Link to="/" className="laptopHeader-links laptopheader-mainLink">
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
    </>
  );
}

import { useEffect, useState } from "react";
import "./Style/footerNav.css";

export default function FooterNav() {
  let [footD1, setFootD1] = useState([]);
  let [footD2, setFootD2] = useState([]);
  let AICTEData = [
    {
      pdf: "/",
      name: "AICTE 1993-2005",
    },
    {
      pdf: "/",
      name: "AICTE 2005-2012",
    },
    {
      pdf: "/",
      name: "AICTE 2012-2019",
    },
  ];
  let GRS = [
    {
      pdf: "https://docs.google.com/forms/d/e/1FAIpQLSepr_JgMYQmkbzamZT5sZBUbOZUhUxqxUfqJmA9nflbJfMhzA/viewform",
      name: "Click here",
    },
  ];
  let FBForm = [
    {
      pdf: "https://students-feedback-skct-edu.netlify.app/",
      name: "Student",
    },
    {
      pdf: "https://faculty-feedback-skct-edu.netlify.app/",
      name: "Faculty",
    },
  ];
  let instutionsData = [
    {
      pdf: "https://www.srikrishna.ac.in/",
      name: "Sri Krishna Institutions",
    },
    {
      pdf: "https://www.skptc.srikrishna.ac.in/",
      name: "Sri Krishna Polytechnic College",
    },
    {
      pdf: "https://www.skcet.ac.in/",
      name: "Sri Krishna College of Engineering and Technology",
    },
    {
      pdf: "https://skasc.ac.in/",
      name: "Sri Krishna Arts and Science College",
    },
    {
      pdf: "https://www.skacas.ac.in/",
      name: "Sri Krishna Adithya College of Arts and Science",
    },
  ];

  useEffect(() => {
    fetch(`https://data.skct.edu.in/foot/`)
      .then((res) => res.json())
      .then((dats) => {
        setFootD1(dats);
      });
    fetch(`https://data.skct.edu.in/nav/`)
      .then((res) => res.json())
      .then((dats) => {
        setFootD2(dats);
      });
  }, []);
  return (
    <>
      <div className="footerNav-wrapper">
        <div className="footerNav-contents">
          <div className="footerNav-body">
            <div className="footerNav-body-Sec footerNav-body-Sec1">
              <FootCard
                Data={footD1?.downloads}
                heading={"Downloads & Reports"}
                key="footCard1"
              />
              <FootCard Data={AICTEData} heading={"AICTE"} key="footCard2" />
              <FootCard Data={footD2} heading={"NIRF"} key="footCard3" />
            </div>
            <div className="footerNav-body-Sec footerNav-body-Sec2">
              <FootCard
                Data={footD1?.reports}
                heading={"Reports"}
                key="footCard4"
              />
            </div>
            <div className="footerNav-body-Sec footerNav-body-Sec3">
              <FootCard
                Data={instutionsData}
                heading={"Our Institutions"}
                key="footCard5"
              />
              <FootCard
                Data={footD1?.brochures}
                heading={"Prospectus/Brochure"}
                key="footCard6"
              />
              <FootCard2
                Data={GRS}
                heading={"Grievance Redressal System"}
                key="footCard7"
              />
              <FootCard2
                Data={FBForm}
                heading={"Grievance Redressal System"}
                key="footCard8"
              />
            </div>
            <div className="footerNav-body-Sec footerNav-body-Sec4">
              <div className="footerNav-sec4-wrapper">
                <h3 className="footCard-h3">Contact Us</h3>
                <h4 className="footCard-h3">
                  Sri Krishna College of Technology
                </h4>
                <p className="footerNav-add-p">Kovaipudur, Coimbatore-641042</p>
                <p className="footerNav-add-p">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff9800"
                    viewBox="0 0 512 512"
                    height="14"
                    width="14"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  0422-2984567-68(2 Lines)
                </p>
                <p className="footerNav-add-p">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ff9800"
                    viewBox="0 0 512 512"
                    width="14"
                    height="14"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  info@skct.edu.in
                </p>
              </div>
            </div>
          </div>
          <div className="footerNav-footerDiv">
            <h4 className="footerNav-footerh41">
              © All Rights Reserved 2021 - 2022. SKCT
            </h4>
            <h4 className="footerNav-footerh42">
              @Web development Team - SKCT
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
function FootCard({ Data, heading }) {
  return (
    <>
      <div className="footCard-wrapper">
        <div className="footCard-headingDiv">
          <h2 className="footCard-h3">{heading}</h2>
        </div>
        <div className="footCard-body">
          <ul className="footCard-ul">
            {Data?.length > 0 &&
              Data.map((elem,index) => {
                return (
                  <>
                    <a
                      href={`https://data.skct.edu.in${elem.pdf}`}
                      className="footCard-a"
                      target={"_blank"}
                      rel="noreferrer"
                      key={`${index}`}
                    >
                      <li className="footCard-li"  key={`${index}`}>{elem.name}</li>
                    </a>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

function FootCard2({ Data, heading }) {
  return (
    <>
      <div className="footCard-wrapper">
        <div className="footCard-headingDiv">
          <h2 className="footCard-h3">{heading}</h2>
        </div>
        <div className="footCard-body">
          <ul className="footCard-ul">
            {Data?.length > 0 &&
              Data.map((elem,index) => {
                return (
                  <>
                    <a
                      href={`https://data.skct.edu.in${elem.pdf}`}
                      className="footCard-a"
                      target={"_blank"}
                      rel="noreferrer"
                      key={`${index}`}
                    >
                      <li className="footCard-li1 footCard-li"  key={`${index}`}>{elem.name}</li>
                    </a>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

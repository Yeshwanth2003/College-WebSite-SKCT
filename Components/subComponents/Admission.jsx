import "./Style/admission.css";
import React, { useEffect, useState } from "react";

function Table({ title, headers, datas, num = true }) {
  return (
    <>
      <div className="table-box">
        {title !== null && (
          <div className="table-title-box">
            <h3 className="table-title">{title}</h3>
          </div>
        )}
        <div className="styled-table-box">
          <table className="styled-table">
            <thead className="styled-tb-head">
              {headers !== null && (
                <>
                  <tr>
                    {num && <th>S.NO</th>}
                    {headers?.map((header, id) => (
                      <th key={id}>{header}</th>
                    ))}
                  </tr>
                  <tr className="tb-head-divider"></tr>
                </>
              )}
            </thead>
            <tbody className="styled-tb-body">
              {datas?.map((data, id) => (
                <tr key={id}>
                  {num && <td>{id + 1}</td>}
                  {data?.infos?.map((info, id) => (
                    <td key={id}>{info === null ? "-" : info}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default function Admission(props) {
  const datas = [
    {
      title: "UNDERGRADUATE PROGRAMMES",

      headers: [
        "Department",
        "Year of starting",
        "Sanctioned Intake",
        "NBA Accreditation",
      ],

      datas: [
        {
          infos: [
            "B.E.Civil Engineering",
            "1985",
            "60",
            "Accredited by NBA for 3 Years till June 2025",
          ],
        },

        {
          infos: [
            "B.E.Mechanical Engineering",
            "1985",
            "60",
            "Accredited by NBA for 6 Years till June 2027",
          ],
        },

        {
          infos: [
            "B.E.Electronics and Communication Engineering",
            "1985",
            "180",
            "Accredited by NBA for 3 Years till June 2025",
          ],
        },

        {
          infos: [
            "B.E.Computer Science and Engineering",
            "1998",
            "180",
            "Accredited by NBA for 3 Years till June 2025",
          ],
        },

        {
          infos: [
            "B.Tech.Information Technology",
            "1999",
            "180",
            "Accredited by NBA for 6 Years till June 2027",
          ],
        },

        {
          infos: [
            "B.E.Electrical and Electronics Engineering",
            "2000",
            "120",
            "Accredited by NBA for 3 Years till June 2025",
          ],
        },

        {
          infos: [
            "B.E.Instrumentation and Control Engineering",
            "2010",
            "60",
            "Accredited by NBA for 3 Years till 2025",
          ],
        },

        {
          infos: [
            "B.Tech Artificial Intelligence and Data Science",
            "2021",
            "60",
            null,
          ],
        },

        {
          infos: [
            "B.E. Computer Science and Engineering (Cyber Security)",
            "2022",
            "60",
            null,
          ],
        },

        {
          infos: [
            "B.E. Computer Science and Engineering (Internet of Things)",
            "2022",
            "60",
            null,
          ],
        },

        {
          infos: [
            "B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
            "2022",
            "60",
            null,
          ],
        },
      ],
    },

    {
      title: "POSTGRADUATE PROGRAMMES",

      headers: [
        "Department",
        "Year of starting",
        "Sanctioned Intake",
        "NBA Accreditation",
      ],

      datas: [
        {
          infos: [
            "Master of Business Administration",
            "1997",
            "120",
            "Not Applied for Accreditation by NBA",
          ],
        },

        {
          infos: [
            "M.E.Structural Engineering",
            "2002",
            "24",
            "Not Applied for Accreditation by NBA",
          ],
        },

        {
          infos: [
            "M.E.Computer Science And Engineering",
            "2006",
            "9",
            "Not Applied for Accreditation by NBA",
          ],
        },

        {
          infos: [
            "M.E.Applied Electronics",
            "2006",
            "12",
            "Not Applied for Accreditation by NBA",
          ],
        },

        {
          infos: [
            "M.E.Engineering Design",
            "2011",
            "9",
            "Not Applied for Accreditation by NBA",
          ],
        },

        {
          infos: [
            "M.E.Power Systems Engineering",
            "2013",
            "12",
            "Not Applied for Accreditation by NBA",
          ],
        },
      ],
    },

    {
      title: "Ph.D RESEARCH PROGRAMMES",

      headers: ["Department", "Admissions"],

      datas: [
        {
          infos: [
            "Computer Science and Engineering",
            "As Per Anna University Norms",
          ],
        },

        {
          infos: ["Civil Engineering", "As Per Anna University Norms"],
        },

        {
          infos: [
            "Electronics and Communication Engineering",
            "As Per Anna University Norms",
          ],
        },

        {
          infos: [
            "Electrical and Electronics Engineering",
            "As Per Anna University Norms",
          ],
        },

        {
          infos: ["Mechanical Engineering", "As Per Anna University Norms"],
        },
      ],
    },
  ];

  const eligibility = [
    {
      title: "HSC (ACADEMIC)",

      headers: ["Community", "Overall Criteria"],

      datas: [
        {
          infos: [
            "General Category",
            "Minimum average of 45% and above in Maths, Physics and Chemistry",
          ],
        },

        {
          infos: [
            "Backward Class including Backward Class Muslims",
            "Minimum average of 40% and above in Maths, Physics and Chemistry",
          ],
        },

        {
          infos: [
            "MBC & DNC",
            "Minimum average of 40% and above in Maths, Physics and Chemistry",
          ],
        },

        {
          infos: [
            "SC / SCA / ST",
            "Minimum average of 40% in Qualifying Examination with Maths, Physics and Chemistry",
          ],
        },
      ],
    },

    {
      title: "HSC (VOCATIONAL)",

      headers: ["Community", "Overall Criteria"],

      datas: [
        {
          infos: [
            "General Category",
            "Minimum average of 45% and above in the related subjects, Vocational Theory and Practicals",
          ],
        },

        {
          infos: [
            "Backward Class including Backward Class Muslims",
            "Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals",
          ],
        },

        {
          infos: [
            "MBC & DNC",
            "Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals",
          ],
        },

        {
          infos: [
            "SC / SCA / ST",
            "Minimum average of 40% and above in the related subjects, Vocational Theory and Practicals",
          ],
        },
      ],
    },
  ];

  const [pdfs, setPdfs] = useState([]);
  useEffect(() => {
       import("../../DataCenter/subComponentsData/Admission/admissionData")
      .then((data) => setPdfs(data.default));
  }, []);

  return (
    <>
      <div className="admission-container">
        <h2 className="admission-title" style={{ color: "#F44336" }}>
          BROCHURE
        </h2>
        <hr className="title-divider" />
        <div className="blink-flex-box">
          <a
            className="blink-box"
            href="https://data.skct.edu.in/media/SKCT_Information_Bulletin_cDdPGLI.pdf"
            target="_blank"
            rel="noreferrer"
          >
            2022 - 2023 Brochure
          </a>
          <a
            className="blink-box"
            href="https://data.skct.edu.in/media/SKCT_CUT_OFF_UG_GQ_2022-2023.pdf"
            target="_blank"
            rel="noreferrer"
          >
            2022 - 2023 Cutoff Mark
          </a>
        </div>

        <h2 className="admission-title" style={{ color: "#F44336" }}>
          CONTACT US
        </h2>
        <hr className="title-divider" />
        <div className="adm-contact-outer">
          <div className="adm-contact-us">
            <div className="adm-contact-details">
              <div className="adm-contact-title">College - SKCT</div>
              <div className="adm-contact-header">address</div>
              <p>
                Sri Krishna College of Technology,
                <br />
                Kovaipudur,
                <br />
                Coimbatore - 641042.
              </p>
              <div className="adm-contact-header">contact us</div>
              <p>
                Phone Number :{" "}
                <a href="tel:0422-2984567-68" target="_blank" rel="noreferrer">
                  0422-2984567-68
                </a>
              </p>
              <div className="adm-contact-header">e-contact</div>
              <p>
                Email :{" "}
                <a
                  href="mailto:info@skct.edu.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@skct.edu.in
                </a>
              </p>
            </div>
            <div className="adm-contact-details">
              <div className="adm-contact-title">
                Administrative Trust office
              </div>
              <div className="adm-contact-header">address</div>
              <p>
                VLB & Sri Krishna Trust,
                <br />
                Kovaipudur,
                <br />
                Coimbatore - 641 042.
              </p>
              <div className="adm-contact-header">contact us</div>
              <p>
                Phone Number :{" "}
                <a href="tel:0422-2604545-49" target="_blank" rel="noreferrer">
                  0422-2604545-49
                </a>
              </p>
              <div className="adm-contact-header">e-contact</div>
              <p>
                Email :{" "}
                <a
                  href="mailto:info@srikrishna.ac.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@srikrishna.ac.in
                </a>
                ,{" "}
                <a
                  href="mailto:info@vlbkrishna.edu.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@vlbkrishna.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <h2 className="admission-title">PROGRAMMES OFFERED</h2>
        <hr className="title-divider" />
        <div className="progs-off-container">
          <div>
            {datas?.map((data, id) => (
              <Table
                key={id}
                title={data.title}
                headers={data.headers}
                datas={data.datas}
              />
            ))}
          </div>
        </div>

        <div className="adm-pdf-table">
          <a
            style={{ textDecoration: "none" }}
            href="https://skct.edu.in/Admission%20Procedure.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="adm-achievements">
              <div className="adm-dld-icon">
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
              <div className="adm-achievement-title">admission procedure</div>
            </div>
          </a>
        </div>

        <h2 className="admission-title">ELIGIBILITY FOR VARIOUS COURSES</h2>
        <hr className="title-divider" />
        <div className="tb-flex-box">
          {eligibility?.map((data, id) => (
            <Table
              key={id}
              title={data.title}
              headers={data.headers}
              datas={data.datas}
            />
          ))}
        </div>

        <h2 className="admission-title">CRITERIA</h2>
        <hr className="title-divider" />
        <div className="adm-criteria-box">
          <ul className="adm-criteria">
            <li>Calculation of Minimum eligible Marks - prescribed formula</li>
            <li>
              Related subjects to be taken for calculation of minimum
              eligibility marks
            </li>
            <li>Minimum pass prescibed by the respective board for a pass</li>
            <li>Nationality / Nativity / Community of the candidate</li>
            <li>Rounding off of minimum eligibility marks</li>
            <li>
              Whether marks obtained in related subjects is through improvement
              examination
            </li>
            <li>
              <a
                href="http://skct.edu.in/Fee-Structure.PDF"
                target="_blank"
                rel="noreferrer"
              >
                Fee as per government norms
              </a>
            </li>
          </ul>
        </div>

        <h2 className="admission-title">CUTOFF MARKS</h2>
        <hr className="title-divider" />
        <div className="adm-pdf-table">
          {pdfs?.map((pdf, id) => (
            <a
              key={id}
              style={{ textDecoration: "none" }}
              href={`https://data.skct.edu.in${pdf.file}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="adm-achievements">
                <div className="adm-dld-icon">
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
                <div className="adm-achievement-title">{pdf.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

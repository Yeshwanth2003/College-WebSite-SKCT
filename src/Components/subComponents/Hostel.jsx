import "./Style/hostel.css";
import React from "react";

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

function Scrollmenu({ title, sections }) {
  const scrollto = (id) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({ block: "center", behavior: "smooth" });
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

export default function Hostel(props) {
  const sections = [
    "About Hostel",
    "Mess",
    "Dining Facilities",
    "Timings",
    "Facilities",
  ];

  const datas = {
    headers: [
      "Morning (Breakfast)",
      "Afternoon (Lunch)",
      "Tea time",
      "Night (Dinner)",
    ],

    datas: [
      {
        infos: [
          "07:30 A.M to 08:30 A.M",
          "01:00 P.M to 02:00 P.M",
          "05:00 P.M to 06:00 P.M",
          "07:00 P.M to 08:30 P.M",
        ],
      },
    ],
  };

  const sunday_time = [
    {
      infos: [
        "07:30 A.M to 09:30 A.M",
        "12:30 P.M to 02:30 P.M",
        "04:00 P.M to 06:00 P.M",
        "07:00 P.M to 08:30 P.M",
      ],
    },
  ];

  return (
    <>
      <div className="hostel-container">
        <Scrollmenu title="hostel @ skct" sections={sections} />
        <div className="hostel-contentWrapper">
          <div className="hostel-content">
            <img
              className="hostel-bg"
              src="https://skct.edu.in/static/img/hostel1.1611067.jpg"
              alt="hostel1.1611067.jpg"
            />

            <div className="hostel-text-content">
              <h6 id="About Hostel" className="hostel-section-title">
                about hostel
              </h6>
              <p className="hostel-section-content">
                SKCT students boys hostel is an integral part of the college
                campus and girls hostel is located 3kms away from campus. Hostel
                bus is ply from girls hostel to college campus. The gents’
                hostel comprises of five blocks with a capacity to accommodate
                1200 students. The Ladies hostel has a total of 143 rooms in its
                three blocks with a capacity to accommodate 484 students. All
                men and women residents of the hostel are provided rooms on a
                four sharing basis. Beauty Parlour & Spa, Photostat Shop, Fresh
                Juice Shop, Chat shop, General Stores., etc. are the facilities
                available in girls hostel.
              </p>

              <h6 id="Mess" className="hostel-section-title">
                mess
              </h6>
              <p className="hostel-section-content">
                Our Hostel Mess, presently feeding 803 students, is run by the
                contractor M/s Saraswathi Natarajan Hospitality Pvt Ltd . Only
                Vegetarian food is served in the mess. The mess is run on a
                fixed rate system. For the smooth functioning of Hostel mess,
                there is a Mess Manager who looks after the day – to – day
                affairs of the Hostel mess and guides the Mess Committee in the
                smooth functioning of the hostel and mess. All residents are
                required to take their meals in the dining hall during the
                prescribed mess timings.
              </p>

              <h6 className="hostel-section-title">TOTAL NO. OF STUDENTS</h6>
              <ul className="hostel-section-list-content">
                <li>Boys – 916</li>
                <li>Girls – 484</li>
              </ul>

              <h6 id="Dining Facilities" className="hostel-section-title">
                dining halls
              </h6>
              <ul className="hostel-section-list-content">
                <li>No. of dining halls for boys – 2</li>
                <li>No. of dining halls for girls – 1</li>
              </ul>

              <h6 className="hostel-section-title">SEATING CAPACITY</h6>
              <ul className="hostel-section-list-content">
                <li>Boys dining – 732</li>
                <li>Girls dining – 432</li>
                <li>Total – 1164</li>
                <li>Staff dining Capacity – 24</li>
              </ul>

              <h6 id="Timings" className="hostel-section-title">
                HOSTEL MESS WILL BE OPERATED ONLY ON THE FOLLOWING TIME FOR
                STUDENTS
              </h6>
              <div className="hostel-tb">
                <Table
                  title={null}
                  headers={datas.headers}
                  datas={datas.datas}
                  num={false}
                />
              </div>

              <h6
                style={{
                  justifyContent: "center",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="hostel-section-title"
              >
                FOR SUNDAYS ONLY
              </h6>
              <div className="hostel-tb">
                <Table
                  title={null}
                  headers={null}
                  datas={sunday_time}
                  num={false}
                />
              </div>
              <p className="hostel-section-content">
                5 minutes grace time allowed for late comers
              </p>

              <h6 id="Facilities" className="hostel-section-title">
                RO WATER FACILITY
              </h6>
              <p className="hostel-section-content">
                Purified water from Reverse Osmosis Plant is utilized for
                cooking and drinking. Hot water is also provided for cooking and
                drinking purposes.
              </p>

              <h6 className="hostel-section-title">24X7 WI-FI FACILITIES</h6>
              <p className="hostel-section-content">
                24 hours wi-fi facilities available in both boys and Girls
                Hostel
              </p>

              <h6 className="hostel-section-title">ATTENDANCE</h6>
              <ul className="hostel-section-list-content">
                <li>
                  Boys Hostel- Biometric attendance (students must punch in
                  biometric between 8:00P.M -9:00 P.M and attendance details are
                  send to parents immediately through SMS)
                </li>
                <li>
                  Girls Hostel- Taken by deputy wardens between 8:00P.M -9:00
                  P.M
                </li>
              </ul>

              <h6 className="hostel-section-title">DEPUTY WARDEN</h6>
              <p className="hostel-section-content">
                Deputy Warden is alloted for every 40 students for monitoring
                and taking care. Deputy wardens are accompanied with sick
                students for Hospital Visit.
              </p>

              <h6 className="hostel-section-title">24X7 AMBULANCE FACILITY</h6>
              <p className="hostel-section-content">
                24 hours Ambulance facility is available for both boys and girls
                hostel
              </p>

              <h6 className="hostel-section-title">KITCHEN</h6>
              <p className="hostel-section-content">
                Cleanliness, ease of working and time saving are the crucial
                factors that have gone into the design of kitchen at the SKCT
                Hostel. Steam and LPG power the kitchen. All vessels, both
                cooking and serving, are of quality stainless steel.
              </p>

              <h6 className="hostel-section-title">PRODUCTION</h6>
              <p className="hostel-section-content">
                All items are prepared hygienically with extra care in
                centralized kitchen only. Quality of food is checked at every
                stage of preparation by Mess Manager.
              </p>

              <h6 className="hostel-section-title">DISTRIBUTION</h6>
              <p className="hostel-section-content">
                The food is served hot. We are able to manage the crowd at peak
                hours minimizing wastage of food and maintaining hygienic
                condition.
              </p>

              <h6 className="hostel-section-title">REPORTS</h6>
              <p className="hostel-section-content">
                Every month mess committee meeting is held with students,
                Residential wardens, Chief wardens, Deputy warden, Mess Manager
                and Catering Unit Manager. Daily mess information report is
                submitted to higher authorities. Remarks from higher authorities
                and students are discussed with Contractor immediately recording
                explanation. Housekeeping schedule is periodically inspected.
              </p>

              <h6 className="hostel-section-title">HOUSE KEEPING</h6>
              <p className="hostel-section-content">
                Daily House Keeping information report is submitted to higher
                authorities.
              </p>

              <h6 className="hostel-section-title">HOSTEL MAINTENANCE</h6>
              <p className="hostel-section-content">
                Infrastructure, Water, Electrical facilities are checking daily
                basis and Students complaints are taken into action Immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

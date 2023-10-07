import "./Style/endsemtimetable.css";
import React from "react";

export default function Timetable(props) {
  return (
    <>
      <div className="timetable-container">
        <div className="timetable-content">
          <div className="timetable-examination">
            <h3>April/May 2023 UG/PG Regular Examinations Timetable</h3>
            <ul>
              <li>
                UG Batch 2022(Regulation 2022):
                <div>
                  <a
                    href="https://skct.edu.in/ESS/2022%20Batch/2022_U_2_Reg.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester II
                  </a>
                </div>
              </li>
              <li>
                UG Batch 2021(Regulation 2021):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_U_4_Reg.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester IV
                  </a>
                </div>
              </li>
              <li>
                PG Batch 2022(Regulation 2022):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2022%20Batch/2022_P_2_Reg.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester II
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="timetable-examination">
            <h3>April/May 2023 UG/PG Arrear Examinations Timetable</h3>
            <ul>
              <li>
                UG Batch 2022(Regulation 2022):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2022%20Batch/2022_U_1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester I
                  </a>
                </div>
              </li>
              <li>
                UG Batch 2021(Regulation 2021):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_U_1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester I
                  </a>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_U_2.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester II
                  </a>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_U_3.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester III
                  </a>
                </div>
              </li>
              <li>
                PG Batch 2022(Regulation 2022):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2022%20Batch/2022_P_1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester I
                  </a>
                </div>
              </li>
              <li>
                PG Batch 2021(Regulation 2021):
                <div>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_P_1.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester I
                  </a>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_P_2.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester II
                  </a>
                  <a
                    href="http://skct.edu.in/ESS/2021%20Batch/2021_P_3.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    semester III
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

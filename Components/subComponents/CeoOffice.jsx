import { useEffect, useState } from "react";
import "./Style/ceoOffice.css";

export default function CeoOffice() {
  let [staffData, setStaffData] = useState([]);
  useEffect(() => {
    fetch("https://data.skct.edu.in/staff/")
      .then((res) => res.json())
      .then((dats) => {
        setStaffData(dats.sort((a, b) => a.order - b.order));
      });
  }, []);

  return (
    <>
      <div className="ceoOffice-wrapper">
        <div className="ceoOffice-contentDiv">
          <div className="ceoOff-headingDiv">
            <h2 className="ceoOff-heading">COE - OFFICE</h2>
          </div>
          <div className="ceoOff-body">
            <table className="coeOff-table">
              <thead className="coeOff-theading">
                <tr className="ceoOff-table-heading-row">
                  <td className="ceoOff-h-td">S.NO</td>
                  <td className="ceoOff-h-td">Name of the Faculty</td>
                  <td className="ceoOff-h-td">Designation</td>
                </tr>
              </thead>
              <tbody className="ceoOff-tbody">
                {staffData.length > 0 &&
                  staffData.map((elem, index) => {
                    return (
                      <>
                        <CeoStaffCard
                          INDEX={(index + 1).toString()}
                          DESIG={elem.pos}
                          NAME={elem.name}
                          key={index.toString()}
                        />
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function CeoStaffCard({ INDEX, NAME, DESIG }) {
  return (
    <>
      <tr className="cS-card-tr">
        <td className="cS-card-data">{INDEX}</td>
        <td className="cS-card-data">{NAME}</td>
        <td className="cS-card-data">{DESIG}</td>
      </tr>
    </>
  );
}

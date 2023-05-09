import { useEffect, useState } from "react";
import "./Style/deptFaculty.css";

export default function DeptFaculty({ currentDepartment }) {
  let [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/faculty/`)
      .then((res) => res.json())
      .then((dats) => {
        setFaculties(
          dats.sort((a, b) => parseInt(a.order) - parseInt(b.order))
        );
      });
  }, [currentDepartment]);

  return (
    <>
      <div className="deptFaculty-wrapper">
        <div className="deptFaculty-headingDiv">
          <h2 className="deptFaculty-heading">FACULTY MEMBERS</h2>
        </div>
        <div className="deptFaculty-body">
          <table className="deptFaculty-table">
            <thead className="deptFaculty-thead">
              <tr className="depatFaculty-headTr">
                <td className="deptFaculty-headTd">S.NO</td>
                <td className="deptFaculty-headTd">Name of the Faculty</td>
                <td className="deptFaculty-headTd">Designation</td>
                <td className="deptFaculty-headTd">Area of Specialization</td>
              </tr>
            </thead>
            <tbody className="deptFaculty-tbody">
              {faculties.length > 0 &&
                faculties.map((elem, index) => {
                  return (
                    <>
                      <FacultyCard
                        sno={index + 1}
                        name={elem.name}
                        pos={elem.pos}
                        area={elem.area}
                        key={index.toString()}
                      />
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function FacultyCard({ name, pos, area, sno }) {
  return (
    <>
      <tr className="facultyCard-bodyRow">
        <td className="facultyCard-data">{sno}</td>
        <td className="facultyCard-data">{name}</td>
        <td className="facultyCard-data">{pos}</td>
        <td className="facultyCard-data">{area}</td>
      </tr>
    </>
  );
}

import { useEffect, useState } from "react";
import "./Style/deptDisAlumni.css";

export default function DeptDisAlumni({ currentDepartment,p1,p2 }) {
  let [deptDisAlumD1, setDeptDisAlumD1] = useState([]);
  let [deptDisAlumD2, setDeptDisAlumD2] = useState([]);

  useEffect(() => {
    // fetch((p1!==undefined?p1:`https://data.skct.edu.in/${currentDepartment}/ds/`))
    import(`../../../../DataCenter/DepartmentsData/${currentDepartment}/${p1!==undefined ?p1:"distinguishedAluminiData"}`)
      .then((res) => res.default)
      .then((dats) => {
        setDeptDisAlumD1(dats);
        setDeptDisAlumD2(dats);
      });
  }, [currentDepartment,p1]);

  function OnFilter(event) {
    let val = event.target.value;
    setDeptDisAlumD2(
      deptDisAlumD1.filter((elem, index) => {
        return (
          elem.name.includes(val) ||
          elem.batch.includes(val) ||
          elem.company.includes(val) ||
          index.toString().includes(val)
        );
      })
    );
  }

  return (
    <>
      <div className="deptDisAlum-wrapper">
        <div className="deptDisAlum-container">
          <div className="deptDisAlum-headingDiv">
            <h2 className="deptDisAlum-heading">
              {currentDepartment}-DISTINGUISHED ALUMNI
            </h2>
          </div>
          <div className="deptDisAlum-body">
            <div className="deptDisAlum-searchDiv">
              <div className="deptDisAlum-inputWrapper">
                <div className="deptDisAlum-inputDiv">
                  <input
                    placeholder="Search"
                    type="text"
                    className="deptDisAlum-input"
                    onChange={OnFilter}
                  />
                </div>
                <div className="deptDisAlum-inputSvgDiv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    width="100%"
                    height="100%"
                  >
                    <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z" />
                  </svg>
                </div>
              </div>
            </div>
            <table className="deptDisAlum-table">
              <thead className="deptDisAlum-thead">
                <tr className="deptDisAlum-trH">
                  <td className="deptDisAlum-tdH">S.NO</td>
                  <td className="deptDisAlum-tdH">Name</td>
                  <td className="deptDisAlum-tdH">Batch</td>
                  <td className="deptDisAlum-tdH">{p2!==undefined?p2:'Organisation'}</td>
                </tr>
              </thead>
              <tbody className="deptDisAlum-tbody">
                {deptDisAlumD2.length > 0 &&
                  deptDisAlumD2.map((elem, index) => {
                    return (
                      <>
                        <DeptDisAlum
                          index={index + 1}
                          name={elem.name}
                          batch={elem.batch}
                          organisation={p1!==undefined?elem.cource:elem.company}
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

function DeptDisAlum({ name, index, batch, organisation }) {
  return (
    <>
      <tr className="deptDisAlum-trD">
        <td className="deptDisAlum-tdD">{index}</td>
        <td className="deptDisAlum-tdD">{name}</td>
        <td className="deptDisAlum-tdD">{batch}</td>
        <td className="deptDisAlum-tdD">{organisation}</td>
      </tr>
    </>
  );
}

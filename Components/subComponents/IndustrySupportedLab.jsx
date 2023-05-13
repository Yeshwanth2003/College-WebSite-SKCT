import { useEffect, useState } from "react";
import "./Style/industrysupportedlab.css";
export default function ISL() {
  let [islData, setIslData] = useState([]);

  useEffect(() => {
    import("../../DataCenter/subComponentsData/IndustryConnectData/ISLData")
      .then((res) => res.default)
      .then((dats) => {
        setIslData(dats);
      });
  }, []);

  return (
    <>
      <div className="isl-wrapper">
        <div className="isl-contents">
          <div className="isl-headingDiv">
            <h2 className="isl-heading">INDUSTRY SUPPORTED LABS</h2>
          </div>
          <div className="isl-body">
            <table className="isl-table">
              <thead className="isl-thead">
                <tr className="isl-tr">
                  <td className="isl-td">S.NO</td>
                  <td className="isl-td">Lab</td>
                  <td className="isl-td">Year Of Establishment</td>
                  <td className="isl-td">Funding Organization</td>
                </tr>
              </thead>
              <tbody className="isl-tbody">
                {islData.length > 0 &&
                  islData.map((elem, index) => {
                    return (
                      <>
                        <ISLCard
                          index={index + 1}
                          date={elem.year}
                          fo={elem.fo}
                          lab={elem.lab}
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
function ISLCard({ index, lab, date, fo }) {
  return (
    <>
      <tr className="islCard-tr">
        <td className="islCard-td">{index}</td>
        <td className="islCard-td">{lab}</td>
        <td className="islCard-td">{date}</td>
        <td className="islCard-td">{fo}</td>
      </tr>
    </>
  );
}

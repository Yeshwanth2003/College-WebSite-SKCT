import { useEffect, useState } from "react";
import useImport from "../../CustomHooks/useImport";
import "./Style/iprcell.css";

export default function IPRcell() {
  let [iprData, setIPRData] = useState([]);

  useImport(
    "subComponentsData/Research/ipccell/iprcellData",
    ({ err, data }) => {
      setIPRData(data);
    }
  );

  useEffect(() => {
    if (iprData.length !== 0) {
      let aboutBodyDiv = document.getElementById("iprcAboutBodyDiv");
      aboutBodyDiv.innerHTML += iprData[0].about;
    }
  }, [iprData]);

  return (
    <>
      <div className="iprcell-wrapper">
        <div className="iprcell-container">
          <div className="iprcell-headingDiv">
            <h2 className="iprcell-heading">INTELLECTUAL PROPERTY RIGHTS</h2>
          </div>
          <div className="iprcell-body">
            <div className="iprc-aboutDiv">
              <h3 className="iprc-innerHeads">ABOUT IPR CELL</h3>
              <div id="iprcAboutBodyDiv" className="iprc-about-bodyDiv"></div>
            </div>
            <div className="iprc-staff-div">
              <h3 className="iprc-innerHeads">STAFF</h3>
              <div className="iprc-staff-body">
                <ol className="iprc-staff-ol">
                  {iprData.length > 0 &&
                    iprData[0].staff.map((elem) => {
                      return (
                        <>
                          <li className="iprc-staff-li">
                            {elem.name + " - " + elem.role}
                          </li>
                        </>
                      );
                    })}
                </ol>
              </div>
            </div>
            <div className="iprc-policy-div">
              <h3 className="iprc-innerHeads">POLICY</h3>
              <div className="iprc-policy-body">
                <a
                  className="iprc-link-p"
                  href={`https://data.skct.edu.in${
                    iprData.length > 0 && iprData[0].policy
                  }`}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="iprc-policy-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1000 1000"
                      enable-background="new 0 0 1000 1000"
                      width="30px"
                      height="30px"
                      fill="skyblue"
                    >
                      <g>
                        <g>
                          <path d="M704.8,540.2H582.3V377.5H417.7v162.7H295.2L500,745L704.8,540.2z M800.5,419.6c52.3,3.8,97,25.2,134,64.1c37,38.9,55.5,85.2,55.5,138.8c0,56.1-20.1,104.3-60.3,144.5s-88.4,60.3-144.5,60.3H255c-67.6,0-125.4-23.9-173.2-71.8S10,649.9,10,582.3c0-62.5,21.1-117.1,63.2-163.7c42.1-46.6,93.8-73.1,155-79.4c26.8-49.8,64.4-90,112.9-120.6c48.5-30.6,101.4-45.9,158.9-45.9c74,0,139.1,23.3,195.2,69.9S786.5,348.2,800.5,419.6z" />
                        </g>
                      </g>
                    </svg>
                    IP POLICY
                  </div>
                </a>
              </div>
            </div>
            <div className="iprc-file-div">
              <h3 className="iprc-innerHeads">IPR FILE</h3>
              <div className="iprc-file-body">
                <table className="iprc-file-table">
                  <thead className="iprc-file-thead">
                    <tr className="iprc-file-tr">
                      <td className="iprc-fiel-td">S.NO</td>
                      <td className="iprc-fiel-td">
                        Name of the Applicant{"(s)"}
                      </td>
                      <td className="iprc-fiel-td">Name of the Inventor</td>
                      <td className="iprc-fiel-td">Title</td>
                      <td className="iprc-fiel-td">Applicatoin no & Date</td>
                      <td className="iprc-fiel-td">Current Status</td>
                    </tr>
                  </thead>
                  <tbody className="iprc-file-tbody">
                    {iprData.length > 0 &&
                      iprData[0].file.map((elem, index) => {
                        return (
                          <>
                            <IPRClm
                              index={(index += 1)}
                              name={elem.staff}
                              ni={elem.inventor}
                              title={elem.title}
                              ad={elem.date}
                              cs={elem.status}
                            />
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function IPRClm({ index, name, ni, title, ad, cs }) {
  return (
    <>
      <tr className="iprclm-tr">
        <td className="iprcclm-td">{index}</td>
        <td className="iprcclm-td">{name}</td>
        <td className="iprcclm-td">{ni}</td>
        <td className="iprcclm-td">{title}</td>
        <td className="iprcclm-td">{ad}</td>
        <td className="iprcclm-td">{cs}</td>
      </tr>
    </>
  );
}

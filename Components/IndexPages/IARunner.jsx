import { useEffect, useState } from "react";
import { Img_Err_Solver } from "../WholeApp";
import { Link } from "react-router-dom";
import "./style/iarunner.css";

export default function IARunner() {
  let [iaRunnerData, setIARunnerData] = useState([]);

  useEffect(() => {
    import("../../DataCenter/InstutionAccomplishment/instutionAccomplishment")
      .then((res) => res.default)
      .then((dats) => {
        setIARunnerData(dats);
      });
  }, []);

  useEffect(() => {
    Img_Err_Solver();
  });

  function IARunnerTemp({ IMG }) {
    // IMG Error
    return (
      <>
        <Link to="/" className="ia-runner-link">
          <div className="ia-runner-imgwrapper-box">
            <img src={IMG} alt="" className="ia-runner-img" />
          </div>
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="IArunner-wrapper">
        <div className="IArunner-headingBox">
          <h2 className="all-heading-orange">INSTITUTE ACCOMPLISHMENTS</h2>
        </div>
        <div className="IArunner-Box">
          <div className="IArunner-runnerDiv">
            {iaRunnerData.map((elem, index) => {
              return (
                <>
                  <IARunnerTemp IMG={elem.img} key={`${index}`} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

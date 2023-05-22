import { useEffect, useState } from "react";
import "./Style/departmentHome.css";

export default function DepartmentHome({ DataMapper, currentDepartment }) {
  let [homeSecData, setHomeSecData] = useState(null);
  let [coverImgLink, setCoverImgLink] = useState("");
  let [mission, setMission] = useState([]);
  let [hod, setHod] = useState({});
  let [peo, setPEO] = useState([]);
  let [po, setPO] = useState([]);
  let [pso, setPSO] = useState([]);

  useEffect(() => {
    import(
      `../../../../DataCenter/DepartmentsData/${currentDepartment}/home/homedata`
    )
      .then((res) => res.default)
      .then((dats) => {
        setHomeSecData(dats);
        setCoverImgLink(dats.image);
        setMission(dats.mission.split("\r\n"));
        let p_E_o = dats.academiics.filter(
          (elem) => elem.name.toLowerCase() === "peo"
        );
        let p_o = dats.academiics.filter(
          (elem) => elem.name.toLowerCase() === "po"
        );
        let p_s_o = dats.academiics.filter(
          (elem) => elem.name.toLowerCase() === "pso"
        );
        setPSO(p_s_o[0].details.split("\r\n"));
        setPO(p_o[0].details.split("\r\n"));
        setPEO(p_E_o[0].details.split("\r\n"));

        // for hod

        import(
          `../../../../DataCenter/DepartmentsData/${currentDepartment}/hod/hodData`
        )
          .then((res) => res.default)
          .then((dats1) => {
            setHod(dats1);
          });
      });
  }, [DataMapper, currentDepartment]);

  return (
    <>
      <div className="deptHome-wrapper">
        <div className="deptHome-coverDiv">
          <div className="deptHome-coverImgDiv">
            <img src={coverImgLink} alt="" className="deptHome-coverImg" />
          </div>
          <div className="deptHome-coverNameDiv">
            <h1 className="deptHome-coverName">{`Department of ${homeSecData?.dname}`}</h1>
            <p className="deptHome-credits">{homeSecData?.certificate}</p>
          </div>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">ABOUT DEPARTMENT</h2>
          <p className="deptHome-para">{homeSecData?.about}</p>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">VISION</h2>
          <p className="deptHome-para">{homeSecData?.vision}</p>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">MISSION</h2>
          <ol className="deptHome-ol">
            {mission.map((elem) => {
              return (
                <>
                  <li className="deptHome-li">{elem}</li>
                </>
              );
            })}
          </ol>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">HOD'S DESK</h2>
          <div className="deptHome-hodWrapper">
            <div className="deptHome-hodImgDiv">
              <img src={hod.image} alt="" className="deptHome-hodImg" />
            </div>
            <div className="deptHome-hodContDiv">
              <p className="deptHome-hodCont">{hod.thought}</p>
            </div>
          </div>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">PROGRAM EDUCTIONAL OBJECTIVES</h2>
          {peo.map((elem) => {
            return (
              <>
                <p className="deptHome-para">{elem}</p>
              </>
            );
          })}
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">PROGRAM OUTCOMES</h2>
          <p className="deptHome-para">
            Graduates of this Engineering program of Sri Krishna College of
            Technology will have the ability to
          </p>
          <ol className="deptHome-ol">
            {po.length > 0 &&
              po.map((elem, index) => {
                if (index === 0) return <></>;
                return (
                  <>
                    <li className="deptHome-li">{elem}</li>
                  </>
                );
              })}
          </ol>
        </div>
        <div className="deptHome-contentDiv">
          <h2 className="deptHome-heading">PROGRAM SPECIFIC OUTCOMES</h2>
          <p className="deptHome-para">
            A graduate of this Engineering Program of Sri Krishna College of
            Technology will demonstrate:
          </p>
          <ol className="deptHome-ol">
            {pso.length > 0 &&
              pso.map((elem, index) => {
                if (index === 0) return <></>;
                return (
                  <>
                    <li className="deptHome-li">{elem}</li>
                  </>
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
}

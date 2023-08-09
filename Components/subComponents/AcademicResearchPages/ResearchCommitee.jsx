import { useEffect } from "react";
import "./styles/researchcommitee.css";

export default function ResearchCommitee() {
  useEffect(() => {
    import(
      "../../../DataCenter/subComponentsData/Research/AcademicResearch/People"
    ).then((res) => {
      const resComm = document.querySelector("#resComm");
      resComm.innerHTML = res.default.content;
    });
  }, []);

  return (
    <>
      <div id="resComm" className="res-comm-wrapper"></div>
    </>
  );
}

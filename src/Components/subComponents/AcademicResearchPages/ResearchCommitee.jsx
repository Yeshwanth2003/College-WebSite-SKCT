import useImport from "../../../CustomHooks/useImport";
import "./styles/researchcommitee.css";

export default function ResearchCommitee() {
  useImport(
    "subComponentsData/Research/AcademicResearch/People",
    ({ err, data }) => {
      const resComm = document.querySelector("#resComm");
      resComm.innerHTML = data.content;
    }
  );

  return (
    <>
      <div id="resComm" className="res-comm-wrapper"></div>
    </>
  );
}

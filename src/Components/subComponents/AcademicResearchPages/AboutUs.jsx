import { useEffect } from "react";
import useImport from "../../../CustomHooks/useImport";
import "./styles/aboutus.css";

export default function AboutUs() {
  useImport(
    "subComponentsData/Research/AcademicResearch/aboutus",
    ({ err, data }) => {
      let wrapper = document.getElementById("arAboutWrapper");
      wrapper.innerHTML += data.content;
    }
  );

  return (
    <>
      <div id="arAboutWrapper" className="ar-aboutus-wrapper"></div>
    </>
  );
}

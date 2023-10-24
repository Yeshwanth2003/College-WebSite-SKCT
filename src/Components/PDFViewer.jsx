import { useState } from "react";
import useImport from "../CustomHooks/useImport";
import "./Style/pdfViewer.css";

export default function PDFViewer({ link }) {
  let [PDF, setPDF] = useState(null);

  useImport(`CommonPDF/${link}`, ({ err, data }) => {
    setPDF(data);
  });

  return (
    <>
      <embed type="application/pdf" src={PDF}></embed>
    </>
  );
}

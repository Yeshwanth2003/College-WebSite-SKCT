import "./style/formduplicate.css";
import { FDPts,FILinks } from "./FormIndex";

export default function FormDuplicate() {
  return (
    <>
      <div className="formdup-wrapper">
        <h3 className="formdup-heading formdup-elems">
          INSTRUCTION FOR THE ISSUE OF NEW / DUPLICATE CERTIFICATE :
        </h3>
        <ul className="formdup-ul formdup-elems">
          {FormDuplicateData.p1.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <FormDupTableGenerator tabledata={FormDuplicateTableData} />
        <ul className="formdup-ul formdup-elems">
          {FormDuplicateData.p2.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <h3 className="formdup-heading formdup-elems">
          Check List for Issue of Duplicate Certificate:
        </h3>
        <ul className="formdup-ul formdup-elems">
          {FormDuplicateData.p3.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <h3 className="formdup-heading formdup-elems">
          If the Grade Sheets are Damaged:
        </h3>
        <p className="formdup-p formdup-elems">
          One has to apply to Controller of Examinations for the issue of New
          Grade Sheet and must surrender the damaged grade sheet and pay the fee
          of <span className="formz-highlight"> 1,000/- per grade sheet. </span>
          {"("}Affidavit and Non-Traceable Certificate is not necessary for
          issue of New Grade Sheet{")"}.
        </p>
        <FILinks links={FormDuplicateLinks}/>
      </div>
    </>
  );
}

function FormDupTableGenerator({ tabledata }) {
  return (
    <>
      <div className="fduptg-wrapper">
        {tabledata.map((elem) => {
          return (
            <>
              <FormDupTable tabledata={elem} />
            </>
          );
        })}
      </div>
    </>
  );
}

function FormDupTable({ tabledata }) {
  return (
    <>
      <br></br>
      <div className="fdupt-heading">
        <h4 className="fdupt-text">{tabledata.heading}</h4>
      </div>
      <table className="fdupt-table">
        <tbody className="fdupt-tbody">
          {tabledata.fields.map((elem, index) => {
            return (
              <>
                <FDupRow cat={elem.cat} index={index + 1} price={elem.price} />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function FDupRow({ index, cat, price }) {
  return (
    <>
      <tr className="fduprow-tr">
        <td className="fduprow-td">{index}</td>
        <td className="fduprow-td">{cat}</td>
        <td className="fduprow-td">{price}</td>
      </tr>
    </>
  );
}

const FormDuplicateData = {
  p1: [
    "Duplicate certificate will be issued only when it is lost or destroyed irrevocably.",
    "Application should be duly filled-in along with an affidavit detailing the circumstances under which the original certificate was lost or destroyed and Non-Traceable Certificate issued by the Police Station situated in the area where the certificate was lost.\nThe affidavit should be duly executed before the Notary Public typed on a Twenty Rupees stamped paper.",
    "Application shall be complete in every respect. Failure to furnish correct details may cause delay in the issue of the certificate. The application shall be filled in only by the candidate otherwise it will be rejected.",
    "The fee for the issue of various certificates is as follows:",
  ],
  p2: [
    "The fees should be paid through the college office.",
    "Fees once paid shall neither be refunded nor adjusted against any other certificate under any circumstances.",
  ],
  p3: [
    " Application form to be downloaded and duly filled in with signature of the student.",
    "Affidavit from Notary Public typed on a Twenty Rupees stamped paper. (Format to be downloaded).",
    "Non-Traceable Certificate.",
    "Photocopy of fee paid receipt.",
  ],
};

const FormDuplicateTableData = [
  {
    heading: "FIRST TIME",
    fields: [
      { cat: "Grade Statement", price: "1000/-Per Grade Sheet" },
      { cat: "Consolidated Statement of Grades", price: "1000" },
      { cat: "Rank Certificate", price: "1000" },
    ],
  },
  {
    heading: "SECOND TIME",
    fields: [
      { cat: "Grade Statement", price: "2000/-Per Grade Sheet" },
      { cat: "Consolidated Statement of Grades", price: "2000" },
      { cat: "Rank Certificate", price: "2000" },
    ],
  },
];

const FormDuplicateLinks=[
  {
    name:"CLICK HERE TO DOWNLOAD THE APPLICATION",
    link:"https://skct.edu.in/v1/coe/Duplicate_Application.pdf"
  },
  {
    name:" CLICK HERE TO DOWNLOAD THE AFFIDAVIT",
    link:"https://skct.edu.in/v1/coe/Duplicate_Affidative_Format.docx"
  }
]
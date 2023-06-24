import "./style/formnamechange.css";
import { FDPts,FILinks } from "./FormIndex";

export default function FormNameChange() {
  return (
    <>
      <div className="fnamechange-wrapper">
        <h3 className="fnamec-heading fnamec-elem">
          INSTRUCTION FOR THE APPLICANTS :
        </h3>
        <ul className="fnamec-ul fnamec-elem">
          {FormNameChangeData.p1.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <h3 className="fnamec-heading fnamec-elem">
          Check List for Applying for Name Change:
        </h3>
        <ul className="fnamec-ul fnamec-elem">
          {FormNameChangeData.p2.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
      <FILinks links={NameChangeLinks}/>
      </div>
    </>
  );
}

const FormNameChangeData = {
  p1: [
    "The Change of name will be approved based on the notifications of Tamil Nadu Government Gazette.",
    'The candidate should apply for name change through the Principal and should submit a Demand Draft for Rs.1,500/- Drawn in favour of "The Director Student Affairs, Anna University Chennai" payable at Chennai along with a copy of the Tamil Nadu Government Gazette (Attested copy of the first page and the page in which the name has been changed) and attested copy of the previous semester mark sheet.',
    "Name change will be effected in the Anna University database as per the above procedure.",
    "The change of name will be approved only after obtaining remarks from the Anna University, Chennai. The Grade sheets issued by the college will reflect the name change issued on or after the date of Gazette notification.",
  ],
  p2:[
"Duly filled in application form.",
" Attested photocopy of Tamil Nadu Government Gazette notification (first page and the page in which the name has been changed).",
"Demand Draft for Rs.1,500/- drawn in favour of \"The Director Student Affairs, Anna University Chennai\" payable at Chennai.",
`Attested photocopies of
>>10th Mark Sheet >> 12th Mark Sheet >> Diploma Certificate (if applicable) >> Previous Semester Grade Sheet(s) >> UG Degree Certificate (for PG Students only).`
  ]
};
const NameChangeLinks = [
  {
    name:"CLICK HERE TO DOWNLOAD THE APPLICATION",
    link:"https://skct.edu.in/v1/coe/Namechange_Application.pdf"
  }
]
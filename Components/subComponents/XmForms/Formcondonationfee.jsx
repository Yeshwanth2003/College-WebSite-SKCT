import "./style/formcondonationfee.css";
import { FDPts, FILinks } from "./FormIndex";

export default function FormConFee() {
  return (
    <>
      <div className="formconfee-wrapper">
        <h3 className="formconfee-h3 formconfee-elem">
          PROCEDURE FOR PAYMENT OF CONDONATION FEE :
        </h3>
        <ul className="formconfee-ul formconfee-elem">
          {Datas.p1.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <FILinks links={Datas.links}/>
      </div>
    </>
  );
}

const Datas = {
  p1: [
    "A Candidate securing overall attendance between 70% and 79% in his/her current semester due to medical reasons / participation in co-curricular and extra-curricular activities may be permitted to appear for the current semester examinations after producing proper evidence.",
    "The reason if found true shall be forwarded to the Principal by Head of the Department.",
    "Principal on verifying the evidence produced by the candidate at his discretion may / may not permit a candidate to appear for the examination.",
    "If the evidence produced by the candidate is satisfactory the Principal may permit the candidate to pay a condonation fee.",
    "The said fee must be paid by the candidate within a couple of working days in college office and submit a copy of duly filled in application copy along with the fee paid receipt to CoE office.",
  ],
  links: [
    {
      name: "CLICK HERE TO DOWNLOAD APPLICATION",
      link: "https://skct.edu.in/v1/coe/Application%20for%20Payment%20of%20Condonation%20fee.pdf",
    },
  ],
};

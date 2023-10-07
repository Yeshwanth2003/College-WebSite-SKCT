import "./style/formtrans.css";
import { FDPts,FILinks } from "./FormIndex";

export default function FormTrans() {
  return (
    <>
      <div className="ftrans-wrapper">
        <h3 className="ftrans-h3 ftrans-elem">
          PROCEDURE FOR APPLYING FOR TRANSCRIPTS :
        </h3>
        <ul className="ftrans-ul ftrans-elem">
          {TransPts.p1.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <h3 className="ftrans-h3 ftrans-elem">
          Check List for Applying for Transcripts:
        </h3>
        <ul className="ftrans-ul ftrans-elem">
          {TransPts.p2.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <FILinks links={TransPts.links}/>
      </div>
    </>
  );
}

const TransPts = {
  p1: [
    "Candidates shall download the application form for issue of Transcripts and submit the duly filled in application form in the Office of the Controller of Examinations.",
    "The application form should be submitted along with the required number of Photocopies of the grade sheets / consolidated grade sheets / provisional certificate / degree certificate and rank certificate to the office of Controller of Examinations.",
    "The candidate may either come in person or send an authorized person for collecting the Transcript Copies. The authorized person should submit authorization letter, Photo ID proof.",
    "Copies of grade sheets taken in colour photo copiers will not be attested.",
    "The fee for issuing transcript is (Rupees Five Hundred Only)  500/- per set should be paid in college office and the photocopy of the fee paid receipt should be enclosed along with the application form.",
    "Per set means : One photocopy of individual grade sheets.\nOne photocopy of consolidated grade sheet.\nOne photocopy of provisional certificate.\nOne photocopy of degree certificate.\nOne photocopy of rank certificate.",
    "The Transcripts, after attestation, will be placed in sealed covers and handed over in person to the candidate/authorized person after acknowledging receipt of the Transcript Covers. The candidates shall make their own arrangements for sending the transcripts covers to Foreign Universities.",
    "The attestation will be done only for the grade sheets issued by the Controller of Examinations, Sri Krishna College of Technology. Other grade sheets will not be attested.",
  ],
  p2: [
    "Duly filled in application form.",
    "Required number of photocopy of certificates (both front & back side).",
    "Photocopy of fee paid receipt –  ₹500/- per set.",
    "Transcript covers for sealing the transcript copies – (self-adhesive covers shall be preferred).",
    "If transcripts are to be received through authorized person – authorization letter and ID proof to be submitted at the time of receiving the transcripts.",
  ],
  links:[
     {
       name:"CLICK HERE TO DOWNLOAD THE APPLICATION",
       link:"https://skct.edu.in/v1/coe/APPLICATION%20FOR%20ISSUE%20OF%20TRANSCRIPTS.pdf"
     }
   ]
};

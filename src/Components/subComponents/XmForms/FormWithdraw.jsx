import "./style/formwithdraw.css";
import { FDPts, FILinks } from "./FormIndex";

export default function FWithdraw() {
  return (
    <>
      <div className="fwdraw-wrapper">
        <h3 className="fwd-h3 fwd-elem">
          PROCEDURE FOR APPLYING FOR WITHDRAWAL FROM END SEMESTER EXAMINATIONS :
        </h3>
        <ul className="fwd-ul fwd-elem">
          {Datas.p1.map((elem) => {
            return (
              <>
                <FDPts point={elem} />
              </>
            );
          })}
        </ul>
        <b className="fwd-b fwd-elem">
          Note: Student may approach Controller Office for any further
          clarification in this regard either personally or through authorized
          persons.
        </b>
        <FILinks links={Datas.links}/>
      </div>
    </>
  );
}

const Datas = {
  p1: [
    " A student may, for valid reasons, can apply for withdrawal from appearing for the end semester examinations in any course or courses of only one semester examination.",
    "The student who is applying for withdrawal should NOT have any standing / history of arrears.",
    " Withdrawal is applicable only for students who are eligible to appear for the examinations i.e., those who are not permitted to write the exam for want of attendance or those who have not paid examination fee are not eligible for applying for withdrawal.",
    "The application should be made prior to the commencement of the examination of the course or courses and it should be recommended and forwarded by the Tutor and Head of the Department.",
    "Withdrawal shall not be considered as an appearance for deciding the eligibility of a students for First Class with Distinction.",
  ],
  links: [
    {
      name: "CLICK HERE TO DOWNLOAD APPLICATION",
      link: "https://skct.edu.in/v1/coe/Application_for_Withdrawn.pdf",
    },
  ],
};

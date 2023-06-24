import { FDPts, FILinks } from "./FormIndex";
import "./style/formtempb.css";

export default function FTempB() {
  return (
    <>
      <div className="ftempb-wrapper">
        <h3 className="ftempb-h3 ftemp-elem">
          PROCEDURE FOR APPLYING FOR TEMPORARY BREAK OF STUDY :
        </h3>
        <ul className="ftempb-ul ftempb-elem">
          {
               Datas.p1.map(elem=>{
                    return(
                         <>
                         <FDPts point={elem}/>
                         </>
                    )
               })
          }
        </ul>
        <b className="ftempb-b ftempb-elem">
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
     "p1":[
          " A student may, for valid reasons, can apply for temporary break of study and re-join the programme in a later respective semester, he/she shall apply to the Principal through the Head of the Department.",
          "A student is permitted to re-join the programme at the respective semester as and when it is offered after the break subject to the approval of Directorate of Technical Education / affiliating university.",
          "The condition specified for passing all the courses for the purpose of classification shall be applicable to such break of study permitted.",
          "The student permitted to re-join the programme after the break shall be governed by the curriculum and regulations in force at the time of re-joining. Such student may have to do additional courses as prescribed by the CoE / Principal if the regulation warrants.",
          "The total period for completion of the programme reckoned from, the commencement of the semester to which the student was first admitted shall not exceed the maximum period specified in the regulation.",
          "If any student is detained for want of requisite attendance, progress and conduct, the period spent in that semester shall not be considered as authorized ‘Break of Study’"
     ],
     links:[
          {
               name:"CLICK HERE TO DOWNLOAD THE APPLICATION",
               link:"https://skct.edu.in/v1/coe/Application%20for%20temporary%20break%20of%20study.pdf"
          }
     ]
}
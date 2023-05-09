import { useEffect, useState } from "react";
import "./Style/Management.css";

export default function Management() {
  let [princiImg, setPrinciImg] = useState("");
  let [princiName, setPrinciName] = useState("");

  useEffect(() => {
    fetch("https://data.skct.edu.in/principal/")
      .then((res) => res.json())
      .then((dats) => {
        setPrinciImg(`https://data.skct.edu.in${dats.img}`);
        setPrinciName(dats.name);
      });
  }, []);

  return (
    <>
      <div className="management-wrapper">
        <div className="management-contentDiv">
          <div className="management-headingDiv">
            <h2 className="management-h2">MANAGEMENT</h2>
          </div>
          <div className="management-body">
            <div className="management-chairPersonDiv managementCard-UpperCards">
              <ManagementCard
                IMG={
                  "https://www.skct.edu.in/static/img/chairperson.d0c53ff.jpg"
                }
                NAME={"Smt. S. Malarvizhi"}
                POSITION={"CHAIRPERSON & MANAGING TRUSTEE"}
                QUOTE={
                  "“The highest education is that which does not merely give us information but makes our life in harmony with all existence”.-"
                }
                WRITER={"- Rabindranath Tagore"}
                PARA={`The rise of SKCT to prominence over its thirty five years of existence is primarily attributed to its mission to accomplish expectations of the society and industry by nurturing the students to be competent professionals with integrity, besides profound technical knowledge and skill. In rethinking education to deal with rapid changes at the dawn of the twenty-first century, innovation, technology, and research are indispensable tools of education. As we are quite aware, education is central to the knowledge-based society that derives from human potential.
“Learning to Be, and Learning: The Treasure Within” have been key sources for education policy makers and practitioners internationally. I invite you to explore the treasure within you through outstanding teaching, choice based credit system, and a wide range of academic programs and extra-curricular offerings which SKCT has. Generations of students, staff, alumni, and parents have built our reputation, and we continue to grow in the eyes of the public. Welcome to SKCT and witness the pathways of learning which leads to the mainstream of the knowledge revolution. Come and confront confidently the challenges that the future holds in store!`}
              />
            </div>
            <div className="management-trusteeDiv managementCard-UpperCards">
              <ManagementCard
                IMG={
                  "https://www.skct.edu.in/static/img/trusteeAditya.7c4c409.jpg"
                }
                NAME={"Mr.K.Adithya, B.E. MOB (Australia)"}
                PARA={`Since its founding in 1985, Sri Krishna College of Technology (SKCT) has grown to become one of the premier technical institutions of higher learning in this part of the country. It is a research-led Institute, known for the excellence of its teaching, skill development, its research, and its service to local, national, and International communities. As we know, knowledge will be a key resource and will be highly sought-after within India and around the world. We at SKCT provide value-based education to our youth and enable them to join us in the process of nation-building and inclusive growth in their chosen career.
I, therefore, welcome the aspiring students to be part of our vision and become the stars of tomorrow.`}
                POSITION={"TRUSTEE"}
                QUOTE={
                  "“The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.”."
                }
                WRITER={"- Mark Twain"}
              />
            </div>
            <div className="management-ceo managementCard-UpperCards">
               <ManagementCard 
               IMG={"https://www.skct.edu.in/static/img/two.8136803.jpg"}
               NAME={"Dr. K .Sundararaman, M.Com., M.Phil., Ph.D."}
               POSITION={"CEO"}
               PARA={`Dr. K .Sundararaman, M.Com., M.Phil., Ph.D. has four decades of teaching experience to his credit as the Head of the Department of Commerce and also more one and half decades of dynamic administrative experience in managing all the courses under self –financing stream in a reputed autonomous College in Coimbatore. He joined the college as Principal in the year 2005. He has published five books and his area of specialization is Quality Assurance in Higher Education.`}
               />
            </div>
            <div className="management-leadersDiv">
              <div className="management-princiDiv management-leaderCardHolders">
                <LeaderCard
                  EMAIL={"principal@skct.edu.in"}
                  NAME={princiName}
                  POSITION={"Principal"}
                  IMG={princiImg}
                />
              </div>
              <div className="management-deanAdDiv management-leaderCardHolders">
                <LeaderCard
                  EMAIL={"deanadmin@skct.edu.in"}
                  NAME={"Dr. R. Ramesh Kumar"}
                  POSITION={"Dean Administration"}
                  IMG={
                    "https://skct.edu.in/Institutionalleaders/dean%20admin.jpeg"
                  }
                />
              </div>
              <div className="management-deanAcDiv management-leaderCardHolders">
                <LeaderCard
                  EMAIL={"dean_academics@skct.edu.in"}
                  NAME={"Dr. P. Manju"}
                  POSITION={"Dean Academics & Students Affairs"}
                  IMG={
                    "https://skct.edu.in/Institutionalleaders/Dean_academics%20&%20Student%20Affairs.JPG"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LeaderCard({ IMG, NAME, POSITION, EMAIL }) {
  return (
    <>
      <div className="leaderCard-wrapper">
        <div className="leaderCard-imgDiv">
          <img src={IMG} alt="" className="leaderCard-img" />
        </div>
        <div className="leaderCard-contentDiv">
          <h2 className="leaderCard-name">{NAME}</h2>
          <h3 className="leaderCard-position">{POSITION}</h3>
          <p className="leaderCard-email">{EMAIL}</p>
        </div>
      </div>
    </>
  );
}

function ManagementCard({ NAME, IMG, POSITION, PARA, QUOTE, WRITER }) {
  return (
    <>
      <div className="managementCard-wrapper">
        <div className="managementCard-div1">
          <div className="managenentCard-imgDiv">
            <img src={IMG} alt="" className="managementCard-img" />
          </div>
          <div className="managementCard-nameDiv">
            <h2 className="managementCard-name">{NAME}</h2>
          </div>
        </div>
        <div className="managementCard-div2">
          <div className="managementCard-posDiv">
            <h2 className="managementCard-pos">{POSITION}</h2>
          </div>
          <div className="managementCard-contentDiv">
            {QUOTE &&
              (() => (
                <>
                  <p className="managementCard-quote">
                    <span className="managementCard-quoteSpan">{QUOTE}</span>
                    {WRITER}
                  </p>
                </>
              ))()}
            <p className="managementCard-p">{PARA}</p>
          </div>
        </div>
      </div>
    </>
  );
}

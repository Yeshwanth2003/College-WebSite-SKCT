import "./Style/Management.css";
import React, { useEffect, useState } from "react";

export default function Management(props) {
  const [principal, setPrincipal] = useState({});

  useEffect(() => {
    fetch("https://data.skct.edu.in/principal/")
      .then((res) => res.json())
      .then((dats) => {
        setPrincipal(dats);
      });
  }, []);

  return (
    <>
      <div className="management-head">
        <h2>Management</h2>
        <hr />

        <div className="management-container">
          <div className="management-body">
            <div className="management-contents">
              <div className="mng-cnt-img">
                <div>
                  <img
                    className="mng-profile"
                    width={300}
                    src="https://skct.edu.in/static/img/chairperson.d0c53ff.jpg"
                    alt="chairperson.d0c53ff.jpg"
                  />
                </div>
                <p className="mng-profile-name">Smt. S. Malarvizhi</p>
              </div>
              <div className="mng-cnt-abt">
                <h2 style={{ textAlign: "center", padding: 0 }}>
                  chairperson & managing trustee
                </h2>
                <i className="mng-quote">
                  “The highest education is that which does not merely give us
                  information but makes our life in harmony with all existence”
                  <span className="mng-quote-author" style={{ color: "black" }}>
                    {" "}
                    - Rabindranath Tagore
                  </span>
                </i>
                <p>
                  The rise of SKCT to prominence over its thirty five years of
                  existence is primarily attributed to its mission to accomplish
                  expectations of the society and industry by nurturing the
                  students to be competent professionals with integrity, besides
                  profound technical knowledge and skill. In rethinking
                  education to deal with rapid changes at the dawn of the
                  twenty-first century, innovation, technology, and research are
                  indispensable tools of education. As we are quite aware,
                  education is central to the knowledge-based society that
                  derives from human potential.
                  <br />
                  “Learning to Be, and Learning: The Treasure Within” have been
                  key sources for education policy makers and practitioners
                  internationally. I invite you to explore the treasure within
                  you through outstanding teaching, choice based credit system,
                  and a wide range of academic programs and extra-curricular
                  offerings which SKCT has. Generations of students, staff,
                  alumni, and parents have built our reputation, and we continue
                  to grow in the eyes of the public. Welcome to SKCT and witness
                  the pathways of learning which leads to the mainstream of the
                  knowledge revolution. Come and confront confidently the
                  challenges that the future holds in store!
                </p>
              </div>
            </div>
            <hr />

            <div className="management-contents">
              <div className="mng-cnt-img">
                <div>
                  <img
                    className="mng-profile"
                    src="https://skct.edu.in/static/img/trusteeAditya.7c4c409.jpg"
                    alt="chairperson.d0c53ff.jpg"
                  />
                </div>
                <p className="mng-profile-name">
                  Mr.K.Adithya, B.E. MOB (Australia)
                </p>
              </div>
              <div className="mng-cnt-abt">
                <h2 style={{ textAlign: "center", padding: 0 }}>trustee</h2>
                <i className="mng-quote">
                  “The secret of getting ahead is getting started. The secret of
                  getting started is breaking your complex overwhelming tasks
                  into small manageable tasks, and then starting on the first
                  one”
                  <span className="mng-quote-author" style={{ color: "black" }}>
                    {" "}
                    - Mark Twain
                  </span>
                </i>
                <p>
                  Since its founding in 1985, Sri Krishna College of Technology
                  (SKCT) has grown to become one of the premier technical
                  institutions of higher learning in this part of the country.
                  It is a research-led Institute, known for the excellence of
                  its teaching, skill development, its research, and its service
                  to local, national, and International communities. As we know,
                  knowledge will be a key resource and will be highly
                  sought-after within India and around the world. We at SKCT
                  provide value-based education to our youth and enable them to
                  join us in the process of nation-building and inclusive growth
                  in their chosen career. I, therefore, welcome the aspiring
                  students to be part of our vision and become the stars of
                  tomorrow.
                </p>
              </div>
            </div>
            <hr />

            <div className="management-contents">
              <div className="mng-cnt-img">
                <div>
                  <img
                    className="mng-profile"
                    src="https://skct.edu.in/static/img/two.8136803.jpg"
                    alt="chairperson.d0c53ff.jpg"
                  />
                </div>
                <p className="mng-profile-name">
                  Dr. K .Sundararaman, M.Com., M.Phil., Ph.D
                </p>
              </div>
              <div className="mng-cnt-abt">
                <h2 style={{ textAlign: "center", padding: 0 }}>ceo</h2>
                <p style={{ marginTop: 0 }}>
                  Dr. K .Sundararaman, M.Com., M.Phil., Ph.D. has four decades
                  of teaching experience to his credit as the Head of the
                  Department of Commerce and also more one and half decades of
                  dynamic administrative experience in managing all the courses
                  under self –financing stream in a reputed autonomous College
                  in Coimbatore. He joined the college as Principal in the year
                  2005. He has published five books and his area of
                  specialization is Quality Assurance in Higher Education.
                </p>
              </div>
            </div>
            <hr />

            <div className="management-contents">
              <div className="mng-cnt-img">
                <div>
                  <img
                    className="mng-profile"
                    src={`https://data.skct.edu.in${principal?.img}`}
                    alt="chairperson.d0c53ff.jpg"
                  />
                </div>
                <p className="mng-profile-name">{principal?.name}</p>
              </div>
              <div className="mng-cnt-abt">
                <h2 style={{ textAlign: "center", padding: 0 }}>
                  principal & professor, ece
                </h2>
                <p style={{ marginTop: 0 }}>
                  Committed towards providing a nurturing and inspiring learning
                  environment for our students. We believe that engineering is
                  not just a profession, but a calling to make a difference in
                  the world. Here, we encourage our students to think beyond the
                  textbooks, embrace innovation, and cultivate an
                  entrepreneurial mindset. Together, let us embark on a journey
                  of knowledge, exploration, and endless possibilities. Our
                  mission is to empower the next generation of engineers to
                  become leaders, problem solvers, and change-makers in the
                  ever-evolving field of engineering &nbsp;
                  <a
                    href={`https://data.skct.edu.in${principal?.pdf}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="mng-cnt-abt">
              <h2
                style={{
                  textAlign: "center",
                  padding: 0,
                  marginBottom: "16px",
                }}
              >
                institutional leaders
              </h2>
            </div>
            <div className="management-contents">
              <div
                className="mng-cnt-img"
                style={{
                  display: "grid",
                  placeContent: "center",
                  flex: "1 1 0",
                  padding: 0,
                  margin: 0,
                  position: "relative",
                }}
              >
                <img
                  className="mng-profile-flex"
                  src="https://skct.edu.in/Institutionalleaders/dean%20admin.jpeg"
                  alt="chairperson.d0c53ff.jpg"
                />
                <p
                  className="mng-profile-name"
                  style={{
                    fontSize: "21px",
                    margin: "0px 0px 7px",
                    padding: "10px 5px",
                  }}
                >
                  Dr. Rameshkumar
                </p>
                <h4>DEAN - Academic Affairs & Assessment</h4>
                <a
                  href="mailto:dean_acaa@skct.edu.in"
                  style={{ textAlign: "center" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  dean_acaa@skct.edu.in
                </a>
              </div>
              <div
                className="mng-cnt-img"
                style={{
                  display: "grid",
                  placeContent: "center",
                  flex: "1 1 0",
                  padding: 0,
                  margin: 0,
                  position: "relative",
                }}
              >
                <img
                  className="mng-profile-flex"
                  src="https://skct.edu.in/Institutionalleaders/Dean_academics%20&%20Student%20Affairs.JPG"
                  alt="chairperson.d0c53ff.jpg"
                />
                <p
                  className="mng-profile-name"
                  style={{
                    fontSize: "21px",
                    margin: "0px 0px 7px",
                    padding: "10px 5px",
                  }}
                >
                  Dr. Manju
                </p>
                <h4>DEAN - Accreditation & Ranking</h4>
                <a
                  href="mailto:dean_acr@skct.edu.in"
                  style={{ textAlign: "center" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  dean_acr@skct.edu.in
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

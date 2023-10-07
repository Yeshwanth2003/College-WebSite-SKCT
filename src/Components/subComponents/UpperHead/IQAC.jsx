import "./Style/IQAC.css";
import logo from "../../asserts/collegeHeaderLogo.png";
import { Link } from "react-router-dom";

function IQAC() {
  return (
    <>
      <div className="IQAC-main">
        <div className="iqac-container">
          <div className="IQAC-head">
            <center>
              <img
                className="IQAC-img"
                src={logo}
                alt="SRI KRISHNA COLLGEG OF TECHNOLOGY"
              />
            </center>
            <center>
              <Link to="/">
                <button className="IQAC-Home">Home</button>
              </Link>
            </center>
          </div>

          <div className="IQAC-context">
            <h3 className="IQAC-h3">IQAC</h3>

            <div className="IQAC-about">
              <Link to="/">
                <button className="IQAC-button">Composition & Minutes</button>
              </Link>
              <Link to="/">
                <button className="IQAC-button">
                  Statutory & Non-statutory Bodies
                </button>
              </Link>{" "}
              <Link to="/">
                <button className="IQAC-button">
                  Student Satisfaction Survey
                </button>
              </Link>
              <Link to="/">
                <button className="IQAC-button">NAAC</button>
              </Link>
              <Link to="/">
                <button className="IQAC-button">Feedback Analysis</button>
              </Link>
            </div>
          </div>

          <div className="IQAC-details">
            <p className="IQAC-content">
              Nestled at the foothills of the Western Ghats, located in a
              sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna
              College of Technology (SKCT) is a vibrant institute of higher
              education promoted by Sri Krishna Institutions since 1985. An
              extraordinary freedom of opportunity—to explore, to collaborate
              and to challenge oneself is the hallmark of the Institute which is
              solely attributed to Late Sri S Vankatram, who shaped this citadel
              of learning during its formative period. Being an autonomous
              institute, permanently affiliated to Anna University, Chennai, and
              approved by AICTE, New Delhi, SKCT lays strong emphasis on
              collaborative research and stands apart from other institutes by
              its participatory work culture, student care programmes and high
              industry interaction. In a span of 34 years, it has emerged as one
              of the premier engineering colleges for learning, discovery,
              innovation, expression and discourse under the dynamic leadership
              of the Chairperson and Managing Trustee Smt. S Malarvizhi. The
              college offers 7 undergraduate programmes and 6 postgraduate
              programmes in engineering, technology, and Management Studies.{" "}
            </p>
            <p className="IQAC-content">
              The College is accredited with A Grade and recognised as mentor
              institute by NAAC in 2015 .Five of the seven UG programmes,viz.BE
              (Civil), BE (CSE) ,BE (ECE) ,BE (EEE) and BE (ICE) are currently
              accredited by National Board of Accreditation, New Delhi for the
              fourth cycle while the other two programmes await renewal by the
              committee. Three of its departments are Anna University recognized
              Research Centres.
            </p>
            <p className="IQAC-content">
              The College is ranked at 145th position out of 10,386 Technical
              Institutions in India by National Institutional Ranking Framework
              (NIRF) of Ministry of Human Resource Development (MHRD) during
              2019. The college stood at 11th position in NPTEL ranking in 2017
              and secured ‘AA’ Category by NPTEL. The College is also the
              recipient of Academic Partner Excellence Award – 2017 by ICTACT.
              It is one of the top 30 colleges in India– Hall of Fame for
              overwhelming participation in DST/AICTE -Texas Instruments Powered
              India Innovation Challenge Design Contest Texas contest held in
              2019.
            </p>
            <p className="IQAC-content">
              The college is a recognized Nodal Resource Centre by Spoken
              Tutorials, IIT Bombay, Network Centre for Indian Institute of
              Remote Sensing Outreach Programme and a Nodal Centre for Virtual
              Labs in coordination with College of Engineering, Pune. The
              College is also accredited by National Cyber Safety and Security
              Standards. The institution boasts of faculty who are recipients of
              Outstanding Scientist, Asian Young Professional, and Senior
              Educator Scholar awards and students who continue to bring laurels
              by winning competitions in national and international levels. Our
              student teams are consistent winners of Smart India Hackathon and
              Chhatra Vishwakarma Awards, under Ministry of External Affairs
              since 2017.
            </p>
            <p className="IQAC-content">
              The participatory work culture, student care programmes and high
              industry driven initiatives coupled with social relevance have
              remained the guiding principles of Sri Krishna College of
              Technology down the decades. The Institute has scaled a rapid
              growth in terms of quality and quantity since its inception in
              1985 with an extraordinary freedom of opportunity—to explore, to
              collaborate and to challenge oneself which is indeed the hallmark
              of the Institute. The Institute is committed to the highest levels
              of excellence and quality assurance in all systems and processes,
              academic, and non-academic. It aligns with its Vision of imparting
              world-class education through technology enabled teaching and
              learning processes.
            </p>
            <p className="IQAC-content">
              It lays strong emphasis on collaborative research and stands apart
              from other institutes by always striving to remain at the
              forefront of cutting edge technology and research, applicable for
              betterment of the society at large. The Institute is aware of its
              social responsibility and is engaged with local communities and
              marginal sections of society for capacity building to bring them
              into the mainstream. The Institute is committed to nation building
              and aspires to engage in overall development of students by
              providing a conducive environment for education by enriching the
              academic resources systematically, enforcing innovation in the
              application of technology and nurturing students with requisite
              skill and good character. On the whole, the Institute firmly
              believes that technological education is to serve the society in a
              meaningful way and sincerely emphasizes the same to its students
              and members of faculty.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IQAC;

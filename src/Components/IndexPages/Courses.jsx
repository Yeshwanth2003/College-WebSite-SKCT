import "./style/courses.css";
import depts from "../../DataCenter/OurDepts/ourdepts";

export default function Courses() {
  return (
    <>
      <div className="i-courses-wrapper">
        <div className="i-courses-interface">
          <h2>PROGRAMMES</h2>
        </div>
        <div className="i-courses-container">
          <div className="i-courses-runer">
            {depts.map((elem) => {
              return (
                <>
                  <DeptCard
                    link={elem.innerNav}
                    img={elem.img}
                    name={elem.fullForm}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function DeptCard({ link, img, name }) {
  return (
    <>
      <div className="i-c-dept-wrapper">
        <div className="i-c-dept-content">
          <div className="i-c-img-holder">
            <img src={img} alt="" />
          </div>
          <div className="i-c-info">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

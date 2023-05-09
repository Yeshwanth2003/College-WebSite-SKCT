import { useEffect, useState } from "react";
import "./Style/deptAlumTest.css";

export default function DeptAlumTest({ currentDepartment }) {
  let [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch(`https://data.skct.edu.in/${currentDepartment}/at/`)
      .then((res) => res.json())
      .then((dats) => {
        setTestimonialData(dats);
      });
  }, [currentDepartment]);

  return (
    <>
      <div className="deptAT-wrapper">
        <div className="deptAt-container">
          <div className="deptAt-headingDiv">
            <h2 className="deptAt-h2">TESTIMONIALS</h2>
          </div>
          <div className="deptAt-body">
            {testimonialData.length > 0 &&
              testimonialData.map((elem) => {
                return (
                  <>
                    <TACard
                      name={elem.name}
                      img={`https://data.skct.edu.in${elem.image}`}
                      desc={elem.text}
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

function TACard({ name, img, desc }) {
  return (
     <>
     <div className="tacard-wrapper">
          <div className="tacard-imgWrapper">
               <img src={img} alt="" className="tacard-img" />
          </div>
          <div className="tacard-contents">
               <h3 className="tacard-h3">{name}</h3>
               <p className="tacard-p">{desc}</p>
          </div>
     </div>
     </>
  )
}

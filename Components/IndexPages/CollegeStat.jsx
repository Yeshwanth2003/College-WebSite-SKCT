import { useState } from "react";
import useImport from "../../CustomHooks/useImport";
import "./style/collegestat.css";
import { Link } from "react-router-dom";

export default function CollegeStat() {
  let [data, setData] = useState([]);
  const dataURL = "IndexData/collegeStatData.js";

  useImport(dataURL, ({ err, data }) => {
    if (err) return;
    setData(data);
  });

  return (
    <>
      <div className="clg-stat-wrapper">
        {data.map((elem) => {
          return (
            <>
              <Stat count={elem.count} name={elem.name} link={elem.link} />
            </>
          );
        })}
      </div>
    </>
  );
}

function Stat({ name, count, link }) {
  return (
    <>
      <Link className="stat-box-link" to={Link}>
        <div className="stat-box">
          <h1 className="stat-count">{count}</h1>
          <p className="stat-name">{name}</p>
        </div>
      </Link>
    </>
  );
}

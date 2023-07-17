import { Link } from "react-router-dom";

export default function LaptopUpperHead() {
  return (
    <>
      <ul className="laptopHeader-upperLink-ul">
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <Link to="/coreValues" className="laptopHeader-addLink">
                Core Values
              </Link>
            </h5>
          </div>
        </li>
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <Link
                to={"/IQAC"}
                className="laptopHeader-addLink"
                style={{ color: "gold" }}
              >
                IQAC
              </Link>
            </h5>
          </div>
        </li>
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <Link
                to="/iic"
                className="laptopHeader-addLink"
                style={{ color: "gold" }}
              >
                IIC
              </Link>
            </h5>
          </div>
        </li>
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://117.239.103.162/"
                className="laptopHeader-addLink"
              >
                Alumni
              </a>
            </h5>
          </div>
        </li>
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <Link to="/nisp" className="laptopHeader-addLink">
                NISP
              </Link>
            </h5>
          </div>
        </li>
        <li className="laptopHeader-upperLink-li">
          <div className="laptopHeader-upperLink-contentDiv">
            <h5>
              <Link to="/contact" className="laptopHeader-addLink">
                Contact Us
              </Link>
            </h5>
          </div>
        </li>
      </ul>
    </>
  );
}

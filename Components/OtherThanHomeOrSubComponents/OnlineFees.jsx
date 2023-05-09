import "./Style/onlineFees.css";
import ClgLogo from "../asserts/collegeHeaderLogo.png";

export default function OnlineFees() {
  return (
    <>
      <div className="onlineFees-wrapper">
        <div className="onlineFees-container">
          <div className="onlineFees-headingDiv">
            <img src={ClgLogo} alt="" className="onlineFees-img" />
          </div>
          <div className="onlineFees-body">
            <div className="onlineFees-blinkerDiv">
              <h2 className="onlineFees-blinkerh1">Online Fees Payment Link</h2>
            </div>
            <div className="onlineFees-bodyRest">
              <div className="onlineFees-blinkerDiv2">
                <h3 className="onlineFees-blinkerh1-2">
                  Online Fees Payment Portal
                </h3>
              </div>
              <div className="feesLinks-divOne">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://pgw.srikrishna.ac.in/?key=ujtyj564ty64rt6"
                  className="feesLinks1"
                >
                  College Fees / Hostel Fees / Transport Fees
                </a>
              </div>
              <hr />
              <div className="feesLinks-divtwo">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://radiancetech.co.in/index.php/Payment"
                  className="feesLinks2"
                >
                  Special Course Fees
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

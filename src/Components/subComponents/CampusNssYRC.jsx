import "./Style/campusNssYrc.css";

export default function CampusLife_Nssyrc() {
  return (
    <>
      <div className="campusNssYrc-wrapper">
        <div className="nss_total_div">
          <div className="nss_header">
            <h2>NSS / YRC</h2>
          </div>
          <div className="nss_body">
            <div className="nss_div_cnt">
              <h3 id="nss_title">ABOUT</h3>
              <p id="nss_cnt">
                The aim of the National Service Scheme Programme is to bring
                youth face to face with the community and make efforts to
                improve their life. The NSS volunteer is expected to remain in
                constant touch with the community. The NSS volunteers are to
                devote about 120 hours in Regular Activities for the development
                of the adopted village. Special Camping has been conceived as an
                opportunity to live with that community for 7 days and
                experience the conditions and problems of the people. The NSS
                volunteers need to be inspired to take initiatives for the
                improvement of their condition. Although the focus of the
                Special Camps change periodically and regular programs are
                organized in response to the community needs.
              </p>
            </div>
            <div className="nss_div_cnt">
              <h3 id="nss_title">NSS / YRC INCHARGES</h3>
              <p id="nss_cnt">
                <ol id="nss_li">
                  <li>Mr. V. Mari Anandha Kumar, NSS Programme Officer.</li>
                  <li>Mr. Adarsh Ajayan, YRC Coordinator.</li>
                </ol>
              </p>
            </div>
            <div className="nss_div_cnt">
              <h3 id="nss_title">NSS / YRC ACTIVITIES</h3>
              <div className="nss_act">
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={
                      "https://data.skct.edu.in/media/Awareness_Humanchain_and_rally.jpg"
                    }
                    alt=""
                  ></img>
                </div>
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={
                      "https://data.skct.edu.in/media/NSS_camp__natural_farming.jpg"
                    }
                    alt=""
                  ></img>
                </div>
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={"https://data.skct.edu.in/media/Rally_.JPG"}
                    alt=""
                  ></img>
                </div>
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={"https://data.skct.edu.in/media/Cleaning_campaign.jpg"}
                    alt=""
                  ></img>
                </div>
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={"https://data.skct.edu.in/media/20170119_093839.jpg"}
                    alt=""
                  ></img>
                </div>
                <div className="nss_img">
                  <img
                    id="nss_img"
                    src={"https://data.skct.edu.in/media/IMG_5304.JPG"}
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

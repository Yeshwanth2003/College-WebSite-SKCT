import "./style/campusview.css";

export default function CampusView() {
  return (
    <>
      <div className="campusview-wrapper">
          <div className="campusview-heading-div">
               <h2 className="all-heading-orange">CAMPUS VIEW</h2>
          </div>
        <div className="campusview-videoplayer">
          <div className="campuslife-videotag">
            <iframe
              src="https://www.youtube.com/embed/1Qzr8jDWRVM?autoplay=0&mute=1&controls=0&loop=1&playlist=1Qzr8jDWRVM"
              frameborder="0"
              allowFullScreen
              title="campusView"
              allow="autoplay"
              style={{border:0}} 
            />
          </div>
          <div className="campusview-textcontent">
               
          </div>
        </div>
      </div>
    </>
  );
}

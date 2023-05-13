import './Style/loading.css'

export default function Loading() {
  return (
    <>
      <div className="aniHolder">
        <div className="aniDiv" style={{"--i":"1"}}></div>
        <div className="aniDiv" style={{"--i":"2"}}></div>
        <div className="aniDiv" style={{"--i":"2"}}></div>
      </div>
    </>
  );
}

import './Style/loading.css'

export default function Loading() {
  return (
    <>
      <div class="aniHolder">
        <div class="aniDiv" style={{"--i":"1"}}></div>
        <div class="aniDiv" style={{"--i":"2"}}></div>
        <div class="aniDiv" style={{"--i":"2"}}></div>
      </div>
    </>
  );
}

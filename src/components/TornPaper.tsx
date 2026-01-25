import './TornPaper.css'

function TornPaper() {
  return (
    <div className="torn-paper-container">
      <img
        src="/rip.png"
        alt=""
        role="presentation"
        className="torn-paper-image"
        draggable={false}
      />
    </div>
  )
}

export default TornPaper

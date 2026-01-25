import './About.css'

function About() {
  return (
    <div className="about">
      <p className="about-text">
        Hi I'm Calvin, currently a master's student at <span className="highlight">@Columbia</span>, I previously studied at <span className="highlight">@Tsinghua</span> and worked at Companies like <span className="highlight">@Tencent</span> and also did research projects on usage of LLMs within the Legal Industry.
      </p>
      <p className="about-body">
        I enjoy building small projects that help me learn more about new software and technologies out there. Lately, I’ve been especially interested in exploring how AI can be used within the gaming industry.
      </p>
      <div className="about-image">
        <img src="/about.png" alt="About" />
      </div>
    </div>
  )
}

export default About

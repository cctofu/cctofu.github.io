import { EdgeText, PageLabel } from '../components/Furniture'
import './About.css'

function About() {
  return (
    <div className="page--fixed about">
      <PageLabel primary="About" secondary="All about me" />
      <EdgeText text="Columbia · Tsinghua · Tencent" />

      <div className="about__copy">
        <p className="about__lede">
          Hi, I'm Calvin. Currently a Engineering master's student at{' '}
          <span className="highlight">@Columbia</span>. I previously studied Computer Science at{' '}
          <span className="highlight">@Tsinghua</span> and worked at companies like{' '}
          <span className="highlight">@Roblox</span>, <span className="highlight">@Tencent</span>.
        </p>
        <p className="about__body">
          Coding is hard sometimes so I like to have some fun with photography. :)
        </p>
      </div>

      <div className="about__image">
        <img
          src="/about.jpg"
          alt=""
          role="presentation"
          width={1536}
          height={2304}
          loading="eager"
        />
      </div>
    </div>
  )
}

export default About

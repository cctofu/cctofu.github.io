import Stamp from '../components/Stamp'
import { PageLabel } from '../components/Furniture'
import './Home.css'

function Home() {
  return (
    <div className="page--fixed home">
      <PageLabel primary="HOME" secondary="2026" />
      <div className="stamp-anchor">
        <Stamp image="/home.webp" />
      </div>

      <div className="home__caption">
        <h1 className="home__name">CALVIN CHANG</h1>
        <p className="home__role">Photography &amp; Software</p>
      </div>
    </div>
  )
}

export default Home

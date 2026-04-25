import Sidebar from '../components/Sidebar'
import SelectActivite from '../components/SelectActivite'

function Home() {
  return (
    <div className="booking-wrapper">
      <Sidebar etapeActive={1} />
      <SelectActivite />
    </div>
  )
}

export default Home
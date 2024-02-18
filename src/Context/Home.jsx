import { useEffect, useState } from "react"
import LineCharts from "./LineChart";

const Home = () => {
  const [circle, setcircle] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setcircle(circle + 1)
    }, circle === 85 ? 1000000000 : 50);
  })

  return (
    <header>
      <div className="headerTop">

        <div className="headerLeft">
          <h2>Dashboard</h2>
        </div>
        <div className="headerRight">
          <div className="search">
            <input type="text" placeholder="Search" />
            <button><i className="fa fa-search" ></i></button>
          </div>
        </div>
      </div>
      <div className="headerCenter">
        <div className="circleCharts">
          <h3>Bozor Iqtisodiyoti</h3>
          <div className="circleChart" style={{ background: `conic-gradient(dodgerblue ${circle}%,transparent ${circle}%)` }}>
            <div className="circle">
              <h2>{circle}%</h2>
            </div>
          </div>
        </div>
        <LineCharts/>
      </div>
    </header>
  )
}

export default Home
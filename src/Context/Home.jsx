import { LineCharts, BarCharts } from "./LineChart";

const Home = () => {


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
          <BarCharts />
        </div>
        <LineCharts />
      </div>
    </header>
  )
}

export default Home
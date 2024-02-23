import { Lines, Bars ,Starts, News} from "./LineChart"
const Home = () => {
  return (
    <div className="charts" >
      <Lines />
      <Bars />
      <News/>
      <Starts/>
    </div>
  )
}

export default Home
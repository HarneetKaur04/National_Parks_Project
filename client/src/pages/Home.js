
import ExplorePics from '../components/ExplorePics'
import Header from '../components/Header'
import ParkSummaryCards from '../components/ParkSummaryCards'
import ThingsToDo from '../components/ThingsToDo'



const Home = ({parksInfo}) => {

  return (
    <>
        <Header/>
        <ParkSummaryCards parksInfo={parksInfo} num={8} title={"Explore"} seeMore={<button>See More</button>}/>
        <ThingsToDo parksInfo={parksInfo}/>
        <ExplorePics parksInfo={parksInfo}/>
    </>
  )
}

export default Home
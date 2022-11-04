
import ExplorePics from '../components/ExplorePics'
import Header from '../components/Header'
import ParkSummaryCards from '../components/ParkSummaryCards'
import ThingsToDo from '../components/ThingsToDo'



const Home = ({parksInfo, activitiesInfo}) => {
  console.log(activitiesInfo, "activitiesInfo Home")

  let fewActivities = activitiesInfo.slice(0, 6)

  return (
    <>
        <Header/>
        <ParkSummaryCards parksInfo={parksInfo} num={15} title={"Explore"} seeMore={<button>See More</button>}/>
        <ThingsToDo activitiesInfo={fewActivities} num= {6}/>
        <ExplorePics parksInfo={parksInfo}/>
    </>
  )
}

export default Home
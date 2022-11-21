
import ExplorePics from '../components/ExplorePics'
import Header from '../components/Header'
import ParkSummaryCards from '../components/ParkSummaryCards'
import ParkVideo from '../components/ParkVideo'
import ThingsToDo from '../components/ThingsToDo'
import Form from '../components/form'

// Input: props => 
// parksInfo: stores all parksInfo fetched fron National Parks API
// activitiesInfo stores all activitiesInfo fetched fron National Parks API
const Home = ({ parksInfo, activitiesInfo }) => {
  console.log(activitiesInfo, "activitiesInfo Home")
  let fewActivities = activitiesInfo.slice(0, 8)

  return (
    <>
      <Header />
      <ParkSummaryCards parksInfo={parksInfo} selectionIndex={52} title={"Explore"} buttonInput={<button>See More</button>} />
      <Form />
      <ThingsToDo activitiesInfo={fewActivities} title={"Things to Do"} buttonInput={<button>See More</button>} />
      <ParkVideo />
      <ExplorePics parksInfo={parksInfo} />
    </>
  )
};

export default Home;
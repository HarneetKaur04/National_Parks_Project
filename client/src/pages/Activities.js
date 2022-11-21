import ThingsToDo from '../components/ThingsToDo'

// Input: props => activitiesInfo stores all activitiesInfo fetched fron National Parks API
const Activities = ({ activitiesInfo }) => {
  return (
    <ThingsToDo activitiesInfo={activitiesInfo} selectionIndex={1} title={"things to do"}/>
  )
}

export default Activities
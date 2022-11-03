import React from 'react'
import ParkSummaryCards from '../components/ParkSummaryCards'

const AllParks = ({parksInfo}) => {

  // let allStates = parksInfo.map(item => item.states)
  // let oneStateOnly = allStates.filter(item => item.length == 2)
  // let uniqueStates = [...new Set(oneStateOnly)]
  // console.log(uniqueStates, "uniqueStates")

  // let specificStateParks = parksInfo.filter(item => item.states == {specificStateParks})

  // console.log(specificStateParks, "specificStateParks")
  return (
    <div>
      <ParkSummaryCards parksInfo={parksInfo} num={1} title={"List of all National Parks"} />
    </div>
  )
}

export default AllParks;

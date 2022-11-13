import React, {useState} from 'react'
import ParkSummaryCards from '../components/ParkSummaryCards'
import { useLocation } from "react-router-dom";

const AllParks = ({parksInfo}) => {

  const location = useLocation();
  const stateSelectedFromMap = location.state?.data
  // console.log(stateSelectedFromMap, "stateSelectedFromMap*****")

  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(stateSelectedFromMap)

  const handleOpen = () => {
    setOpen(!open);
  };

  // store all states in a variable. Some states shows multiple so filter only where only one state shows up
  let allStates = parksInfo.map(item => item.states).filter(item => item.length == 2)

  // use set to find all unique states
  let uniqueStates = [...new Set(allStates)]
  console.log(uniqueStates, "uniqueStates")

const handleSelectedState = (state) => {
  console.log(state, "checking state")
  setSelectedState(state)
  setOpen(!open);
}


console.log(selectedState, "check******")
  return (
    <div>
      <div className="dropdown">
      <button onClick={handleOpen}>Filter Using States</button>
      {open ? (
        <ul className="menu">
          {uniqueStates.map(state => 
          <li className="menu-item" onClick={() => handleSelectedState(state)}>{state}</li>    
          )} 
        </ul>): null}
      </div>
      <div className='container2'>
      {selectedState? <ParkSummaryCards singleStateParksInfo={selectedState} parksInfo={parksInfo} num={1} title={`List of ${selectedState} National Parks`} />: <ParkSummaryCards parksInfo={parksInfo} num={1} title={"List of all National Parks"} />}
      </div>
      
    </div>
  )
}

export default AllParks;

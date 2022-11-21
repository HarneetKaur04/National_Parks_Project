import React from 'react'
import { Link } from 'react-router-dom';

//Input: props => 
// activitiesInfo: stores all activitiesInfo fetched fron National Parks API
// buttonInput: See More as assigned in home component
// title: Things to do as assigned in home component
const ThingsToDo = ({ activitiesInfo, buttonInput, title }) => {

  // console.log(activitiesInfo, "activitiesInfo****")

  return (
    <>
      <div className='heading'>
        <h2>{title}</h2>
        <Link to="/activities">{buttonInput}</Link>
      </div>
      <div className='posts' >
        {activitiesInfo.map((item, index) => (
          <div className="card_img" key={index}>
            <h3><Link to={`/activities/${item.name}`} state={{ data: item.name }}>{item.name}</Link></h3>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default ThingsToDo;
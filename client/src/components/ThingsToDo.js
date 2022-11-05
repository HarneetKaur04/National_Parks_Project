import React from 'react'
import { Link } from 'react-router-dom';

const ThingsToDo = ({activitiesInfo, seeMore}) => {

console.log(activitiesInfo, "activitiesInfo****")

  return (
    <>
    <h2>Things to Do</h2>
    <Link to="/activities">{seeMore}</Link>
    <div className='posts' >
    {activitiesInfo.map((item,index) => (
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
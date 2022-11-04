import React, { useState } from 'react'

const ThingsToDo = ({parksInfo, num}) => {
  let filterActivitiesWithMoreNumber= []
  function lala (parksInfo) {
    for (let i = 0; i<parksInfo.length; i++){
      // console.log(parksInfo[i].activities.length, "check")
      if (parksInfo[i].activities.length >=6) {
        filterActivitiesWithMoreNumber.push(parksInfo[i].activities)
        filterActivitiesWithMoreNumber = filterActivitiesWithMoreNumber[0]
        return filterActivitiesWithMoreNumber
      } 
    } 
  }

lala(parksInfo)


console.log(filterActivitiesWithMoreNumber, "filterActivitiesWithMoreNumberAgain")

  return (
    <>
    <h2>Things to Do</h2>
    <button>See More</button>
    <div className='posts' >
    {filterActivitiesWithMoreNumber.filter(index => index % num).map((item,index) => (
        <div className="card_img" key={index}>
          <h3>{item.name}</h3>
        </div> 
      )     
    )} 
      </div>
    </>
  )
}

export default ThingsToDo;
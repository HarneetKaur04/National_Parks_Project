import React from 'react'

const ThingsToDo = ({num, activitiesInfo}) => {
//   let filterActivitiesWithMoreNumber= []
//   function lala (parksInfo) {
//     for (let i = 0; i<activitiesInfo.length; i++){
//       // console.log(parksInfo[i].activities.length, "check")
//       if (parksInfo[i].activities.length >=6) {
//         filterActivitiesWithMoreNumber.push(parksInfo[i].activities)
//         filterActivitiesWithMoreNumber = filterActivitiesWithMoreNumber[0]
//         return filterActivitiesWithMoreNumber
//       } 
//     } 
//   }

// lala(parksInfo)


console.log(activitiesInfo, "activitiesInfo****")

  return (
    <>
    <h2>Things to Do</h2>
    <button>See More</button>
    <div className='posts' >
    {activitiesInfo.map((item,index) => (
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
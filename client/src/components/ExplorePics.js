import React from 'react'

const ExplorePics = ({parksInfo}) => {

  let display_few_pics_of_parks = parksInfo.filter((item, index)=> index % 5 === 0)
  console.log(display_few_pics_of_parks, "display_few_pics_of_parks")

  return (
    <>
      <h2>#GetInspired</h2>
      <div className='posts' >
      {display_few_pics_of_parks.map((item, index)=> 
        <div className= "post" key={index}>
            <img className= "postImg" src ={item.images[0].url} alt={item.images[0].altText}/>
            <p className="img__description">{item.images[0].title}</p>
         
        </div>
      )}
        </div>
    </>
  )
  
}

export default ExplorePics
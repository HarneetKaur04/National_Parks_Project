import React from 'react'

const ExplorePics = ({parksInfo}) => {

  let display_few_pics_of_parks = parksInfo.filter((item, index)=> index % 9 === 0)
  console.log(display_few_pics_of_parks, "display_few_pics_of_parks")

  return (
    <>
      <div className='heading'>
      <h2>#GetInspired</h2><br/>
      </div>
      <div className='posts' >
      {display_few_pics_of_parks.map((item, index)=> 
        <div className= "post" key={index}>
            <img className= "postImg" src ={item.images[0].url} onError={({ currentTarget }) => {
            currentTarget.src="./logo.jpg";
              }} alt={item.images[0].altText}/>
            <span className="img__description">{item.images[0].title}</span>
         
        </div>
      )}
        </div>
    </>
  )
  
}

export default ExplorePics
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



const SingleParkDetails = () => {
  let operating = []
    let {parkCode}= useParams();
    console.log(parkCode, "parkCodex")

    const [park, setPark] = useState();
    console.log(`http://localhost:5000/parks/${parkCode}`, "check link")
    const handleDisplay = async () => {
        await fetch(`http://localhost:5000/parks/${parkCode}`)
        .then(response => response.json() )
        .then(parkData => {
          setPark(parkData.data[0])      
        }
         );
      };

      useEffect(()=> {
        handleDisplay()
        
        
      },[])

      console.log(park, "check if park info set correctly")
      console.log(operating, "operating")

  return (
    <>
    {park === undefined && operating.length <= 0 ? (<h2>Loading...</h2>):
    (<>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={park.images[0].url}
            alt={park.images[0].altText}
          />
          <h1 className="singlePostTitle">
          {park.fullName}
          </h1>
        </div> 
      </div>
      <div className='singleParkPost'>
        <div className="sidebarPark">
          <h4 className='sidebarTop'>Operating Hours
            <p>
              
            {Object.entries(park.operatingHours[0].standardHours)}
            </p>
          </h4>
          <h4>Fees: {park.entranceFees[0].cost} $ <p>{park.entranceFees[0].description}</p></h4>
          <h4>Alerts:</h4>
          <h4>{park.directionsInfo} <a href={park.directionsUrl}>Directions</a></h4>

        </div>
        <div className="parkPost">
          <h2 className='postTitle'>About
            <p>{park.description}</p>
          </h2>
          <h2 className='postTitle'>Things to Do
            <div className='posts' >
      {park.activities.slice(0,8).map((item,index) => (
              <div className="card_imgPark" key={index}>
            <h3>{item.name}</h3>
              </div> 
      )     
    )} 
            </div>
          </h2>
        </div>
        
      </div>
     </>)
    
    }
    
  </>
  )
}


export default SingleParkDetails;
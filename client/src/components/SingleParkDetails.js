import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const SingleParkDetails = () => {
  // The park code of the current park to be diplayed.
  let { parkCode } = useParams();
  // console.log(parkCode, "parkCodex")

  // Data of the current park.
  const [parkData, setParkData] = useState();

  const handleDisplay = async () => {
    await fetch(`/api/parks/${parkCode}`)
      .then(response => response.json())
      .then(parkData => {
        setParkData(parkData.data[0])
      }
      );
  };

  useEffect(() => {
    handleDisplay()
  }, [])

  return (
    <>
      {parkData === undefined ? (<h2>Loading...</h2>) :
        (<>
          <div className="singlePost">
            <div className="singlePostWrapper">
              <img
                className="singlePostImg"
                src={parkData.images[0].url}
                alt={parkData.images[0].altText}
              />
              <h1 className="singlePostTitle">
                {parkData.fullName.toUpperCase()}
              </h1>
            </div>
          </div>
          <div className='singleParkPost'>
            <div className="sidebarPark">
              <h4 className='sidebarTop'>Operating Hours
              {parkData.operatingHours[0].standardHours ? 
                <p> 
                  Mon:  {parkData.operatingHours[0].standardHours.monday} <br/>
                  Tues:  {parkData.operatingHours[0].standardHours.tuesday}<br/>
                  Wed:  {parkData.operatingHours[0].standardHours.wednesday}<br/>
                  Thurs:  {parkData.operatingHours[0].standardHours.thursday}<br/>
                  Fri:  {parkData.operatingHours[0].standardHours.friday}<br/>
                  Sat:  {parkData.operatingHours[0].standardHours.saturday}<br/>
                  Sun:  {parkData.operatingHours[0].standardHours.sunday}
                </p> : "No data found"}
              </h4>
              <h4>Fees: <span className="info_Park" >{parkData.entranceFees[0].cost} $ <p className='info_Park'>{parkData.entranceFees[0].description}</p></span></h4>
              <h4>Directions:</h4>
              <span className="info_Park" >{parkData.directionsInfo} <a href={parkData.directionsUrl} target="_blank">Details</a></span>
            </div>
            <div className="parkPost">
              <h2 className='postTitle'>ABOUT
                <p>{parkData.description}</p>
              </h2>
              <h2 className='postTitle'>THINGS TO DO
                <div className='posts' >
                  {parkData.activities.length > 1 ? parkData.activities.slice(0, 8).map((item, index) => (
                    <div className="card_imgPark" key={index}>
                      <h3>{item.name}</h3>
                    </div>
                  )
                  ) : <p>No Activity Data Found</p>}
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
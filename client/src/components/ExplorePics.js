import React from 'react'

// Input: props => parksInfo stores all parksInfo fetched fron National Parks API
const ExplorePics = ({ parksInfo }) => {

  let parkToDisplay = parksInfo.filter((item, index) => index % 40 === 0)

  return (
    <>
      <div className='heading'>
        <h2>#GetInspired</h2><br />
      </div>
      <div className='posts' >
        {parkToDisplay.map((item, index) =>
          <div className="post" key={index}>
            <img className="postImg" src={item.images[0].url} onError={({ currentTarget }) => {
              currentTarget.src = "./logo.jpg";
            }} alt={item.images[0].altText} />
            <span className="img__description">{item.images[0].title}</span>

          </div>
        )}
      </div>
    </>
  )

}

export default ExplorePics
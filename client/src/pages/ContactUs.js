import React from 'react'
import Form from '../components/form'

const ContactUs = () => {
  return (
    <div>
      <h2 className='contactTop'>Have anything to share with us?<br /><br />
        <a href="mailto: harneetsaini40@gmail.com">Send us an email</a>
      </h2>
      <h2 className='contactTop'>Want travel ideas for your next trip to the parks?  Enter your information to join our community.</h2>
      <Form />
    </div>
  )
}

export default ContactUs
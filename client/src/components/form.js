import { useState } from "react";

const Form = () => {

  const initialFormData = {firstname: "", email: ""}

  // This is the oroginal State with emplty initial data 
  const [form, setForm] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false)

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const firstname = event.target.value;
    setForm((form) => ({ ...form, firstname }));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setForm((form) => ({ ...form, email }));
  };

  //A function to handle the post request
  const postSubscriber = async(form) => {
    console.log(form, "fields in form")
    await fetch("/newsletterSubscriber", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    
     
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSubscriber(form);  
    setSubmitted(true)
  };
  console.log(form, "initialFormData")

  return (
  <>
    <div className="form">
    <div className="formBorder">
      <img className="formSide" src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3" alt="book and camera"/>
      <form className="formcentre" onSubmit={handleSubmit}>LOVE National Parks? 
        <h4 className="formInput"> We can't help it either. Get inspired with tips about where to go and what to see on your national park vacation, delivered right to your inbox. <br/><br/>
          <label>First Name</label><br/>
          <input
            type="text"
            data-testid= "content-input" 
            id="add-user-name"
            placeholder="First Name"
            required
            value={form.firstname}
            onChange={handleNameChange}
          /><br/><br/>
          <label>Email</label><br/>
          <input
            type="text"
            data-testid= "content-input2" 
            id="add-user-email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleEmailChange}
          /><br/><br/>
          <button type="submit">Submit</button>
        </h4>
      {submitted? (<p>Registered Successfully!</p>): null}
      </form>
      <div className="formSide">
        <h3>"In every walk with nature one receives far more than he seeks." <br/> <br/> - John Muir</h3>
      </div>
      </div>
      </div>
  </>
  
  )
};

export default Form;

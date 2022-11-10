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
    await fetch("http://localhost:5000/newsletterSubscriber", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    
     
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSubscriber(form);  
    setForm({firstname: "", email: ""})
    setSubmitted(true)
  };
  console.log(form, "initialFormData")

  return (
  <>
  <div className="form">
    <div className="formBorder">
    <div className="formSide">Image</div>
  <form className="formcentre" onSubmit={handleSubmit}>Subscribe now!
        <fieldset className="formInput">
          <label>First Name</label>
          <input
            type="text"
            id="add-user-name"
            placeholder="First Name"
            required
            value={form.firstname}
            onChange={handleNameChange}
          /><br/>
          <label>Email</label>
          <input
            type="text"
            id="add-user-email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleEmailChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
    
      {submitted? (<p>Registered Successfully!</p>): null}
      </form>
      <div className="formSide">Image2</div>
      </div>
      </div>
  </>
  
  )
};

export default Form;

import React, { useState } from "react";

const ProjectForm = () => {
  
  // Breaking Inputs Out Into Separate States
  const [ name, nameSetter ] = useState("");
  const [ about, aboutSetter ] = useState("");
  // ...
  
  // Creating One State Object to Manage Form Data
  const [ formData, formDataSetter ] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  });

  const handleInputChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    // formDataSetter(formData.name)

    formDataSetter((formData) => ({...formData, [name]: value }));
  }
  
  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section>
      {/* <h1>{formData.name}</h1> */}
      
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          onChange={handleInputChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          onChange={handleInputChange} 
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          onChange={handleInputChange} 
          value={formData.phase}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link"
          onChange={handleInputChange}  
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={handleInputChange} 
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Input } from "./shared";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};
const ProjectEditForm = ({ onUpdateProject }) => {
  const [formData, setFormData] = useState(initialState);

  const { name, about, phase, link, image } = formData;

  const { id } = useParams();
  const history = useHistory()
  console.log('id', id)


  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((res) => res.json())
      .then((project) => setFormData(project));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:4000/projects/${id}`, configObj)
      .then((resp) => resp.json())
      .then((updatedProj) => {
        onUpdateProject(updatedProj);
        history.push("/projects")
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Name</label>
      <Input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="about">About</label>
      <Input
        as="textarea"
        id="about"
        name="about"
        value={about}
        onChange={handleChange}
      />

      <label htmlFor="phase">Phase</label>
      <Input
        as="select"
        name="phase"
        id="phase"
        value={phase}
        onChange={handleChange}
      >
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
        <option value="4">Phase 4</option>
        <option value="5">Phase 5</option>
      </Input>

      <label htmlFor="link">Project Homepage</label>
      <Input
        type="text"
        id="link"
        name="link"
        value={link}
        onChange={handleChange}
      />

      <label htmlFor="image">Screenshot</label>
      <Input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <Button type="submit">Update Project</Button>
    </form>
  );
};

export default ProjectEditForm;

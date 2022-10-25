import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Form } from "./shared";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...formData, claps: 0 }),
    };

    fetch("http://localhost:4000/projects", configObj)
      .then((resp) => resp.json())
      .then((project) => {
        onAddProject(project);
        history.push("/projects")
      });
  };

  return (
    <section>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <Input
          as='textarea'
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <Input
          as="select"
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="">Pick a Phase</option>
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
          onChange={handleChange}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <Input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <Button type="submit">Add Project</Button>
      </Form>
    </section>
  );
};

export default ProjectForm;

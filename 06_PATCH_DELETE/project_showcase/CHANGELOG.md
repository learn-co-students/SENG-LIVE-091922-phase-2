# Project Showcase

![Inverse Data Flow](../assets/component-hierarchy-with-data-flow.drawio.svg)

## UI changes to enable editing

To allow users to edit projects, some UI changes were necessary:

- Create a `ProjectEditForm` component that we'll use to edit a project
- In `App`, we need to:
  - keep track of which project is currently selected for editing: `projectToEdit` (initialize as `null`)
  - Add a callback function called `onUpdateProject` that will `setProjectToEdit` back to `null`
  - import `ProjectEditForm`
  - Add conditional logic to check if `projectToEdit` exists:
    - if it does, render `ProjectEditForm`, passing `projectToEdit` and `onUpdateProject` as props
    - if it doesn't, render `ProjectForm` as before
  - define a `onEditProject` callback function that will be called when a user clicks the edit button and store the chosen project in the piece of App state
  - pass the `onEditProject` callback to `ProjectList` -> then to `ProjectListItem`
- Within the `ProjectEditForm` component, we need to:
  - set up our `formData` as an object in this case
  - add a `handleChange` event handler that will dynamically (and non-destructively) update the object
  - add a `handleSubmit` event handler that will make a PATCH request to update the project in the db
- In `ProjectList` we need to:
  - accept `onEditProject` as a prop
  - pass `onEditProject` as a prop to each `ProjectListItem`
  - pass the entire `project` as a prop to `ProjectListItem` instead of spreading out its properties
- In `ProjectListItem` we need to:
  - accept `onEditProject` as a prop
  - accept `project` as a prop (instead of destructuring its properties within the parameter list)
  - destructure the properties of `project` within the body of the component function (so we can still access them within our JSX)
  - Add a button with an edit icon within the JSX
  - add an event listener to the edit icon in ProjectListItem that invokes the `onEditProject` callback with the `project` received as a prop as its argument.
- In `ProjectEditForm` we need to
  - accept `projectToEdit` as a prop
  - refactor component to use a `formData` object in state
  - create an `initialState` variable that points to a `formData` object with empty strings for all values
  - add a `resetForm` function that will reset `formData` to the `initialState`
  - add a `useEffect` hook that runs when `projectToEdit.id` changes
    - inside the side effect function, fetch the project with the matching id
    - load its properties into the formData so they populate the inputs

To allow users to delete projects, a few other UI changes were necessary:

- In `ProjectListItem`, we need to:

  - Add a button with a trash can icon in it.
  - Add a `handleDeleteClick` function that will handle clicks on that button.

- Todo for today
  - in `ProjectEditForm`
    - within `handleSubmit` for `projectEditForm` submit a patch request to update the project in the db.
    - ensure that the project on the page updates properly
  - in `ProjectListItem`
    - within `handleDeleteClick`

## Changelog

### Create a `ProjectEditForm` component that we'll use to edit a project

```jsx
// src/components/ProjectEditForm.js
import React from "react";

function ProjectEditForm() {
  return <form></form>;
}

export default ProjectEditForm;
```

## In `App`, we need to:

### keep track of which project is currently selected for editing: `projectToEdit` (initialize as `null`)

```js
const [projectToEdit, setProjectToEdit] = useState(null);
```

### Add a callback function called `onUpdateProject` that will `setProjectToEdit` back to `null`

```js
const onUpdateProject = () => {
    setProjectToEdit(null);
  };
```

### define a `onEditProject` callback function that will be called when a user clicks the edit button and store the chosen project in the piece of App state

```js
const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };
```

### Import ProjectEditForm

```js
import ProjectEditForm from "./components/ProjectEditForm";
```

### Add conditional logic to check if `projectToEdit` exists:

- if it does, render `ProjectEditForm`, passing `projectToEdit` and `onUpdateProject` as props
- if it doesn't, render `ProjectForm` as before

```jsx
const renderForm = () => {
  if (projectToEdit) {
    return (
      <ProjectEditForm
        projectToEdit={projectToEdit}
        onUpdateProject={onUpdateProject}
      />
    );
  } else {
    return <ProjectForm onAddProject={onAddProject} />;
  }
};
// and update the JSX to replace
// <ProjectForm onCreateProject={onCreateProject} />
// with
{
  renderForm();
}
```

#### pass the `onEditProject` callback to `ProjectList` -> then to `ProjectListItem`

```js
// <ProjectList
//   projects={projects}
//   onSelectedPhaseChange={onSelectedPhaseChange}
//   setSelectedPhase={setSelectedPhase}
//   setSearchQuery={setSearchQuery}
// />
// will become

<ProjectList
  projects={projects}
  onEditProject={onEditProject}
  onSelectedPhaseChange={onSelectedPhaseChange}
  setSelectedPhase={setSelectedPhase}
  setSearchQuery={setSearchQuery}
/>
```

## Within the `ProjectEditForm` component, we need to:

### add the `{ useState }` hook to your import

```js
import React, { useState } from "react";
```

### accept `projectToEdit`, and `onUpdateProject` as props

```js
function ProjectEditForm({ projectToEdit, onUpdateProject }) {
```

### set up our `formData` as an object in this case, we're going to load the object data from the `projectToEdit` and then hit the API to ensure we have the most up to date version

```js
const [formData, setFormData] = useState(projectToEdit);
```

### Copy JSX from ProjectForm as a starting point:

```jsx
<form onSubmit={handleSubmit} className="form" autoComplete="off">
  <h3>Edit Project</h3>

  <label htmlFor="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    value={name}
    onChange={handleOnChange}
  />

  <label htmlFor="about">About</label>
  <textarea id="about" name="about" value={about} onChange={handleOnChange} />

  <label htmlFor="phase">Phase</label>
  <select name="phase" id="phase" value={phase} onChange={handleOnChange}>
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
    value={link}
    onChange={handleOnChange}
  />

  <label htmlFor="image">Screenshot</label>
  <input
    type="text"
    id="image"
    name="image"
    value={image}
    onChange={handleOnChange}
  />

  <button type="submit">Update Project</button>
</form>
```

### Change button text to Update Project

```jsx
<button type="submit">Update Project</button>
```

### Change Header text to Edit Project

```js
<h3>Edit Project</h3>
```

### Destructure values out of `formData` so the JSX still works:

Put this above the return:

```jsx
const { name, about, phase, link, image } = formData;
```

### Confirm that the `handleOnChange` event handler that will dynamically (and non-destructively) update the `formData`

```js
const handleOnChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
```

### add a `handleSubmit` event handler that will need to update the backend eventually

```js
function handleSubmit(event) {
  event.preventDefault();
  // fill me in!
  onUpdateProject();
}
```

### add a useEffect hook that will load the most recent project data from the api into the form state.

```js
useEffect(() => {
  fetch(`http://localhost:4000/projects/${projectToEdit.id}`)
    .then((res) => res.json())
    .then((project) => setFormData(project));
}, [projectToEdit.id]);
```

This should depend on the `projectToEdit`'s `id` so that it only runs if the project we're editing changes (due to a click on another project's edit button). If we forget the dependency array, another fetch to reset the form to what's in the database will happen every time we update one of the inputs!

## In `ProjectList` we need to

### accept `onEditProject` as a prop

```js
const ProjectList = ({
  projects,
  onEditProject,
  setSelectedPhase,
  setSearchQuery
}) => {...
```

### pass `onEditProject` as a prop to each `ProjectListItem`

```js
const projectItems = projects.map((project) => {
  return (
    <ProjectListItem
      key={project.id}
      project={project}
      onEditProject={onEditProject}
    />
  );
});
```

## In `ProjectListItem` we need to:

### accept `onEditProject` and `project` as props

```jsx
const ProjectListItem = ({ id, about, image, link, name, phase }) => {
```

becomes

```jsx
const ProjectListItem = ({ project, onEditProject }) => {
```

### Add a button with an edit icon within the JSX

```bash
npm install react-icons --save
```

```jsx
import { FaPencilAlt, FaTrash } from "react-icons/fa";
```

```js
<footer className="extra">
  <span className="badge blue">Phase {phase}</span>
  <div className="manage">
    <button>
      <FaPencilAlt />
    </button>
    <button>
      <FaTrash />
    </button>
  </div>
</footer>
```

```css
.card .manage {
  display: flex;
  justify-content: end;
  margin: 0.5rem;
  gap: 0.25rem;
}
```

### add an event listener to the edit icon in ProjectListItem that invokes the `onEditProject` callback with the project's `id` received as a prop as its argument.

```js
const handleEditClick = () => {
  onEditProject(project);
};
```

```js
<button onClick={handleEditClick}>
  <FaPencilAlt />
</button>
```

### Add a `handleDeleteClick` function that will handle clicks on the Trash can button.

```js
const handleDeleteClick = () => {};```

```jsx
<button onClick={handleDeleteClick}>
  <FaTrash />
</button>
```

## Feature Questions

### For this feature, what is the user behavior (event) that starts the process?

### Where in my component tree is the UI element that the user interacts with to start the process? (where is the element that is the target of the triggering event?)

### What piece of state needs to update as a result of this user behavior? (And where does that piece of state live within the comoponent hierarchy?)

### If the state that needs to be updated is not in the component where the UI element is rendered, then we need to pass a callback from the parent component that has the state to ensure that it can be updated when the event is triggered from the child component

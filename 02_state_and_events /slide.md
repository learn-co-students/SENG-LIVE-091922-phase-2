---
presentation:
  width: 1500
  height: 1000
  controls: false
---

<!-- slide -->

# State & Events

<!-- slide -->

<h2><strong> ✅ Objectives </strong></h2>

- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React

<!-- slide style="text-align: left;"-->

<h2 style="text-align: center;"><strong>Why is state important?</strong></h2>

<br>

🏹 State is used to track information that changes over time. 

<br>

🏹 Props are passed from the parent component, state is internal to a component. 

<br>

🏹 Values stored in state are meant to change, especially in response to user behaviors (as the user interacts with the DOM and triggers events).

<br>

🏹 We can do conditional rendering based on state values. This is a key component of declarative programming in React: we tie our components to our state by integrating state values into our JSX rendering logic. This way, changes in state eventually cause changes to the DOM (Updating the Dark Mode button!).



<!-- slide -->

## React Flow

<img height="600px" alt="Data Display Behavior" src="./assets/data-display-behavior.drawio.svg" />

🔑 We use state to store data that may change in response to user behavior

<br>

🏹 To work with state in a functional component, we use the `useState` hook

<!-- slide -->

## Local Variables vs State Variables - What's the difference?

<iframe src="https://codesandbox.io/embed/counter-state-example-0r8stb?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:900px; border:0; border-radius: 4px; overflow:hidden;"
  title="counter-state-example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<!-- slide style="text-align: left;"-->

<h2 style="text-align: center;"><strong> Handling events in React </strong> </h2>

<br>

```js
const Counter = () => {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
};
```

<br>

<strong>NOTE:</strong> Events can only be attached to DOM elements, we can't attach event listeners directly to our components

<br>

<!-- slide -->

## Defining Event Handlers

We can also define event handler functions within our components and pass the function reference to our event listener in the JSX.

<br>

```js
const Counter = () => {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
};
```

<br>

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX.

<!-- slide style="text-align: left;"-->

<h2 style="text-align:center;"><strong>✅ Toggle Dark Mode Button</strong></h2>

<br>

Inside the `Header` component, there is a button with textContent of `Light Mode`

<br>

```js
<button>Light Mode</button>
```

<br>

Attach an `onClick` event to the button:

<br>

```js
<button onClick={() => console.log("clicked")}>Light Mode</button>
```

<br>

We can also also refactor using a helper function:

```js

 const handleClick = () => console.log('clicked')

<button onClick={handeClick}>Light Mode</button>
```

<br>

💡 We need to now figure out how to properly set new text for the button and perform DOM manipulation to reflect the change. That is where `state` will come in.


<!-- slide -->

## Passing State as Props

<iframe src="https://codesandbox.io/embed/vigilant-minsky-iiykrb?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:900px; border:0; border-radius: 4px; overflow:hidden;"
  title="vigilant-minsky-iiykrb"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<!-- slide -->

<img src="assets/component-lifecycle.drawio.svg" alt="Component Lifecycle" width="1200" />

<!-- slide -->

<img height="600px" alt="Data Display Behavior" src="./assets/data-display-behavior.drawio.svg" />

<!-- slide -->

## ☕️ Break!!! ☕️

<!-- slide style="text-align: left;"-->

<h2 style="text-align: center;"> Filter by project name in ProjectList component </h2>

<br>

Currently, we are creating a `ProjectListItem` component for each project inside of the `projects` array:

```js
const projectListItems = projects.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

<br>

We need to make this dynamic by implementing a filter feature that returns the projects based on the user's entry in the `search input`

```js
<input type="text" placeholder="Search..." />
```

<br>

<!-- slide style="text-align: left;"-->

<h3 style="text-align: center;"> Filter by project name in ProjectList component steps: </h3>

<br>

1. Initialize state to track the `searchQuery`:

```js
const [searchQuery, setSearchQuery] = useState("");
```

<br>

2. Add on `onChange` event to the input element:

```js
<input onChange={handleSearch} type="text" placeholder="Search..." />
```

<br>

3. Update the state in the `handleSearch` helper function:

```js
const handleSearch = (e) => setSearchQuery(e.target.value);
```

<!-- slide style="text-align: left;"-->

<h3 style="text-align: center;"> Filter by project name in ProjectList component steps contd: </h3>

<br>

<br>

4. Filter the `projects` array to return the search results based on the `searchQuery` value:

```js
const searchResults = projects.filter((project) =>
  project.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

<br>

5. Map over `searchResults` instead of `projects` when creating `projectListItems`:

```js
const projectListItems = searchResults.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

<br>

<strong>Note:</strong> If the searchQuery is an empty string, the `filter()` will return all the project items

<!-- slide style="text-align: left;"-->

<h2 style="text-align: center;"> 💡 Conclusion </h2>

<br>

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX

2. Updating the state based on the goal of the event

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface

<br>
<br>

<h4 style="text-align: center;"><strong> user behavior -> update state -> React updates DOM </strong></h4>

<br>

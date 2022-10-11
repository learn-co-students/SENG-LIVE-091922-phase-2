---
presentation:
  width: 1500
  height: 1000
  controls: false
---

<!-- slide -->

<h2> 🚗 React Roadmap

The goals for Phase 2: </h2>

- Create a static frontend site with components and props (DOM Manipulation)

- Use state and events to make your site dynamic (Event Handling)

- Add side effects and data fetching to communicate with a server (Network Communication)

<!-- slide -->

<h1> Components and Props </h1>

<!-- slide style="text-align: left;" -->

<h2 style="text-align: center;"> ✅ Objectives </h2>

✳️ Discuss the benefits of React over Vanilla JS
✳️ Explain the importance of Components
✳️ Practice writing components
✳️ Define props and how to create them
✳️ Recognize destructured props and how to work with them
✳️ Render multiple components from a list

<!-- slide -->

<h2> 💡 React Philosophy </h2>

- Use declarative syntax (JSX)
- Makes it easier to work with the DOM
- Clearer connection between the code we write and what is displayed in the browser
- Use components to break down complex UI into smaller pieces which creates a better separation of concerns
- Easier to maintain

<!-- slide -->

<h2> React > Vanilla JS </h2>

<div style="display: flex; gap: 2rem;">
<div>
Instead of describing how to do something:

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

We can just describe what we want:

```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
```

</div>
<div style="display: flex; flex-direction: column; justify-content: center;">
  In both cases, we'll get something like this:

  ```html
  <h1 id="main" class="blue">
    Hello!
  </h1>
  ```

</div>
</div>

<!-- slide -->

<h2> Wireframes </h2>

<div style="display: flex; flex-direction: row;">
  <div>
    <img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1643721399/wireframe_bfc35e.png">
  </div>

  <div style="font-size: 1.95rem; margin-top: 0.85rem;">
    What components could we use to build this app?

<textarea style="font-size: 2rem; border: 2px solid black; padding: 1rem;" rows="10" cols="35"></textarea>    
  </div>
</div>



<!-- slide -->


## Let's Dive into the code!

- package.json
- node_modules
- public
- src/index.js
- src/App.js

<!-- slide -->

## Sneak Peak at where we're going

Run the following command from `01_components_and_props/project_showcase`
```bash
npm run server
```

Then click the button below to open the app
<button>[Project Showcase App](https://phase-2-react-project-showcase.netlify.app/projects)</button>
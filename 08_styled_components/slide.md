---
presentation:
  width: 1500
  height: 1000
  controls: false
---

<!-- slide -->

<h1> Styled Components </h1>

<!-- slide -->

<h2><strong> ✅ Objectives </strong></h2>

- Observe how styled-components are used for managing and organizing component styles
- Observe how to pass props (i.e., as, theme) to dynamically render CSS for styled components

<!-- slide style="text-align: left;" -->


## Overview

There are many ways we can style components in React using CSS. The simplest way is to just create a CSS file:

```css
/* index.css */

h1 {
  color: "red";
}
```

And import it in our component:

```js
import "./index.css";

function App() {
  return <h1>Hello World</h1>;
}
```

<!-- slide style="text-align: left;" -->

## But...

One issue with this approach is that we have to keep track of all our our
components separately from how they are styled, and this _breaks the idea of
encapsulation_ that components can offer.

We can also use _inline styles_, and style each element directly:

```js
function App() {
  return <h1 style={{ color: "red" }}>Hello World</h1>;
}
```

However, as our apps grow in complexity, this makes it more challenging to
manage our styles; and there are limitations to what we can do with inline
styles. For example, styling CSS selectors like `:hover` and `:focus` won't work
with this approach.


<!-- slide style="text-align: left;" -->

## A New Approach

To solve these problems, a new kind of solution emerged, called CSS-in-JS, which allows developers to write their CSS code in JavaScript files alongside component code. The `styled-components` library is one of the most popular CSS-in-JS solutions out there, so let's see how it works!

<!-- slide style="text-align: left;" -->

## Using Styled components

As a basic example, let's try to refactor this component to use
`styled-components` instead of an inline `style` prop.

```js
function App() {
  return <h1 style={{ color: "red" }}>Hello World</h1>;
}
```

First, we import the `styled-components` library to the component file:

```js
import styled from "styled-components";

function App() {
  return <h1 style={{ color: "red" }}>Hello World</h1>;
}
```

Then, we can use `styled` to create a _component_ with CSS applied to it:

```js
import styled from "styled-components";

const Header = styled.h1`
  color: red;
`;

function App() {
  return <Header>Hello World</Header>;
}
```

[CodeSandbox](https://codesandbox.io/s/cool-chatterjee-90v3e7?file=/src/App.js:270-1073)

<!-- slide style="text-align: left;" -->


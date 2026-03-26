# Episode-05 | Let's Get Hooked

A few examples were explored and concepts were covered.

## Examples

### namaste-food

## Industry standards

- Separate files for separate components.

- Start with a `src` folder, or source code files.

- Dont keep hard coded data, strings in components

- Keep file under 100 lines per file

- Standard naming conventions of hooks: list and setList.

## File naming (.js, .jsx, .ts, .tsx)

File naming (.js, .jsx, .ts, .tsx) does NOT directly affect runtime performance.

It does affect tooling, compilation, and developer experience

### Does It Affect Performance?

Runtime Performance (in browser) `No difference`

- Tools like Babel / TypeScript compile everything → plain JS
- Browser only sees final JavaScript bundle

### Does It Affect Compilation?

Yes (Tooling Behavior)

1. .jsx

- Tells bundlers (like Parcel) to:
- Enable JSX parsing
- Apply React transforms

2. .tsx
   Enables:

- TypeScript + JSX parsing
- Type checking

3. .ts

- TypeScript only (no JSX allowed)

4. .js

- May still support JSX (depending on config)
- Less explicit

### Practical Impact

Using correct extensions helps:

- Better editor support (IntelliSense)
- Proper type checking
- Correct transpilation pipeline
- Fewer bugs

## Default exports vs Named exports

You can only export default once in a file.

```js
export default LOGO_URL;
import LOGO_URL from "file_path";
```

When you have export multiple things:

```js
export { LOGO_URL };
export const LOGO_URL = "test";
import { LOGO_URL } from "file_path";
```

## Hooks - Superpower

Normal JS utility functions.

Standard naming conventions of hooks. list and setList.

```js
const [list, setList] = useState([]);
```

OR

```js
const arr = useState([]);
const list = arr[0];
const setList = arr[1];
```

OR

```js
const arr = useState([]);
const [list, setList] = arr;
```

The diff algorithm is triggered by the function.

### useState

### useEffect

## GSAP (GreenSock Animation Platform) and Three.js.

GSAP is a JavaScript animation library used to create high-performance, smooth animations on the web.

It Animates:

- DOM elements
- CSS properties
- SVGs
- Canvas

Key Features:

- Very fast (better than CSS animations in complex cases)
- Precise control (timelines, delays, sequences)
- Scroll-based animations (ScrollTrigger plugin)
- Timeline-based animations

Use Cases:

- Landing pages
- Micro-interactions
- Scroll animations
- UI transitions

Three.js is a library used to create 3D graphics in the browser using WebGL.

It Renders:

- 3D objects
- Lighting
- Cameras
- Scenes

Key Features:

- 3D rendering in browser
- Lighting and shadows
- Interactive 3D experiences
- Uses GPU (via WebGL)

Use Cases:

- 3D websites
- Games
- Product visualizations
- Data visualization

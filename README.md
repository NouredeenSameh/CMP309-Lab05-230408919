# Web Programming - Lab 5: React Product Dashboard

A modular React single-page application demonstrating fundamental state management, unidirectional data flow, list rendering, and component composition via Vite.

## Architecture & File Organization

The project separates concerns between layout, UI components, and state management:

- `src/`
  - `components/`
    - `Card.jsx`: Reusable layout component using the `children` prop. Acts purely as a visual container with no internal knowledge of what it renders.
    - `Product.jsx`: Stateless presentational component accepting `title` and `price` via props, wrapping output in `Card`.
    - `ProductList.jsx`: Encapsulates static product dataset and maps items into `Product` components with unique string identifiers (`prod-10x`).
  - `App.jsx`: Root component maintaining application-level state (`showProducts` and `name`). Handles conditional rendering of `ProductList` and bidirectional data binding via a controlled text input.

## Constraints & Rules Adhered To

- Zero external UI libraries or component kits used.
- Strictly functional components using only the `useState` hook.
- No `useEffect`, reducers, Context API, or DOM manipulation.
- Keys derived exclusively from persistent product IDs rather than index values.

## Challenges & Solutions

1. **Composition via Children Prop**: Ensuring `Card.jsx` remained completely agnostic of its contents required isolating layout borders, shadows, and paddings without injecting any domain logic into the wrapper itself.
2. **Controlled Input Lifecycle**: Synchronizing the state variable `name` strictly with the `onChange` event prevented any out-of-sync DOM states while cleanly driving conditional greeting text.
---
paths:
  - "src/app/**/*.js"
---
# React

- Components and hooks are pure: same props and state, same output. Side effects run in event handlers or
  `useEffect`, never during render.
  Source: https://react.dev/reference/rules#components-and-hooks-must-be-pure (checked 2026-11-13)
- Props and state are immutable: copy, then set; never mutate a value after passing it to JSX.
  Source: https://react.dev/reference/rules#components-and-hooks-must-be-pure (checked 2026-11-13)
- Call hooks only at the top level of a component or custom hook, before any early return.
  Source: https://react.dev/reference/rules#rules-of-hooks (checked 2026-11-13)
- Use components in JSX (`<Footer />`); never call a component function directly.
  Source: https://react.dev/reference/rules#react-calls-components-and-hooks (checked 2026-11-13)

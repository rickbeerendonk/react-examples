# React Examples - AI Agent Guidelines

## Project Overview

This is a **React learning resource** with 100+ examples covering React fundamentals to advanced patterns. Each concept has parallel implementations in **JavaScript**, **TypeScript**, and sometimes other languages. The project uses a custom Node.js server that auto-detects and serves examples based on directory structure.

## Architecture & Structure

### Multi-Language, Multi-Variant Pattern

- **Directory naming**: `NN - Category Name/variant/language/{js,ts,cljs}`
- Each example contains: `src/main.{jsx,tsx}`, component files, `index.html`, `vite.config.{js,ts}`, and shared `oblicum.css`
- **Not a monorepo**: Each example is independently runnable with its own build config
- Example: `43 - Pattern - Slots/b. Default Value/js|ts/` demonstrates slot components in JS and TS

### Build System: Vite per Example

- Each example has **independent Vite config** (`vite.config.js/ts`)
- Standard config: `server: { port: 9100 }`, React plugin enabled, sourcemaps enabled
- Entry point: `src/main.jsx` (JS) or `src/main.tsx` (TS) → `index.html`
- Server runs examples through `/server/server.js`: `npm start -- "<fileDirname>"`

### Root-Level Build & Dev

- **`npm run dev`**: Runs Vite for the current example directory
- **`npm run validate`**: Runs ESLint + Prettier checks (must pass before commits)
- **`npm run eslint-fix` / `npm run prettier-fix`**: Auto-fix linting and formatting
- **`npm start`**: Custom Node server that detects example type and serves it appropriately

## Key Conventions

### File Headers & Copyright

All source files include EUPL-1.2 license and copyright header:

```jsx
/*! European Union Public License version 1.2 !*/
/*! Copyright © [YEAR] Rick Beerendonk          !*/
```

**Preserve this on all new/modified files.**

### Component Structure

- **Function components** (default, using hooks)
- **Default export** for the main component: `export default ComponentName`
- Hooks: `useState`, `useReducer`, `useContext`, `useEffect` (React 19 patterns preferred)
- React 19 features demonstrated: `use()` hook for context, newer APIs prioritized

### Styling

- Shared **`oblicum.css`** in each example's `src/`: includes fonts, branding, component styles
- Inline styles use plain JS objects: `style={{ color: 'blue', fontStyle: 'italic' }}`
- No CSS-in-JS libraries in core examples (Styled-Components has dedicated folder)

### Code Quality

- **ESLint config** (`eslint.config.mjs`): React, JSX-a11y, React Hooks, React Compiler plugins enabled
- **Prettier**: Enforced formatting for all code files
- **Commits blocked** if ESLint or Prettier fail (`husky` pre-commit hook)
- Accessibility (a11y) is checked; ARIA examples in dedicated folder

### Testing Setup

- Tests use **Vitest + React Testing Library**
- Config: `vitest/config` with `jsdom` environment
- Coverage excludes: config files, entry points (`main.jsx`, `main.tsx`), type defs

## Common Workflows

### Adding a New Example

1. Create `NN - Name/variant/js/src/` directory structure
2. Add `main.jsx`, component files, `index.html`, `vite.config.js`, `oblicum.css`
3. Add TypeScript variant: duplicate to `NN - Name/variant/ts/` with `.tsx` files
4. Include copyright header in all source files
5. Run `npm run validate` to pass linting before commit

### Running an Example

- **VS Code**: Open file from example, press `Cmd+Shift+B` (macOS) → opens server + browser
- **Terminal**: `npm run dev` (runs Vite for current directory)
- Examples auto-detect framework (Angular, React, Vue) and serve appropriately

### Modifying Components

- Preserve the example's teaching intent—don't over-engineer
- Use inline comments sparingly; code clarity preferred
- Keep components small and focused on a single concept
- Test across JS and TS variants if modifying shared patterns

### Cross-Cutting Patterns to Know

- **Split Render Pattern** (`40 - Pattern - Split render()`): Break render into helper functions for readability
- **Slots Pattern** (`43 - Pattern - Slots`): Render content passed as props; supports named and default slots
- **Container Pattern** (`42 - Pattern - Container`): Separate presentational from logic components
- **Error Boundaries** (`16 - Exceptions`): Handle child component crashes
- **Context API** (`17 - Context`): Modern `use()` hook preferred over old `useContext()`

## Important Directories

| Path                          | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| `01-31, 40-51, 60-90`         | Numbered examples organized by React concept |
| `Accessibility (ARIA)/`       | ARIA and accessibility patterns              |
| `Formik/`, `React-Hook-Form/` | Form library examples                        |
| `Router/`                     | React Router patterns                        |
| `Styled-Components/`          | CSS-in-JS examples                           |
| `Test/`                       | Vitest + React Testing Library setups        |
| `server/`                     | Custom Node.js example server                |
| `utils/`                      | Shared utilities across examples             |

## Quality Gates

- **Pre-commit**: ESLint + Prettier validation via Husky
- **License**: All files must have EUPL-1.2 header
- **No breaking changes**: Examples teach stable React patterns; avoid experimental-only features unless in `[TODO]` folders
- **Multi-language parity**: JS and TS variants should teach the same concept

## Debugging

- **Sourcemaps enabled** in all Vite configs
- DevTools available in browser
- Common issues: stale Vite cache → run `npm run clean` then reinstall
- React Compiler plugin enabled; check ESLint for warnings

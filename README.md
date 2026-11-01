# SHOPA — Frontend

A single-page storefront for curated everyday essentials. Built with React, TypeScript, Vite, and Tailwind CSS.

## About

SHOPA is a boutique-style shop with product browsing, search, category filtering, sort, a cart drawer with quantity controls, wishlist, quick view, and dark mode.

It's a learning-focused project — the goal is to practice professional frontend structure, modern tooling, and a clean git workflow.

**Status:** In active development. The structure below reflects the target architecture; folders are added incrementally as features are built.

## Goals

1. Improve project structuring skills and knowledge
2. Enhance project tooling knowledge
3. Learn how professional developers work
4. Practice a professional git workflow (feature branches, PRs, conventional commits)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint (flat config)
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged
- **Version Control:** Git
- **Hosting:** GitHub

## Prerequisites

- Node.js 20+ (Node 22+ recommended for React 19)
- npm 10+

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/MohamedHanyElpasyone/SHOPA-frontend.git
cd SHOPA-frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

### Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run format`  | Run Prettier                         |

## Project Structure

```
SHOPA-frontend/
├── .husky/                       # Git hooks (pre-commit, pre-push)
├── .vscode/                      # Editor config
├── src/
│   ├── app/                      # App-level setup
│   │   ├── App.tsx               # Root component
│   │   └── providers.tsx         # Context providers (Cart, Wishlist, etc.)
│   │
│   ├── assets/                   # Logos, icons, images
│   │   ├── shopa-icon.svg
│   │   └── shopa-logo.svg
│   │
│   ├── components/               # Reusable UI (no business logic)
│   │   ├── layout/               # Structural (Header, Footer, Layout)
│   │   └── ui/                   # Primitives (Button, Input, Skeleton)
│   │
│   ├── features/                 # Feature modules
│   │   ├── products/             # Product browsing, search, filter, sort
│   │   ├── cart/                 # Cart state, drawer, items
│   │   ├── wishlist/             # Wishlist state, button
│   │   ├── quickview/            # Quick view modal
│   │   ├── toast/                # Toast notifications
│   │   └── theme/                # Dark/light mode
│   │
│   ├── pages/                    # Route-level composition
│   │   └── HomePage.tsx
│   │
│   ├── services/                 # HTTP client and API infrastructure
│   │   └── apiClient.ts
│   │
│   │
│   ├── types/                    # Shared TypeScript types
│   │   └── index.ts
│   │
│   ├── styles/                   # Global CSS (Tailwind + design tokens)
│   │   └── index.css
│   │
│   └── main.tsx                  # Entry point
│
├── .editorconfig
├── .gitignore
├── .prettierrc
├── .prettierignore
├── index.html
├── eslint.config.js
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

### Folder Responsibilities

| Folder                   | Purpose                                                                 |
| ------------------------ | ----------------------------------------------------------------------- |
| `src/app/`               | App-level components: `App.tsx`, `providers.tsx`                        |
| `src/assets/`            | Static assets: logos, icons, images, fonts                              |
| `src/components/`        | Reusable UI components with no business logic                           |
| `src/components/layout/` | Structural components: Header, Footer, Layout                           |
| `src/components/ui/`     | UI primitives: Button, Input, Skeleton, Modal                           |
| `src/features/`          | Feature modules — each owns its own components, hooks, context, and API |
| `src/pages/`             | Page-level composition (`HomePage.tsx`)                                 |
| `src/services/`          | HTTP client and API infrastructure (`apiClient.ts`)                     |
| `src/types/`             | Shared TypeScript types (used by 3+ features)                           |
| `src/styles/`            | Global CSS, Tailwind `@theme` tokens, base styles                       |

> **Note:** The structure above reflects the target architecture. Folders are created incrementally as features are built — not all at once.

## Development Approach

Structure is built **incrementally**:

- Start with top-level folders (`app/`, `components/`, `features/`, etc.)
- Add subfolders only when they're needed
- Refactor when the code starts to hurt

This mirrors how real teams work — the structure emerges from the work, it isn't designed in advance.

## Git Workflow

1. Create a feature branch from `dev`:

   ```bash
   git checkout dev
   git pull
   git checkout -b feat/your-feature-name
   ```

2. Make changes and commit:

   ```bash
   git add .
   git commit -m "feat: describe the change"
   ```

3. Push and open a Pull Request:

   ```bash
   git push origin feat/your-feature-name
   ```

4. Merge into `dev` after review.

5. `main` is reserved for production-ready code only.

### Branches

| Branch   | Purpose                                                       |
| -------- | ------------------------------------------------------------- |
| `main`   | Production. Only receives merges from `dev`.                  |
| `dev`    | Integration branch. Feature branches merge here.              |
| `feat/*` | Feature branches. Created from `dev`, merged back into `dev`. |

## Commit Convention

This project follows the Conventional Commits specification.

**Format:** `type(scope): description`

- `type` — required (see below)
- `scope` — optional, in parentheses (see below)
- `description` — imperative mood, lowercase, no period

### Types

- `feat:` — a new user-visible capability (a header, a button, an interaction the user can see or use)
- `fix:` — a bug fix
- `docs:` — documentation only
- `style:` — formatting only (whitespace, quotes, indentation — no behavior change, no visible change)
- `refactor:` — source code restructuring with no behavior change and no visible change
- `perf:` — performance improvements
- `build:` — changes to `vite.config.ts`, `tsconfig*.json`, or `package.json` scripts
- `ci:` — changes to `.github/workflows/`, deployment configs, GitHub Actions
- `chore:` — maintenance that doesn't touch source code or tests (`.prettierrc`, `.editorconfig`, `.gitignore`, `.husky/`, dependency bumps)
- `revert:` — reverts a previous commit

### Choosing the Right Type

| You changed                                                                          | Type        |
| ------------------------------------------------------------------------------------ | ----------- |
| A new component, page, or interaction the user will see                              | `feat:`     |
| Existing behavior was broken and now works                                           | `fix:`      |
| Comments, README, inline docs                                                        | `docs:`     |
| Prettier, ESLint --fix, quote style, whitespace                                      | `style:`    |
| Moved code, renamed variables, extracted functions (no visible or behavioral change) | `refactor:` |
| Faster render, smaller bundle, fewer queries                                         | `perf:`     |
| `vite.config.ts`, `tsconfig.json`, `package.json` scripts                            | `build:`    |
| `.github/workflows/*`, deployment configs                                            | `ci:`       |
| `.prettierrc`, `.editorconfig`, `.gitignore`, `.husky/`, dependency bumps            | `chore:`    |

**`feat:` means "the user can see or do something new."** It does not refer to the `features/` folder — a header in `components/layout/` is still `feat:` because the user sees it.

**`style:` vs `feat:`** — `style:` is formatting only, never user-visible. Whitespace and quote style are `style:`. A color or layout change is `feat:`.

**`refactor:` vs `style:`** — `refactor:` changes source code structure (moving, renaming, extracting). `style:` changes only how the code looks on disk. Both leave the app identical to the user.

**`refactor:` vs `chore:`** — `refactor:` touches source code. `chore:` does not. A refactor is source-code work with no visible change. A chore is non-source work (config, deps, tooling).

### Scopes

Scopes identify which part of the codebase a commit touches. Optional — use when they add clarity, skip when the change is project-wide.

| Scope       | Use for                                                                |
| ----------- | ---------------------------------------------------------------------- |
| `products`  | Product grid, cards, search, filter, sort                              |
| `cart`      | Cart state, drawer, items, checkout                                    |
| `wishlist`  | Wishlist state, heart button                                           |
| `quickview` | Quick view modal                                                       |
| `toast`     | Toast notifications                                                    |
| `theme`     | Dark/light mode                                                        |
| `layout`    | Any file in src/components/layout/ — Header, Footer, Layout wrapper    |
| `ui`        | Shared UI primitives — Button, Input, Modal (reusable across features) |
| `styles`    | Global CSS, Tailwind tokens                                            |
| `types`     | TypeScript types                                                       |
| `config`    | Tooling — ESLint, Prettier, Vite, tsconfig                             |
| `deps`      | Dependency updates                                                     |

**`layout` vs `ui`** — `layout` is the structural shell (one-off: header, footer, page wrapper). `ui` is reusable primitives designed to be used everywhere (Button, Input, Modal). When a commit touches both, pick the primary purpose.

### Examples

```bash
feat(products): add product grid component
feat(layout): build header with logo and icon buttons
feat(theme): add dark mode toggle with persistence
fix(cart): correct total price calculation
chore(deps): install lucide-react
chore(styles): add motion duration and easing tokens
chore(config): add prettier and editorconfig
refactor(styles): extract colors into @theme tokens
docs: update project structure section
style: format codebase with prettier
build: configure path alias in vite and tsconfig
ci: add pre-push hook to run build
## Deployment

Not deployed yet. Will be deployed to Vercel once the first feature set is complete.
```

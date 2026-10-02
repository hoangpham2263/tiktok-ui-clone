# TikTok UI Clone

A React practice project that recreates the TikTok web header, search experience and page layouts using reusable components and SCSS modules.

> The public search API this clone was built against is no longer available, so search falls back to a small set of sample accounts instead. Set `REACT_APP_BASE_URL` to use a real API.

## Features

- **Routing with per-route layouts** - React Router v6 routes for Home (`/`), Following, Profile (`/:nickname`), Upload and Search; each route can use the default layout (header + sidebar), a header-only layout, or no layout.
- **Header** - logo linking home, upload action with a tooltip (Tippy.js), and a logged-in / logged-out variant (Upload and Log in buttons vs. avatar).
- **Live account search** - debounced input (500 ms, custom `useDebounce` hook) that calls a search API via Axios and shows matching accounts in a popper, with loading spinner, clear button, and hide-on-click-outside.
- **Nested settings menu** - popper menu with multi-level navigation (e.g. Language submenu with a back button), separate user menu items and a separator before "Log out".
- **Reusable components** - `Button` (primary, outline, text, rounded, small, large, disabled, icons; renders as `button`, `Link` or `a`), `Image` with fallback on load error, `AccountItem` with verified badge, custom SVG icons.
- **Global styles** - CSS variables for theme colors and layout sizes, Montserrat font, normalize.css and a custom scrollbar.

Note: the page components (Home, Following, Profile, Upload, Search) and the sidebar are currently placeholders.

## Tech stack

- React 18 (Create React App, customized with `react-app-rewired` / `customize-cra`)
- React Router DOM 6
- Sass (SCSS modules) and `classnames`
- Tippy.js (`@tippyjs/react`) for tooltips and poppers
- Axios for HTTP requests
- Font Awesome (React)

## Project structure

```text
tiktok-ui_clone/
├── public/                   # HTML template, manifest, robots.txt
├── config-overrides.js       # Webpack override hook for react-app-rewired
├── .env.example              # Example API base URL (REACT_APP_BASE_URL)
└── src/
    ├── App.js                # Builds routes and wraps each page in its layout
    ├── index.js              # Entry point, mounts App inside GlobalStyles
    ├── assets/images/        # Logo and fallback image
    ├── components/
    │   ├── AccountItem/      # Account row used in search results
    │   ├── Button/           # Multi-variant button component
    │   ├── GlobalStyles/     # Global SCSS, variables, font, scrollbar
    │   ├── Icons/            # Custom SVG icons
    │   ├── Image/            # Image with fallback source
    │   ├── Layout/           # DefaultLayout, HeaderOnly, Header, Search, Sidebar
    │   └── Popper/           # Popper wrapper and nested Menu
    ├── config/               # Route path constants
    ├── hooks/                # useDebounce
    ├── pages/                # Home, Following, Profile, Upload, Search
    ├── routes/               # Public route definitions
    ├── services/             # searchServices (users/search API call)
    └── utils/                # Axios instance (httpRequest)
```

## Getting started

Requirements: Node.js and npm.

```bash
git clone https://github.com/hoangpham2263/tiktok-ui-clone.git
cd tiktok-ui-clone
npm install
cp .env.example .env    # then set REACT_APP_BASE_URL to your search API
npm start               # http://localhost:3000
```

Other scripts: `npm run build` (production build) and `npm test` (test runner).

The search box expects an API that responds to `GET {REACT_APP_BASE_URL}users/search?q=<keyword>&type=less` with a `data` array of accounts (`id`, `nickname`, `full_name`, `avatar`, `tick`).

## Disclaimer

This is a UI clone built for learning and practice only; it is not affiliated with or endorsed by TikTok or ByteDance.

## Author

**Hoang Pham** — [Portfolio](https://hoangpham2263.github.io) · [GitHub](https://github.com/hoangpham2263)

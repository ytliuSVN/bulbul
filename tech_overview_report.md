# Tech Overview

This project is a single-page application (SPA) built with Vue.js 3, using Vite as the build tool. It leverages Pinia for state management and Vue Router for navigation.

## Core Technology Stack

*   **Frontend Framework**: Vue.js 3
*   **Build Tool**: Vite
*   **State Management**: Pinia (for shared application state, e.g., sidebar collapse)
*   **Routing**: Vue Router (for application navigation)
*   **Styling**: Sass

## Application Structure (`src/App.vue`)

`src/App.vue` serves as the main entry point, rendering the primary layout. It dynamically displays either a sidebar (`TheSidebarMenu`) or a top navigation bar (`TheNavigation`) based on screen size. It includes a banner component (`TheBanner`) and uses `router-view` to display routed components. Responsive behavior is managed via `useResponsive` and sidebar width by `useSidebarStore`.

## Routing Management (`src/router/index.js`)

The project defines several routes, each mapping to a view component:
*   `/` redirects to `/traits`.
*   `/traits` -> `TraitsList.vue`
*   `/stories` -> `StoriesList.vue`
*   `/photos` -> `PhotosList.vue`
*   `/threats` -> `ThreatsList.vue`
A catch-all route `/:notFound(.*)` redirects to `/traits` for undefined paths. `createWebHistory` is used for browser history mode, and `linkActiveClass` is set to "active".

## State Management (`src/stores/sidebarStore.js`)

A Pinia store named "sidebar" manages `isCollapsed` (sidebar state) and `sidebarWidth` (sidebar dimension). The `toggleSidebar` function switches the sidebar's collapsed state and updates its width (80px when collapsed, 345px when expanded).

## Responsive Design (`src/composables/useResponsive.js`)

The `useResponsive` composable detects if the current view is desktop mode (screen width >= 1024px). It adds/removes a `resize` event listener on mount/unmount to keep the `isDesktop` state updated.

## Key Components

*   `TheBanner.vue`: Top banner component.
*   `TheList.vue`: Likely a generic list component.
*   `TheNavigation.vue`: Top navigation for non-desktop views.
*   `TheSidebarMenu.vue`: Sidebar navigation for desktop views.
*   `src/views/*List.vue`: Components for displaying specific content lists (e.g., `PhotosList.vue`).

## Build and Deployment

*   Vite is used for development (`npm run dev`) and building (`npm run build`).
*   `gh-pages` is configured for deployment to GitHub Pages (`npm run deploy`).

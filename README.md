# Activity Recognition for Driver State Monitoring

A modern Next.js dashboard for visualizing driver state monitoring insights, including simulated activity recognition, risk analysis, and system metrics. The UI showcases how a driver monitoring solution could surface live video feeds, detection alerts, and analytics in a cohesive interface.

## Features

- **Real-time monitoring simulation** – toggles monitoring state and streams randomized activities to mimic incoming detections.
- **Tabbed dashboard layout** – separates overview, performance metrics, and architecture documentation in an accessible way.
- **Risk & alert panels** – highlights risk levels, warning badges, and contextual recommendations based on detected activities.
- **Interactive charts** – leverages Recharts to display activity breakdowns and model performance trends.
- **Tailwind CSS styling** – uses shadcn/ui-inspired components, Radix primitives, and utility classes for responsive design.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 with CSS variables
- Radix UI primitives, shadcn/ui components, and Lucide icons
- Recharts for data visualizations

## Project Structure

```
.
├── app/                   # Next.js app directory (layouts, pages, global styles)
├── components/            # Feature panels and reusable UI primitives
├── hooks/                 # Custom hooks for theme management and system behavior
├── lib/                   # Shared utilities and configuration
├── public/                # Static assets
├── styles/                # Tailwind configuration entry points
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS pipeline
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- [pnpm](https://pnpm.io/) 8+ (recommended for the existing lockfile)

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

Then open <http://localhost:3000> to view the dashboard. The simulated data stream updates every few seconds when monitoring is active.

### Production Build

```bash
pnpm build
pnpm start
```

## Key Components

- `app/page.tsx` – assembles the dashboard shell, live feed simulation, and tabbed navigation.
- `components/live-feed-panel.tsx` – placeholder video feed with status badges.
- `components/activity-recognition-panel.tsx` – shows detected activity and confidence timeline.
- `components/risk-monitor-panel.tsx` – renders risk gauges and contextual guidance.
- `components/performance-metrics.tsx` – performance KPIs and charts for precision/recall.
- `components/system-architecture.tsx` – diagrams the end-to-end monitoring pipeline.
- `components/alerts-panel.tsx` – surfaces recent alerts and recommended mitigations.

## Styling & Theming

Tailwind CSS is configured via `tailwind.config` exports in `styles` and `postcss.config.mjs`. Component-level styling follows the shadcn/ui pattern using utility-first classes and Radix UI state styles. The app supports light/dark themes through the `ThemeProvider` component in `components/theme-provider.tsx`.

## Linting

```bash
pnpm lint
```

Runs ESLint across the entire project to ensure consistent code quality.

## Deployment

The project is ready to deploy on any platform that supports Next.js 15 (e.g., Vercel, Netlify, or self-hosted Node servers). Ensure environment variables (if introduced) are configured before building.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with clear messages.
4. Open a pull request describing your updates.


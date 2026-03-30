# InfoShield

InfoShield is an Australian media literacy web app that helps users identify misinformation through education, data-driven insights, and an interactive quiz. The application is built with React, Tailwind CSS, and Vite, and stores community quiz data with Supabase.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)

## Overview

InfoShield is designed to support digital news literacy by combining:

- educational content on misinformation
- interactive charts and bias analysis
- a one-attempt quiz to reinforce learning
- community score tracking and resource recommendations

## Features

- Modern landing page with hero section, statistics, and video
- Issue page with visual charts and political bias slider
- One-attempt quiz with score persistence and result review
- Resource page for fact-checking and media literacy guidance
- Contact page for user feedback and community engagement

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Supabase
- React Router DOM
- Recharts
- Leaflet

## Getting Started

### Prerequisites

- Node.js 18 or newer

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production build

```bash
npm run build
```

### Preview build output

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — run the app in development mode
- `npm run build` — compile the app for production
- `npm run preview` — preview the production build locally

## Project Structure

```
infoshield/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── pages/
│   ├── components/
│   ├── utils.js
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
└── vite.config.js
```

- `src/App.jsx` — application routing and layout wrapper
- `src/pages/` — route views for each page
- `src/components/` — reusable UI components and feature sections
- `src/utils.js` — shared helper utilities
- `src/supabaseClient.js` — Supabase client configuration

## Pages

- **Home** — landing experience with hero messaging, stats, and video content
- **The Issue** — explains misinformation with charts and bias insights
- **Quiz** — 10-question interactive quiz with saved results
- **How to Help** — practical tips, resources, and fact-checking tools
- **Contact** — contact form for user messages and support

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Code of Conduct

This project follows the principles outlined in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). By participating, you agree to uphold the community guidelines.

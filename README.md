# API-Memory

A learning project: a memory game that grows step by step from local images to real APIs.

## Idea

- **Stage 1:** Classic memory game with local image files, selectable board sizes.
- **Stage 2:** Random motifs from three APIs:
  - 🎨 **Met API** – artworks from the Metropolitan Museum of Art
  - 🎵 **Jamendo API** – album covers, titles and artists from Creative-Commons music; tracks are streamable straight from the response
  - 🐾 **PokéAPI** – Pokémon artworks

## Architecture

- **Frontend:** Angular (standalone components, signals, plain SCSS, responsive design) – calls the Met API, Jamendo API and PokéAPI directly.
- **Backend:** not required so far. All three APIs are public and their keys are meant to live in the browser.

```
api-memory/
├── frontend/   # Angular app
└── backend/    # reserved – see below
```

### Why the backend slot is still empty

Every API used so far works without a server. A backend becomes necessary as soon as one of these shows up:

- an API whose key is a **real secret** and must not reach the browser
- **caching** or rate-limit pooling across visitors
- **persistence** – highscores, saved games

The technology is deliberately left open. Two candidates, both viable:

| | PHP | FastAPI (Python) |
|---|---|---|
| Setup | `php -S` needs nothing but PHP itself | virtualenv + dependencies |
| Cheap shared hosting | runs practically everywhere | rarely available |
| Typing, async, OpenAPI docs | – | built in |

Because the frontend reads its endpoint from `base_url` in `src/environments/`, switching from the public API to a self-hosted proxy is a config change, not a code change – whichever language ends up serving it.

## Setup

### Frontend

```bash
cd frontend
npm install
```

#### API keys

`src/environments/` holds the API configuration. The files with real values are git-ignored, so create them from the template before the first start:

```bash
cp src/environments/environment.ts src/environments/environment.development.ts
```

Then replace `<app-key>` with your own Jamendo client ID. You get one for free by registering an app at [devportal.jamendo.com](https://devportal.jamendo.com/).

The client ID is a public app key – Jamendo expects it in the browser, so it ends up in the bundle by design.

```bash
ng serve
```

App runs at `http://localhost:4200`.

### Backend

Nothing to set up – the Jamendo, Met and PokéAPI calls all run straight from the frontend.

Once a backend is added, it is expected at `http://localhost:8000`. Point `base_url` in `environment.development.ts` at it and the frontend follows; during development, Angular's dev proxy (`proxy.conf.json`) can forward `/api` there so the browser sees a single origin and no CORS handling is needed.

## Status

🚧 In development – see the project plan for phases (local memory → API integration → polish).

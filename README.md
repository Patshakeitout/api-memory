# API-Memory

A learning project: a memory game that grows step by step from local images to real APIs.

## Idea

- **Stage 1:** Classic memory game with local image files, selectable board sizes.
- **Stage 2:** Random motifs from three APIs:
  - 🎨 **Met API** – artworks from the Metropolitan Museum of Art
  - 🎵 **Hitster mode** – Spotify cover/title/artist (by genre), with a QR code/link to open the Spotify app
  - 🐾 **PokéAPI** – Pokémon artworks

## Architecture

- **Frontend:** Angular (standalone components, signals, plain SCSS, responsive design) – calls the Met API and PokéAPI directly.
- **Backend:** a small Python backend (FastAPI)

```
api-memory/
├── frontend/   # Angular app
└── backend/    # FastAPI
```

## Setup

### Frontend

```bash
cd frontend
npm install
ng serve
```

App runs at `http://localhost:4200`.

### Backend (only needed for Hitster mode)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file (see `.env.example`) with your own Spotify credentials:

```
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
```

Start the backend:

```bash
uvicorn main:app --reload
```

Runs at `http://localhost:8000`.

## Status

🚧 In development – see the project plan for phases (local memory → API integration → Hitster backend → polish).
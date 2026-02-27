# Siam On Cloud

Production-ready **Node web app** for Siam On Cloud.

## Architecture

- Frontend: React + Vite + Tailwind
- Backend: Node.js + Express (`server/index.js`)
- Runtime: One Node process serves both:
  - API endpoints (`/api/*`)
  - Built frontend (`dist/*`) with SPA fallback

## Local Development

```bash
npm install
npm run dev
```

Optional: run Node server locally for API/static integration test

```bash
npm run build
npm run start
```

## Production Run

```bash
npm install
npm run build
npm run start
```

The server listens on `process.env.PORT` (Hostinger injects this automatically).

## Environment Variables

Create `.env` in project root:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxx
PORT=5000
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_API_BASE_URL=
```

`VITE_API_BASE_URL` can be empty in production when frontend/API share same origin.

## Scripts

- `npm run dev` - Vite development frontend
- `npm run dev:server` - Start Node server directly
- `npm run build` - Build frontend to `dist`
- `npm run start` - Start full Node app (`server/index.js`)
- `npm run lint` - Run ESLint

## Hostinger Node Deployment

See `HOSTINGER_NODE_DEPLOY.md` for complete step-by-step deployment.

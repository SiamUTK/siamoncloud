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
- `npm run git:advisor` - Start advisory-only Git helper (no auto-commit/push)

## Git Advisor (Advisory Only)

`Git Advisor` monitors working tree changes and suggests one of:

- Commit now
- Wait before committing
- Push to remote
- Warning for large uncommitted diff

It does **not** execute git actions automatically.

### Run

```bash
npm run git:advisor
```

### VS Code Task

Use task label `Git Advisor` (from `.vscode/tasks.json`) to run it in the editor.

### Tunable Settings

Edit top-level `CONFIG` in `scripts/git-advisor.cjs` to tune:

- debounce timing
- polling interval
- commit threshold
- push reminder interval
- warning threshold

## Hostinger Node Deployment

See `HOSTINGER_NODE_DEPLOY.md` for complete step-by-step deployment.

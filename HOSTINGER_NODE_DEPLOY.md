# Hostinger Node.js Deployment Guide

This project runs as a full Node web app (Express serves API + frontend).

## 1) Upload project

Upload the full project to your Hostinger Node app folder (for example `~/apps/siamoncloud`).

Required folders/files:

- `server/`
- `src/` (build-time)
- `public/`
- `package.json`
- `package-lock.json`
- `vite.config.js`

## 2) Configure Node App in hPanel

- **Application mode**: Node.js
- **Node version**: 18+ (recommended 20)
- **Startup file**: `server/index.js`
- **Application root**: project root

## 3) Environment variables

In Hostinger Node environment variables, set:

- `OPENAI_API_KEY`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_BASE_URL` (optional, leave empty for same-origin API)

Do not hardcode secrets in source files.

## 4) Install and build

Run in Hostinger terminal:

```bash
npm install
npm run build
```

## 5) Start application

Use command:

```bash
npm run start
```

The app serves:

- Frontend routes (including deep links like `/en/contact`)
- API routes under `/api/*`

## 6) Verify

Check:

- `/api/health`
- `/en`
- `/th`
- `/en/contact`
- `/th/contact`

## 7) Redeploy process

For each update:

```bash
npm install
npm run build
npm run start
```

If using process manager from Hostinger UI, restart app after build.

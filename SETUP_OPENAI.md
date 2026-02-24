# OpenAI API Setup & Troubleshooting

## ⚠️ AI Test Failed - Quick Fix

The AI test likely failed because the OpenAI API key is missing. Here's how to fix it:

---

## 1️⃣ Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api/keys)
2. Sign in with your OpenAI account (create one if needed)
3. Click "Create new secret key"
4. Copy the key (you won't see it again!)

---

## 2️⃣ Add API Key to server/.env

Edit `server/.env`:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
PORT=5000
```

Replace `sk-proj-your-actual-key-here` with your actual key from step 1.

**Important:** Never commit `server/.env` to git. It's already in `.gitignore`.

---

## 3️⃣ Start the Backend Server

Open a new terminal in the project root:

```bash
cd server
npm start
```

You should see:

```
[Server] Running on http://localhost:5000
[Server] AI chat endpoint: POST http://localhost:5000/api/ai/chat
```

---

## 4️⃣ Start the Frontend

In another terminal:

```bash
npm run dev
```

Visit: `http://localhost:5173/`

---

## 5️⃣ Test the AI Connection

1. Open Home page in browser
2. Look for bottom-right corner (dev mode only)
3. Click purple "Test AI" button
4. Wait for response
5. Check browser console for logs: `[AI Test] {...}`

---

## 🔍 Troubleshooting

### Test button doesn't appear

- Make sure you're in **development mode** (`npm run dev`)
- Buttons only show when `import.meta.env.DEV` is true

### Backend error: `ERROR: OPENAI_API_KEY not set`

- You haven't added the key to `server/.env`
- Follow step 2 above

### Error: `Failed to communicate with AI server`

- Backend server not running
- Start it with: `cd server && npm start`
- Verify output shows port 5000

### Error: `Server is not running on port 5000`

- Port 5000 is already in use
- Change PORT in `server/.env` to `5001` or `3001`
- Restart backend

### Error: `Invalid API key`

- Your OpenAI API key is wrong or expired
- Get a new key from OpenAI Platform
- Update `server/.env`

### Error: `401 Unauthorized`

- API key is invalid or missing billing/quota
- Check OpenAI Platform account status
- Ensure you have API credits

---

## 🧪 Manual Test (Advanced)

Test the backend directly:

```bash
curl -X POST http://localhost:5000/api/health
```

Should return:

```json
{ "status": "ok", "message": "Server is running" }
```

Test AI endpoint:

```bash
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

Should return:

```json
{ "success": true, "reply": "AI response..." }
```

---

## 📋 Checklist

- [ ] OpenAI account created
- [ ] API key generated and copied
- [ ] `server/.env` updated with real API key
- [ ] `cd server && npm install` completed
- [ ] Backend running without errors
- [ ] Frontend running on port 5173
- [ ] Test AI button visible in dev mode
- [ ] Test button click shows response

If you complete these steps and still have issues, check the browser console and server terminal for specific error messages.

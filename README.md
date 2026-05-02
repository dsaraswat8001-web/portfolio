# Personal Portfolio Website

A full-stack personal portfolio website built with **React + Node.js/Express + MongoDB Atlas**.

## Tech Stack

| Layer    | Technology               |
|----------|--------------------------|
| Frontend | React 18, Vite, CSS3     |
| Backend  | Node.js, Express.js      |
| Database | MongoDB Atlas (cloud)    |
| Deploy   | Vercel (FE) + Render (BE)|

---

## Project Structure

```
portfolio/
├── client/           # React frontend → deploy to Vercel
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── server/           # Express backend → deploy to Render
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

---

## Deployment Guide (Step by Step)

### Step 1 — Set up MongoDB Atlas (Free Cloud Database)

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account → click **"Build a Database"** → choose **M0 Free tier**
3. Set a username and password (save these)
4. In **"Network Access"**, click **"Add IP Address"** → choose **"Allow Access from Anywhere"** (0.0.0.0/0)
5. In **"Database"**, click **"Connect"** → **"Drivers"** → copy the connection string
6. It looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`
7. Replace `<password>` with your actual password and add `portfolio` as the DB name:
   - Final: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio`

---

### Step 2 — Deploy Backend to Render (Free)

1. Push your code to GitHub (create a repo, push the `portfolio/` folder)
2. Go to [https://render.com](https://render.com) → sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repo → select it
5. Configure:
   - **Name**: `portfolio-api`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Under **"Environment Variables"**, add:
   - `MONGO_URI` = your MongoDB connection string from Step 1
   - `CLIENT_URL` = `https://your-portfolio.vercel.app` (update after Step 3)
7. Click **"Create Web Service"**
8. Wait ~3 minutes. Your API URL will be: `https://portfolio-api.onrender.com`
9. Test it: visit `https://portfolio-api.onrender.com` — you should see `{"status":"Portfolio API running ✅"}`

> ⚠️ **Note**: Render free tier spins down after 15 mins of inactivity. First request may take ~30s to wake up.

---

### Step 3 — Deploy Frontend to Vercel (Free)

1. Go to [https://vercel.com](https://vercel.com) → sign up with GitHub
2. Click **"Add New Project"** → import your GitHub repo
3. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: Vite (auto-detected)
4. Under **"Environment Variables"**, add:
   - `VITE_API_URL` = `https://portfolio-api.onrender.com` (your Render URL from Step 2)
5. Click **"Deploy"**
6. Your portfolio will be live at: `https://your-portfolio.vercel.app`

---

### Step 4 — Personalize Your Portfolio

Edit these files before deploying:

| File | What to change |
|------|----------------|
| `client/src/components/Hero.jsx` | Replace "Your Name" with your name |
| `client/src/components/About.jsx` | Update bio, stats, and add your photo |
| `client/src/components/Skills.jsx` | Update skill list to match yours |
| `client/src/components/Footer.jsx` | Update GitHub, LinkedIn, email links |
| `client/src/components/Contact.jsx` | Update email and location |

**To add your own projects** (instead of demo data), you can:
- Use the API: `POST https://portfolio-api.onrender.com/api/projects` with JSON body
- Or edit the seed data in `server/server.js`

---

### Step 5 — Submit

Your submission links:
- **Live site**: `https://your-portfolio.vercel.app`
- **GitHub repo**: `https://github.com/yourusername/portfolio`

Both must be publicly accessible. ✅

---

## Running Locally

```bash
# Terminal 1 - Backend
cd server
cp .env.example .env   # Fill in your MONGO_URI
npm install
npm run dev            # Runs on http://localhost:5000

# Terminal 2 - Frontend
cd client
cp .env.example .env   # Fill in VITE_API_URL=http://localhost:5000
npm install
npm run dev            # Runs on http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/projects` | Add a project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| POST | `/api/contact` | Submit contact form |

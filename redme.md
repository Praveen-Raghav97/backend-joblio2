
# Start the backend server in WATCH mode (DEVELOPMENT ONLY)
# 👉 Automatically restarts the server when compiled files in `dist/` change
# 👉 Use this only for local development or staging
# ❌ Do NOT use in production
pm2 start ecosystem.config.cjs --watch



# Start the backend server using PM2 ecosystem config in production mode
pm2 start ecosystem.config.js --env production

pm2 start dist/index.js --name backend 
# Stop the running backend server (keeps it registered in PM2)
pm2 stop backend

# Restart the backend server (useful after config changes)
pm2 restart backend

# View live logs (stdout + error logs) for the backend server
pm2 logs backend

# Remove the backend server completely from PM2
pm2 delete backend



# Show live logs (both stdout & error) for backend
pm2 logs backend

# Show last 100 lines of logs for backend-api
pm2 logs backend --lines 100

# Show logs for all PM2 apps
pm2 logs

# View only error logs for backend-api
pm2 logs backend --err

# View only standard output logs for backend-api
pm2 logs backend --out

# Show log file paths used by PM2
pm2 info backend


## 📄 `README.md`

```md
# Backend  (Node.js + TypeScript + Express)

Production-ready backend built with **Node.js**, **TypeScript**, **Express**, **Winston logging**, **global error handling**, and **PM2**.

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Express
- Winston (logging)
- Zod (env validation)
- PM2 (process manager)

---

## 📁 Project Structure

```

src/
├── index.ts              # Entry point (bootstrap)
├── server.ts             # Server startup (app.listen)
├── app.ts                # Express app configuration
├── config/
│   └── env.ts            # Environment variables validation
├── middlewares/
│   ├── requestLogger.ts
│   └── errorHandler.ts
├── utils/
│   ├── logger.ts
│   ├── AppError.ts
│   └── asyncHandler.ts

````

---

## ⚙️ Prerequisites

- Node.js ≥ 18
- npm ≥ 9

Check versions:
```bash
node -v
npm -v
````

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
NODE_ENV=development
PORT=5000
```

> ⚠️ Do NOT use port `5173` (reserved for frontend / Vite)

---

## 📥 Install Dependencies

```bash
npm install
```

---

## 🚀 Start Server (Development)

Uses `ts-node-dev` with hot reload.

```bash
npm run dev
```

Expected output:

```
🔥 index.ts loaded
Server started on http://localhost:5000
```

Test:

```bash
curl http://localhost:5000/health
```

---

## 🏗️ Build Project (Production)

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output:

```
dist/
├── index.js
├── server.js
├── app.js
```

---

## ▶️ Start Server (Production – without PM2)

```bash
npm start
```

---

## 🔁 Start Server with PM2 (Recommended)

### Install PM2 globally

```bash
npm install -g pm2
```

### Start using ecosystem config

```bash
pm2 start ecosystem.config.js --env production
```

### Useful PM2 commands

```bash
pm2 list
pm2 logs backend-api
pm2 restart backend-api
pm2 stop backend-api
```

### Auto-start on reboot

```bash
pm2 startup
pm2 save
```

---

## 🩺 Health Check

Endpoint:

```
GET /health
```

Response:

```json
{
  "status": "ok",
  "uptime": 123.45,
  "timestamp": "2026-02-27T12:00:00.000Z"
}
```

---

## ❗ Error Handling

* All errors are handled by a **global error middleware**
* Errors are logged using **Winston**
* Stack traces shown only in development

Example:

```ts
throw new AppError('User not found', 404);
```

---

## 📜 Logs

* Console logs (development)
* File logs:

  * `logs/error.log`
  * `logs/combined.log`

PM2 logs:

```
~/.pm2/logs/
```

---

## 🧪 Scripts

```bash
npm run dev     # start in development
npm run build   # build for production
npm start       # start compiled app
```

---

## ✅ Notes

* `index.ts` is the **only entry point**
* `app.ts` never calls `listen()`
* `server.ts` controls the port
* PM2 should always run **compiled JS**

---

## 📌 Author

Praveen

```

---

If you want, next I can:
- add **API module structure (auth/users)**
- add **Swagger / OpenAPI**
- add **Docker + PM2**
- add **Nginx reverse proxy**

Just tell me 👍
```

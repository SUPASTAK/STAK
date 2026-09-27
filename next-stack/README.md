# Next Stack

A general-purpose full-stack Next.js starter for building modern web applications.

## Included

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- PostgreSQL
- Drizzle ORM
- Drizzle Kit migrations
- Docker Compose for local PostgreSQL
- Environment variable setup
- Basic database health-check route
- Production-ready Dockerfile for deployment

## Architecture

```text
Browser
   |
   v
Next.js App Router
   |
   v
Application code
   |
   v
Drizzle ORM
   |
   v
PostgreSQL

Docker Compose -> PostgreSQL
```

## Requirements

- Node.js 20.9+
- npm
- Docker Desktop or Docker Engine

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start PostgreSQL

```bash
docker compose up -d db
```

If you want to inspect the database logs locally:

```bash
docker compose logs -f db
```

### 3. Configure the environment

Copy `.env.example` to `.env.local` and keep the local database values:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

The default connection string points to the local Docker PostgreSQL container:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app
```

### 4. Run the initial migration

```bash
npm run db:migrate
```

### 5. Start Next.js

```bash
npm run dev
```

Open http://localhost:3000.

## Database workflow

The database schema lives in `src/db/schema.ts`.

Generate a migration after changing the schema:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

Push schema changes directly during local development if you do not want to create a migration file yet:

```bash
npm run db:push
```

Seed the example data set:

```bash
npm run db:seed
```

Run a quick database smoke check:

```bash
npm run db:smoke
```

Open Drizzle Studio:

```bash
npm run db:studio
```

If you want to check the database from the app without opening the console, visit:

```text
/api/health/db
```

A successful response looks like:

```json
{
  "status": "ok",
  "database": "connected"
}
```

## Production build

This stack is set up for a standard Next.js production build:

```bash
npm run build
npm run start
```

The included Dockerfile also supports containerized deployment with a standalone Next.js server.

## Common troubleshooting

- If PostgreSQL is not reachable, make sure Docker is running and the container is healthy:
  ```bash
  docker compose ps
  docker compose logs db
  ```
- If Drizzle cannot connect, confirm `.env.local` exists and `DATABASE_URL` matches the running database.
- If the app fails to start, run:
  ```bash
  npm run typecheck
  npm run lint
  ```

## Project structure

```text
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── db/
│   │   │           └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── db/
│       ├── index.ts
│       └── schema.ts
├── public/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── drizzle.config.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Scope

This stack intentionally provides the application foundation without forcing authentication, payments, Redis, object storage, or a specific deployment provider. Those concerns can be introduced by other Supastak stacks or components later.

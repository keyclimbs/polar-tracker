# Polar Tracker

A personal, demo-first wearable analytics dashboard for Polar data.

## Start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Demo mode requires no credentials and uses 30 deterministic local fixture days.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Configure `DATABASE_URL` for PostgreSQL.
3. Run `npx prisma migrate deploy` after applying migrations.
4. Configure server-only Polar OAuth values only after developer account review.
5. Never place Polar secrets in `NEXT_PUBLIC_*` variables.

## Commands

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — lint
- `npm test` — Vitest unit tests
- `npx prisma migrate deploy` — apply database migrations

## Data and Polar status

The app is designed around the Polar AccessLink product family, not unrelated products named Polar. Official Polar documentation could not be reached during implementation, so no live endpoints, schemas, refresh behavior, historical windows, or webhook signatures are claimed as verified.

See `docs/polar-capabilities.md`, `docs/methodology.md`, and `.env.example`. Demo fixtures are separate and remain visible while live credentials are absent. A live failure never silently replaces live data with demo data.

## Deployment

Use Node 22, a managed PostgreSQL instance, and HTTPS. Set all `.env.example` server variables in the deployment secret manager. The OAuth state cookie is Secure in production. Rotate `POLAR_TOKEN_ENCRYPTION_KEY_BASE64` carefully; token ciphertext decryption policy must be documented during first real deployment.

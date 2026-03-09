# Converra — Site Overview (Frontend & Backend)

Single reference for the full stack: frontend, backend, shared code, and deployment.

---

## Project structure

```
Converra/
├── client/                 # React frontend (Vite)
│   ├── index.html
│   ├── vite.config.ts
│   ├── public/              # Static assets (favicon, logo, etc.)
│   └── src/
│       ├── main.tsx         # Entry point
│       ├── App.tsx          # Router + providers
│       ├── index.css        # Global styles, Tailwind, CSS variables
│       ├── pages/           # home.tsx, not-found.tsx
│       ├── components/      # navbar, contact-form, chart-visual, dashboard-mock, ui/*
│       ├── hooks/           # use-leads.ts, use-toast.ts, use-mobile.tsx
│       └── lib/             # utils.ts, queryClient.ts
├── server/                  # Express backend
│   ├── index.ts             # App entry, middleware, static/Vite
│   ├── routes.ts            # API route handlers
│   ├── storage.ts           # In-memory lead storage
│   ├── static.ts            # Serve built static files (production)
│   └── vite.ts              # Vite dev middleware (development)
├── shared/                  # Shared between client and server
│   ├── schema.ts            # Zod schemas (InsertLead, Lead)
│   └── routes.ts            # API route definitions (path, method, input/output schemas)
├── script/
│   └── build.ts             # Vite client build + esbuild server bundle
├── package.json             # Root deps (React, Express, UI, etc.)
├── vite.config.ts          # Re-exports client/vite.config.ts
├── tailwind.config.ts       # Tailwind + navy/teal theme
├── vercel.json              # Vercel deployment config
└── replit.md                # Architecture notes (partially from template)
```

---

## Frontend

### Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | React 18 |
| **Language** | TypeScript |
| **Build** | Vite 7 |
| **Routing** | Wouter (path `/` → Home, else → NotFound) |
| **Styling** | Tailwind CSS 3.x + CSS variables (navy, teal, slate) |
| **UI** | shadcn/ui (Radix UI primitives) in `client/src/components/ui/` |
| **Forms** | React Hook Form + Zod via `@hookform/resolvers` |
| **Server state** | TanStack React Query (QueryClientProvider in App) |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |

### Path aliases (Vite)

- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Main pieces

- **`client/src/main.tsx`** — Renders `<App />` into `#root`, imports `index.css`.
- **`client/src/App.tsx`** — `QueryClientProvider` → `TooltipProvider` → `Router` (Switch/Route) → `Toaster`. Only route: `/` → `Home`, fallback → `NotFound`.
- **`client/src/pages/home.tsx`** — Full landing: Navbar, Hero (logo, tagline, headline, CTAs), Problem, Solution (dashboard mock), Process (methodology), Results (comparison table), Beyond the Close, Clients, Contact (form), Footer (social: Instagram, LinkedIn).
- **`client/src/components/navbar.tsx`** — Fixed nav: CONVERRA, links (Problem, Solution, Process, Results, Clients, Contact), “Book Strategy Call” CTA; mobile sheet menu.
- **`client/src/components/contact-form.tsx`** — React Hook Form with Zod (`insertLeadSchema`). Fields: name, email, company, message. Submits via `useCreateLead()` (POST `/api/leads`). Success state shows “Message Received!” and option to send another.
- **`client/src/hooks/use-leads.ts`** — `useCreateLead()` mutation: POST to `api.leads.create.path` with validated body; toasts on success/error.
- **`client/src/hooks/use-toast.ts`** — Toast hook used by contact form and elsewhere.
- **`client/index.html`** — Single HTML shell: charset, viewport, title, meta description, favicon, fonts; `<div id="root">` and script to `main.tsx`.

### Theming (CSS)

- **`client/src/index.css`** — `:root` defines navy, teal, light, gray-text, background, primary, etc. Body uses Inter; headings use Manrope (via `@layer base`).
- **`tailwind.config.ts`** — Extends theme with `navy` and `teal` palettes, border radius, chart colors, accordion animations; plugins: `tailwindcss-animate`, `@tailwindcss/typography`.

### Build

- **Command:** `npm run build` (from root; see Build process below).
- **Output:** Vite builds the client into **`dist/public/`** (configured in `client/vite.config.ts`: `outDir: "../dist"`; Vite puts built assets in `dist/public` when using default Vite output structure relative to `client`).

---

## Backend

### Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js |
| **Server** | Express 5 |
| **Language** | TypeScript (run with `tsx` in dev) |
| **Validation** | Zod (shared schemas from `shared/schema.ts`) |

### Entry and middleware

- **`server/index.ts`**  
  - Creates Express app and HTTP server.  
  - `express.json()` and `express.urlencoded({ extended: false })`.  
  - Request logging for `/api` routes (method, path, status, duration, response body).  
  - Registers API routes via `registerRoutes(httpServer, app)`.  
  - Global error handler: JSON `{ message }` and status.  
  - **Development:** Vite middleware via `server/vite.ts` (HMR).  
  - **Production / Vercel:** `serveStatic(app)` from `server/static.ts` (serves `dist/public` and SPA fallback to `index.html`).  
  - If not Vercel, listens on `PORT` (default 5000).

### API

- **`server/routes.ts`**  
  - **GET `/api/leads`** — Returns all leads from `storage.getLeads()` (200 + JSON array).  
  - **POST `/api/leads`** — Body validated with `api.leads.create.input` (Zod); creates lead via `storage.createLead(input)`; returns created lead (201) or validation error (400 with `message` and optional `field`).

### Storage

- **`server/storage.ts`**  
  - In-memory only: a `leads: Lead[]` array.  
  - `createLead(insertLead)` — Appends lead with `id: Date.now()`, `createdAt: new Date().toISOString()`.  
  - `getLeads()` — Returns that array.  
  - No database in the current codebase; data is lost on restart.  
  - Interface `IStorage` allows swapping to a real DB later.

---

## Shared layer

Used by both client and server for type-safe API contracts and validation.

- **`shared/schema.ts`**  
  - **`insertLeadSchema`** — Zod: `name` (min 1), `email` (email), `company` (min 1), `message` (optional).  
  - **`leadSchema`** — Extends with `id` (number), `createdAt` (string).  
  - Exports types: `InsertLead`, `Lead`.

- **`shared/routes.ts`**  
  - **`api.leads.create`** — `method: 'POST'`, `path: '/api/leads'`, `input: insertLeadSchema`, `responses: { 201: leadSchema, 400: validationError }`.  
  - **`api.leads.list`** — `path: '/api/leads'`, `responses: { 200: z.array(leadSchema) }`.  
  - Client uses these for `fetch` URL/method and response parsing; server uses them for validation and status codes.

---

## Data flow (contact form)

1. User submits contact form (name, email, company, message).  
2. React Hook Form + Zod validate on client (`insertLeadSchema`).  
3. `useCreateLead()` calls `POST /api/leads` with JSON body.  
4. Server parses body with `api.leads.create.input.parse(req.body)`.  
5. Server calls `storage.createLead(input)` and returns created lead (201).  
6. Client shows toast and success UI; on error, shows error toast.

---

## Build and run

- **Dev:** `npm run dev` — Vite dev server (client only; if you run the Express server separately you’d point it at Vite or use a combined setup as in `server/index.ts` when not in production).  
- **Build:** Root `package.json` scripts: `build` / `preview` are Vite-only. The `script/build.ts` (if run via a custom script) builds client with Vite and server with esbuild to `dist/index.cjs`.  
- **Production:** Express serves from `dist/public` and runs the bundled server (e.g. `node dist/index.cjs` or via Vercel serverless).  
- **Port:** Default `5000` (from `server/index.ts`).

---

## Deployment

- **Vercel:** `vercel.json` specifies `framework: "vite"`, `buildCommand: "npm run build"`, `outputDirectory: "dist"`. API and server logic would be deployed as serverless functions or a Node server depending on Vercel project config.  
- **Static assets:** Served from `dist` (or `dist/public` depending on how static middleware is pointed).  
- **Environment:** No `DATABASE_URL` in current code; storage is in-memory. For production leads you’d replace `server/storage.ts` with a DB (e.g. PostgreSQL) and add env vars.

---

## Summary table

| Area | Details |
|------|--------|
| **Frontend** | React 18, TypeScript, Vite, Wouter, Tailwind, shadcn/ui, React Query, Framer Motion, React Hook Form + Zod |
| **Backend** | Express 5, TypeScript, Zod, in-memory lead storage |
| **Shared** | `shared/schema.ts` (Zod lead schemas), `shared/routes.ts` (API path/method/schemas) |
| **API** | GET `/api/leads`, POST `/api/leads` |
| **Contact** | Form in `contact-form.tsx` → `useCreateLead()` → POST `/api/leads` |
| **Build** | Vite → `dist/public`; optional esbuild server bundle → `dist/index.cjs` |
| **Deploy** | Vercel (config in `vercel.json`); static from `dist` |

This document reflects the codebase as of the last review. For questionnaire and launch checklist, see `CLIENT_QUESTIONS.md`.

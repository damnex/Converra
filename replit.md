# Converra - SaaS Landing Page

## Overview

Converra is a SaaS marketing/landing page website for an affiliate-based revenue partner company targeting tech companies. The brand tagline is "Conversation. Conviction. Conversion." The application is a full-stack project with a React frontend serving as a landing page and an Express backend that handles lead capture form submissions. The site features an enterprise SaaS aesthetic with a Navy + Teal color palette, smooth animations, and a contact form that stores leads in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router) — currently only has a home page and 404
- **Styling**: Tailwind CSS with custom color palette (navy, teal, light, gray-text). Uses CSS variables for theming. Fonts are Inter (body) and Manrope (headings) from Google Fonts
- **UI Components**: Shadcn/ui component library (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered fade-in animations and smooth transitions
- **State Management**: TanStack React Query for server state (API calls). No complex client state management needed
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **Server Entry**: `server/index.ts` creates an HTTP server. In development, Vite dev server middleware is attached for HMR. In production, static files are served from `dist/public`
- **API Design**: A single REST endpoint (`POST /api/leads`) for lead capture. Routes are defined with typed schemas in `shared/routes.ts` using Zod for input validation and response typing
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing an `IStorage` interface, making the storage backend swappable
- **Development vs Production**: Dev mode uses Vite middleware (`server/vite.ts`); production serves pre-built static files (`server/static.ts`)

### Data Storage
- **Database**: PostgreSQL via `node-postgres` (pg) driver
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — currently has a single `leads` table with fields: id (serial), name, email, company, message, createdAt
- **Schema Validation**: `drizzle-zod` generates Zod schemas from Drizzle table definitions for shared client/server validation
- **Migrations**: Drizzle Kit handles schema pushing via `npm run db:push`
- **Connection**: Requires `DATABASE_URL` environment variable

### Shared Code (`shared/` directory)
- `schema.ts`: Database table definitions and Zod schemas shared between client and server
- `routes.ts`: API route definitions with typed input/output schemas, enabling type-safe API calls from the client

### Build Process
- **Client Build**: Vite builds the React app to `dist/public/`
- **Server Build**: esbuild bundles the server to `dist/index.cjs`. Common dependencies are bundled (allowlisted) to reduce cold start times; others are kept external
- **Scripts**: `dev` for development, `build` for production build, `start` for production run, `db:push` for database schema sync

### Key Design Patterns
- **Type-safe API contracts**: Route definitions in `shared/routes.ts` include method, path, input schema, and response schemas. Both client and server reference the same definitions
- **Validation at boundaries**: Zod validates data on both client (form) and server (route handler)
- **Component composition**: Landing page is composed of section-based components with consistent animation patterns using a reusable `Section` wrapper component

## External Dependencies

### Database
- **PostgreSQL**: Required. Connection string must be provided via `DATABASE_URL` environment variable. Used with Drizzle ORM and `node-postgres` driver

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit**: ORM and migration tooling for PostgreSQL
- **express**: HTTP server framework (v5)
- **@tanstack/react-query**: Async state management for API calls
- **framer-motion**: Animation library for scroll-triggered effects
- **zod**: Schema validation shared between client and server
- **react-hook-form**: Form state management
- **shadcn/ui ecosystem**: Radix UI primitives, class-variance-authority, clsx, tailwind-merge
- **wouter**: Lightweight client-side routing
- **connect-pg-simple**: PostgreSQL session store (available but not actively used yet)

### Deployment
- **Vercel**: `vercel.json` config present for deployment — API routes go to the Express server, static assets served from the built dist folder
- **Replit**: Vite plugins for Replit development environment (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`)
# Development

## Setup
1. Copy `.env.example` to `.env.local` and fill values.
2. Install deps: `npm install`
3. Start app: `npm run dev`

## Quality
- `npm run lint`
- `npm run typecheck`

## First vertical slice
- Login boundary (adapter)
- Create task (UI/API placeholder)
- Assign agent
- Start run and observe status
- Emit audit log event (next step in Convex mutations)

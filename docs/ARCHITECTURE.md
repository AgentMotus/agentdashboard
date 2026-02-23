# Architecture Overview

## Decisions
- Monolith-first: Next.js app + Convex backend runtime.
- Human.tech integration via adapter boundary in `src/lib/humantech.ts`.
- RBAC enforced at action layer (`src/modules/auth/rbac.ts`).
- Wallet/account abstraction modeled explicitly (`wallets`, `walletPermissions`, `approvals`).
- Audit-first design via `auditLogs` entity.

## Trade-offs
- Faster MVP delivery over early microservices.
- In-memory demo run store now; migrate to Convex mutations in next phase.
- Human.tech adapter mocked until credentials and SDK are integrated.

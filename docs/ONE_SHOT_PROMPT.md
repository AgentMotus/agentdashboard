# One-Shot Prompt — AgentDashboard Architecture Bootstrap

You are a principal full-stack architect and staff engineer.

Build the **initial architecture scaffold** for a project called **AgentDashboard** using:
- **Next.js + TypeScript**
- **Convex** as backend runtime + database
- **Human.tech** for auth (Web3 wallet-native)
- A wallet/account abstraction integration surface for creating multiple wallets and assigning scoped permissions.

## Objective
Generate a production-oriented architecture baseline that supports:
1. Multi-agent orchestration
2. Task management
3. Chat (human ↔ agent)
4. Secure auth + RBAC
5. Wallet/account abstraction permissions
6. Auditability and secure deployment patterns

## Constraints
- Do not build a toy app.
- Keep implementation modular and extensible.
- Security is first-class, not an afterthought.
- Prefer clear boundaries over premature microservices.
- Include docs and developer workflow from day one.

## Deliverables

### A) Project structure
Generate a clean folder structure for Next.js + Convex with clear module boundaries for:
- auth
- orgs/roles/permissions
- agents
- tasks
- chats
- wallets/account-abstraction
- audit logs
- observability

### B) Initial domain model
Propose and implement initial Convex schema/entities for:
- users
- organizations/workspaces
- memberships/roles
- agents
- agentRuns
- tasks
- taskEvents
- chats
- messages
- wallets
- walletPermissions
- approvals
- auditLogs

Include relationship notes and indexing strategy.

### C) Security model
Implement and document:
- RBAC roles: Owner, Admin, Operator, Viewer
- action-level authorization guards
- policy checks for wallet-sensitive operations
- audit log event emission for critical actions

### D) Auth integration boundary
Create an adapter/interface for Human.tech auth that maps wallet identity to:
- internal user record
- workspace memberships
- session claims/role claims

### E) API/app workflow
Set up end-to-end vertical slice:
- user authenticates
- creates a task
- assigns to an agent
- run is tracked
- logs visible in UI
- audit event recorded

### F) DX & quality guardrails
Include:
- env template
- lint/typecheck scripts
- PR checklist
- architecture decision notes (ADR starter)
- module README files

### G) Output requirements
1. Explain architecture decisions and trade-offs.
2. List all generated files with purpose.
3. Provide setup and run instructions.
4. Provide “what to build next” aligned to phased roadmap:
   - Phase 1 Foundation
   - Phase 2 Control Plane
   - Phase 3 Wallet/AA
   - Phase 4 Reliability
   - Phase 5 Hardening
   - Phase 6 Scale

## Style
- Be concise but explicit.
- Use secure defaults.
- Avoid placeholders that hide core logic.
- Prefer maintainable patterns over flashy complexity.

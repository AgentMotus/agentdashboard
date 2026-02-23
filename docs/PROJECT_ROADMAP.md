# AgentDashboard — Architecture & Execution Roadmap

## Vision
AgentDashboard is the control plane for Motus agents: orchestrate multiple agents, manage tasks, chat with agents/humans, and operate securely with Web3-native identity and account abstraction.

## Core Stack
- **App Framework:** Next.js + TypeScript
- **Database/Backend Runtime:** Convex
- **Auth & Identity:** Human.tech (Web3 wallet-native auth)
- **Wallet Layer:** Account abstraction service with support for sub-wallet creation and scoped permissions
- **UI:** Tailwind + component system (e.g., shadcn/ui style)
- **Observability:** structured logs, error tracking, audit trails

## Product Modules
1. **Auth & Identity Layer**
   - Human.tech login
   - Wallet linking/unlinking
   - Session lifecycle + secure token handling

2. **Organization & Permissions (RBAC + Wallet Permissions)**
   - Organizations / workspaces
   - Roles (Owner, Admin, Operator, Viewer)
   - Policy engine for wallet/account actions
   - Delegated wallet permissions (who can sign/execute/approve)

3. **Agent Orchestration**
   - Register/start/stop agents
   - Agent capability profiles
   - Queue-based execution, retries, idempotency
   - Execution logs and run states

4. **Task System**
   - Task creation, assignment, priorities, statuses
   - Human tasks + agent tasks
   - Task-to-agent automation hooks

5. **Chat System**
   - Human ↔ agent chat threads
   - Agent ↔ agent thread support (optional)
   - Context-aware history, attachments, references

6. **Wallet Operations & AA**
   - Create additional wallets under same account/service
   - Role-scoped wallet actions
   - Approval flows for sensitive transactions
   - Auditability for every wallet operation

7. **Security, Compliance & Operations**
   - Secret management
   - API and action-level authorization checks
   - Audit logs for auth, tasks, agent actions, wallet actions
   - Rate limiting and abuse protections

## Development Workflow
- Main branch protected
- Feature branches per module
- PR template with architecture + security checklist
- Convex schema changes tracked with migration notes
- Docs-first updates for any module-level change

## Definition of Done (module level)
A module is done only when it includes:
- Functional implementation
- Access control checks
- Error handling + observability
- Audit trail events
- Documentation update

## Phased Roadmap

### Phase 1 — Foundation
- Bootstrap Next.js + TypeScript app
- Convex project setup (core schema + envs)
- Human.tech auth integration baseline
- Basic workspace shell and navigation
- Initial RBAC model
- Security baseline (headers, env separation, secret handling)

### Phase 2 — Core Control Plane
- Agent registry + run lifecycle
- Task management core (CRUD + status flow)
- Chat threads (human ↔ agent)
- Real-time updates (task/run/chat state)
- First audit log stream

### Phase 3 — Wallet & Account Abstraction Layer
- Integrate account abstraction service
- Wallet creation flows under user/org scope
- Permission policies for wallet actions
- Multi-approval / guarded actions for high-risk operations
- Wallet action history and traceability

### Phase 4 — Automation & Reliability
- Queue workers for agent tasks
- Retry/backoff/idempotency hardening
- Agent-to-task and task-to-agent automation rules
- Failure recovery and operator tools

### Phase 5 — Security Hardening
- Full threat model pass
- Privilege boundary validation
- Abuse/rate controls
- Incident runbooks
- Audit/report exports

### Phase 6 — Scale & Productization
- Performance optimization and cost profiling
- Multi-workspace tenancy refinement
- Advanced analytics dashboard
- Admin operations console
- Release process and versioned platform docs

## Immediate Next Actions
1. Confirm Phase 1 scope and schema boundaries.
2. Generate initial Convex schema for orgs/users/roles/tasks/chats/agents/audit.
3. Implement auth-to-session bridge (Human.tech → app session + role claims).
4. Create first vertical slice: login → create task → assign to agent → view run log.

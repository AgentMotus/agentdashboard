# ADR 0001: Monolith-first architecture

## Status
Accepted

## Context
Need to ship a secure control plane quickly while preserving modular boundaries.

## Decision
Use Next.js + Convex as monolith-first architecture with clear module boundaries.

## Consequences
- Faster delivery and lower ops complexity.
- Future extraction possible module-by-module.

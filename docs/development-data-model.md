# Development and Data Model Notes

Soul-List has a modular bot architecture with services, repositories, plugins, and command handlers. This document gives future work a quick map before changing behavior.

## Local Development Checklist

1. Install dependencies.
2. Create environment variables from `.env.example`.
3. Verify database configuration in `drizzle.config.ts`.
4. Start the bot through the bootstrap entrypoint.
5. Watch logs for connection, plugin registration, and command loading.

## Main Areas

| Area | Purpose |
| --- | --- |
| `src/bootstrap` | Runtime startup and event registration. |
| `src/core` | Shared types, parser, permissions, registry, errors, and utilities. |
| `src/plugins` | User-facing command groups. |
| `src/services` | External APIs and domain services. |
| `src/repositories` | Persistence access for users, groups, economy, warnings, notes, and related data. |
| `src/database` | Database client and schema definitions. |

## Data Model Notes

Repository classes should own persistence details. Commands and services should prefer repository methods instead of reaching directly into database tables. This keeps future export/share flows easier to add without duplicating data access logic.

Refs #3.

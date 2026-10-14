# Supabase PostgreSQL scaffold

No database integration existed in the prototype. `migrations/0001_scaffold.sql`
is intentionally a no-op; it does not provision application tables or demo users.
The backend has an optional PostgreSQL pool configured through its private
`DATABASE_URL`. No frontend flow calls it yet.

When implementing real features, add reviewed SQL migrations in numeric order
and apply them to the intended Supabase project with the SQL editor or your
PostgreSQL migration tooling. Review schema, permissions and RLS before exposing
tables. Do not import sample browser answers as a production question bank.

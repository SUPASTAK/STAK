import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { sql } from 'drizzle-orm';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');
}

const pool = new Pool({ connectionString });
const db = drizzle({ client: pool });

try {
  const [{ count }] = await db.execute(sql`SELECT COUNT(*)::int AS count FROM information_schema.tables WHERE table_schema = 'public';`);

  if (typeof count !== 'number') {
    throw new Error('Database smoke check did not return a valid row count.');
  }

  console.log(`Database is reachable. Public schema contains ${count} tables.`);
} catch (error) {
  console.error('Smoke test failed:', error);
  process.exitCode = 1;
} finally {
  await pool.end();
}

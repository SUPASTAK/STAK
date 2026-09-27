import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');
}

const pool = new Pool({ connectionString });

try {
  await pool.query(`
    INSERT INTO users (name, email)
    VALUES
      ('Ada Lovelace', 'ada@example.com'),
      ('Grace Hopper', 'grace@example.com'),
      ('Linus Torvalds', 'linus@example.com')
    ON CONFLICT (email) DO NOTHING;
  `);

  console.log('Seeded users table with sample data.');
} catch (error) {
  console.error('Failed to seed database:', error);
  process.exitCode = 1;
} finally {
  await pool.end();
}

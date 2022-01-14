import Pool from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'qwer',
  host: 'localhost',
  port: 5432,
  database: 'nodejs2021q4',
});

export { pool };

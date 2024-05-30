require('dotenv').config({ path: '.env.local' });
import pool from './db';

async function testDatabaseConnection() {
    try {
        const [results] = await pool.query('SELECT 1 + 1 AS solution');
        console.log('Database connection test successful:', results);
    } catch (error: unknown) {
        console.error('Database connection test failed. Full error:', error);
    }
}

testDatabaseConnection();

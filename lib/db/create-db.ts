import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
  });

  try {
    console.log(`Creating database ${process.env.MYSQL_DATABASE}...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE}`);
    console.log("Database created or already exists.");
  } catch (error) {
    console.error("Failed to create database:", error);
  } finally {
    await connection.end();
  }
}

createDatabase();

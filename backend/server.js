const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "GlobeLife",
    password: "Aa98716067183",
    port: 5432,
  });

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    console.log("Received data:", { email, password });
  
    if (!email || !password) {
      console.error("Email and password are required");
      return res.status(400).json({ error: "Email and password are required" });
    }
  
    try {
      const client = await pool.connect();
      console.log("Database connected successfully");
  
      const result = await client.query(
        "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *",
        [email, password]
      );
  
      console.log("Query executed successfully");
      client.release();
  
      console.log("Database insert result:", result.rows[0]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Database error" });
    }
  });
  
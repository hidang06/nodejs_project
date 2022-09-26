// get the client
// import mysql from 'mysql2/promise';


// console.log("creating connection pool");
// // create the connection to database
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejs_basic'
// });

// export default pool;

//import mongoose from 'mongoose';

import { MongoClient } from 'mongodb'
import { model } from 'mongoose';
require('dotenv').config();

// Connection URL
const url = process.env.DB_URL;

const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;

let db = null; 

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
  } catch (error) {
    
  } finally {

  }
}

const getDB = () => {
  return db; 
}

module.exports = {
  connectDB, 
  getDB 
};

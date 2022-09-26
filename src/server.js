import { json } from 'body-parser';
import express from 'express'
import connection from './configs/connectDB'
//import pool from './configs/connectDB';

// import configViewEngine from './configs/viewEngine'
// import initWebRoute from './route/web'
// import initAPIRoute from './route/api'

require('dotenv').config();

import {connectDB, getDB} from './configs/connectDB'

//var morgan = require('morgan'); 

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let getAllUsers = async (req, res) => {

//   const [rows, fields] = await pool.execute('SELECT * FROM `account`');

//   return res.status(200).json({
//       message: 'ok',
//       data: rows
//   })
// }
// app.use(morgan('combined'));

// configViewEngine(app);
// initWebRoute(app);
// initAPIRoute(app);

// // handle 404 not found 
// app.use((req, res) => {
//   return res.render('404.ejs')
// })

// app.post('/register', async (req, res) => {  
//   let {username, password} = req.body;

//   if (!username || !password){
//       return res.status(200).json({
//           message: 'missing'
//       })
//   }

//   const [rows, fields] = await pool.execute('insert into account(username, password) values (?, ?)', 
//   [username, password]);

//   return res.status(200).json({
//       message: 'ok',
//   })
// })

// app.post('/login', async (req, res) => {

//   let {username, password} = req.body;

//   if (!username || !password){
//       return res.status(200).json({
//           message: 'missing'
//       })
//   }
 
//   const [rows, fields] = await pool.execute('SELECT * FROM `account` where password = ?', [password]);
//   console.log(rows);
  

//   if (Object.values(rows).length === 0)
//     return res.status(200).json({
//       message: 'tai khoan ko dung'
//   })
//   else 
//   return res.status(200).json({
//       message: 'oaaaak'
//   })
// })

connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from "express";

import dotenv from "dotenv";
dotenv.config();
import { initDB } from "./config/db.js";

import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());

// our custom simple middleware
// app.use((req, res, next) => {
//   console.log("hey we hit a req, the method ", req.method);
//   next();
// });

const PORT = process.env.PORT || 5001;

app.use("/api/transactions", transactionsRoute);

console.log("my port :", process.env.PORT);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on port:", PORT);
  });
});

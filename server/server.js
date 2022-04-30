const express = require("express");
const colors = require("colors");
require("dotenv").config({
  path: "../.env",
});
const sequelize = require("./db");
const PORT = process.env.PORT;
const router = require('./router/index')

const app = express();
app.use(router)

const boostServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const server = app.listen(PORT, () => {
      console.log(`Server started`.blue.bold, `on ${PORT} port`.bgBlue, `\nDataBase connected to ${process.env.DB_HOST}`.blue.bold, `on port:${process.env.DB_PORT}`.bgBlue);
    });
  } catch (error) {
    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err, promise) => {
      console.log(`Error: ${err.message}`.yellow);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
  }
};

boostServer()
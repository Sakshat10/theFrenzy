const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT;

connectDB();
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(fileUpload({ useTempFiles: true }));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

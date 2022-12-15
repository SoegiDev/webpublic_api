require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./app/routes/auth.routes");
const webRoutes = require("./app/routes/web.routes");
const publicRoutes = require("./app/routes/public.routes")
const uploadRoutes = require("./app/routes/upload.routes")
const app = express();
const{addRole,addDirector} = require("./scripts/add_data")

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// database
const db = require("./app/model");
const upload = require("./app/middleware/common_multer");
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Soegidev application." });
});


app.use("/api/auth", authRoutes);
app.use("/api/web", webRoutes);
app.use("/api/public",publicRoutes);
app.use("/api/upload",uploadRoutes)
// set port, listen for requests
const PORT = process.env.PORT;
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

  db.sequelize.sync({ force: false,alter:true }).then(() => {
    console.log('Drop and Resync Db');
});
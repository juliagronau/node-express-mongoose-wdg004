import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", usersRouter);

app.get("/", (req, res) =>
  res.send("<h1>Wir erstellen eine API mit mongoose</h1>")
);

app.listen(port, () => console.log(`Server running in port ${port}`));

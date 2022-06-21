import express from "express";
const app = express();
const port = 3000 || process.env.PORT;
import router from "./routes/lessons.js";

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});
app.use("/lessons", router);

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

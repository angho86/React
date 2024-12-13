import express from "express";
import mainRouter from "./routes/mainRouter.js";
const app = express();

app.use("/api", mainRouter);

app.listen(3000, () => {
	console.log("Development server has started, go to http://localhost/server/");
});

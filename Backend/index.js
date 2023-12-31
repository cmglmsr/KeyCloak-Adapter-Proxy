import dotenv from "dotenv";
import express from "express";
import root from "./Routes/root.js"
import authenticate from "./Routes/authenticate.js";

(async function() {
    dotenv.config();

    const {PORT} = process.env;
    const app = express();
    const server = app.listen(PORT, () => console.log(`[+] Backend server started on port ${PORT}`))

    app.use("/root", root)
})()
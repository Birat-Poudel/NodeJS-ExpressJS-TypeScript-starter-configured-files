import express from 'express';
const app = express();
const port = 9000;

app.get("/", (_req,res) => {
    res.send("Hello, World, I am back");
})

app.listen(port);
console.log(`[App]: http://localhost:${port}`);


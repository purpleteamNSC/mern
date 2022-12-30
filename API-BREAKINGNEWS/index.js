const express = require("express");
const userRoute = require("./src/routes/user.route");
const app = express();

const port = 3000

app.use("/user", userRoute);

app.listen(port, ()=> console.log(`\n Servidor rodando na porta ${port}`));
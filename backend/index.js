const cors = require("cors")
const express = require("express")
const app = express()

const port = 3000
const host = "localhost"

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes

const funcionarioController = require("./controller/funcionario.controller")
const fornecedorController = require("./controller/fornecedor.controller")

const authController = require("./controller/auth.controller")
const authMiddleware = require("./middleware/auth.middleware")

app.get("/", (req, res) => res.status(200).json({ message: "Servidor rodando" }))
app.post("/login", authController.login)
app.post("/funcionario", funcionarioController.cadastrar)

app.use(authMiddleware)

app.post("/fornecedor", fornecedorController.cadastrar)
app.get("/fornecedor/:id", fornecedorController.consultarId)
app.get("/fornecedor", fornecedorController.consultarNome)

// server

app.listen(port, host, () => {
	console.log(`Servidor rodando em http://${host}:${port}`)
})

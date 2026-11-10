const conn = require("./db/conn")

const Fornecedor = require("./model/Fornecedor")
const Funcionario = require("./model/Funcionario")
const Produto = require("./model/Produto")
const Movimento = require("./model/Movimento")

const syncDatabase = async () => {
	try {
		await conn.sync({ force: "true" })
	} catch (error) {
		console.error(error)
	} finally {
		await conn.close()
	}
}

syncDatabase()

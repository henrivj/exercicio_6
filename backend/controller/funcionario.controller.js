const CryptoJs = require("crypto-js")
const Funcionario = require("../model/Funcionario")

const cadastrar = async (req, res) => {
	const { nome, email, senha } = req.body
	try {
		const senhaCrypto = CryptoJs.AES.encrypt(senha, "segredo").toString()
		await Funcionario.create({ nome, email, senha: senhaCrypto })

		res.status(201).json({ message: "Funcionário cadastrado" })
	} catch (error) {
		res.status(500).json({ message: "Erro ao cadastrar funcionário" })
		console.error(error)
	}
}

module.exports = { cadastrar }

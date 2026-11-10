const CryptoJs = require("crypto-js")
const Fornecedor = require("../model/Fornecedor")
const { Op } = require("sequelize")

const cadastrar = async (req, res) => {
	let { nome, cpf, cnpj } = req.body
	try {
		if (!nome || (!cpf && !cnpj)) return res.status(400).json({ message: "Preencha todos os campos para cadastrar" })

		cpf = cpf ? CryptoJs.AES.encrypt(cpf, "segredo").toString() : ""
		cnpj = cnpj ? CryptoJs.AES.encrypt(cnpj, "segredo").toString() : ""

		await Fornecedor.create({ nome, cpf, cnpj })

		res.status(201).json({ message: "Fornecedor cadastrado" })
	} catch (error) {
		res.status(500).json({ message: "Erro ao cadastrar fornecedor" })
		console.error(error)
	}
}

const consultarId = async (req, res) => {
	const { id } = req.params
	try {
		const fornecedor = await Fornecedor.findByPk(id)

		if (!fornecedor) return res.status(404).json({ message: "Fornecedor inexistente" })

		fornecedor.cpf = CryptoJs.AES.decrypt(fornecedor.cpf, "segredo").toString(CryptoJs.enc.Utf8)
		fornecedor.cnpj = CryptoJs.AES.decrypt(fornecedor.cnpj, "segredo").toString(CryptoJs.enc.Utf8)

		res.status(200).json(fornecedor)
	} catch (error) {
		res.status(500).json({ message: "Erro ao consultar fornecedor" })
		console.error(error)
	}
}

const consultarNome = async (req, res) => {
	const { nome } = req.query
	try {
		const fornecedores = await Fornecedor.findAll({ where: { nome: { [Op.like]: `%${nome}%` } } })
		res.status(200).json(fornecedores)
	} catch (error) {
		res.status(500).json({ message: "Erro ao consultar fornecedor" })
		console.error(error)
	}
}

module.exports = { cadastrar, consultarId, consultarNome }

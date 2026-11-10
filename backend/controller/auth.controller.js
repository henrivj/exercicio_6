const CryptoJS = require("crypto-js")
const Funcionario = require("../model/Funcionario")

const login = async (req, res) => {
	const { email, senha } = req.body

	try {
		const funcionario = await Funcionario.findOne({ where: { email: email } })

		if (!funcionario) return res.status(401).json({ message: "Credenciais inválidas" })

		const senhaDescrypto = await CryptoJS.AES.decrypt(funcionario.senha, "segredo").toString(CryptoJS.enc.Utf8)

		if (senha !== senhaDescrypto) return res.status(401).json({ message: "Credenciais inválidas" })

		const duzentosEQuarentaMinutosEmMs = 240 * 60 * 1000
		const token = CryptoJS.AES.encrypt(
			JSON.stringify({
				idCliente: funcionario.idFuncionario,
				expiraEm: Date.now() + duzentosEQuarentaMinutosEmMs
			}),
			"segredo"
		).toString()
		return res.status(200).json({ token, nome: funcionario.nome })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "Erro ao logar" })
	}
}

module.exports = { login }

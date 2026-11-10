const CryptoJs = require("crypto-js")

const authMiddleware = (req, res, next) => {
	const token = req.headers["authorization"]

	try {
		if (!token) return res.status(401).json({ message: "Sessão Inválida" })

		const tokenDescrypto = CryptoJs.AES.decrypt(token, "segredo")

		if (tokenDescrypto.expiraEm < Date.now()) return res.status(401).json({ message: "Sessão Inválida" })

		next()
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "Erro ao autenticar" })
	}
}

module.exports = authMiddleware

const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Fornecedor = conn.define(
	"fornecedor",
	{
		idFornecedor: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			type: DataTypes.STRING
		},
		cpf: {
			type: DataTypes.STRING
		}
	},
	{
		timestamps: false,
		tableName: "fornecedores"
	}
)

module.exports = Fornecedor

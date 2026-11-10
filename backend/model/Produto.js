const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Produto = conn.define(
	"produto",
	{
		idProduto: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		idFornecedor: {
			type: DataTypes.INTEGER,
			references: {
				model: "fornecedores",
				key: "idFornecedor"
			},
			allowNull: false
		},
		descricao: {
			type: DataTypes.STRING,
			allowNull: false
		},
		categoria: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quantidade: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		codigoLote: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: false,
		tablename: "produtos"
	}
)

module.exports = Produto

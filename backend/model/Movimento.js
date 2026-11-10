const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Movimento = conn.define(
	"movimento",
	{
		idMovimento: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		idProduto: {
			type: DataTypes.INTEGER,
			references: {
				model: "produtos",
				key: "idProduto"
			},
			allowNull: false
		},
		tipo: {
			type: DataTypes.ENUM("entrada", "saida"),
			allowNull: false
		},
		quantidade: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		data: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		timestamps: false,
		tablename: "movimentos"
	}
)

module.exports = Movimento

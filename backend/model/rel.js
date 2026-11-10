const Movimento = require("./Movimento")
const Fornecedor = require("./Fornecedor")
const Produto = require("./Produto")

Produto.belongsTo(Fornecedor, {
	as: "fornecedorProduto",
	foreignKey: "idFornecedor",
	onDelete: "CASCADE"
})

Fornecedor.hasMany(Produto, {
	foreignKey: "idFornecedor",
	as: "produtoFornecedor"
})

Movimento.belongsTo(Produto, {
	foreignKey: "idProduto",
	as: "produtoMovimento",
	onDelete: "CASCADE"
})

Produto.hasMany(Movimento, {
	foreignKey: "idProduto",
	as: "produtoFornecedor"
})

const form = document.querySelector("form")
const res = document.getElementById("res")
const resTable = document.getElementById("resTable")

form.addEventListener("submit", async (event) => {
	resTable.innerHTML = res.innerText = ""
	event.preventDefault()

	const resposta = await fetch(`http://localhost:3000/fornecedor/${document.getElementById("inputId").value}`, {
		headers: { authorization: localStorage.getItem("token") || "" }
	})
	const dados = await resposta.json()

	if (resposta.ok) {
		resTable.innerHTML = `
            <td>${dados.idFornecedor}</td>
            <td>${dados.nome}</td>
            <td>${dados.cpf}</td>
            <td>${dados.cnpj}</td>`
	} else res.innerText = dados.message || "Erro ao consultar"
})

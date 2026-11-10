const form = document.querySelector("form")
const res = document.getElementById("res")

form.addEventListener("submit", async (event) => {
	event.preventDefault()

	const reqBody = {
		nome: document.getElementById("inputNome").value,
		cpf: document.getElementById("inputCpf").value,
		cnpj: document.getElementById("inputCnpj").value
	}

	const resposta = await fetch("http://localhost:3000/fornecedor", {
		method: "POST",
		headers: { "Content-Type": "application/json", authorization: localStorage.getItem("token") || "" },
		body: JSON.stringify(reqBody)
	})
	const dados = await resposta.json()

	if (resposta.ok) {
		res.innerText = dados.message || "Fornecedor cadastrado"
		setTimeout(() => (window.location = "../html/login.html"), 1500)
	} else res.innerText = dados.message || "Erro ao cadastrar"
})

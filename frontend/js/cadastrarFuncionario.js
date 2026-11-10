const form = document.querySelector("form")
const res = document.getElementById("res")

form.addEventListener("submit", async (event) => {
	event.preventDefault()

	const reqBody = {
		nome: document.getElementById("inputNome").value,
		email: document.getElementById("inputEmail").value,
		senha: document.getElementById("inputSenha").value
	}

	const resposta = await fetch("http://localhost:3000/funcionario", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(reqBody)
	})
	const dados = await resposta.json()

	if (resposta.ok) {
		res.innerText = dados.message || "Funcionário cadastrado"
		setTimeout(() => (window.location = "../html/login.html"), 1500)
	} else res.innerText = dados.message || "Erro ao cadastrar"
})

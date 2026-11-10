const form = document.querySelector("form")
const res = document.getElementById("res")

form.addEventListener("submit", async (event) => {
	event.preventDefault()

	const reqBody = {
		email: document.getElementById("inputEmail").value,
		senha: document.getElementById("inputSenha").value
	}

	const resposta = await fetch("http://localhost:3000/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(reqBody)
	})
	const dados = await resposta.json()

	if (resposta.ok) {
		res.innerText = dados.message || "Logado com sucesso"
		localStorage.setItem("token", dados.token)
		localStorage.setItem("nome", dados.nome)
		setTimeout(() => (window.location = "../index.html"), 1500)
	} else res.innerText = dados.message || "Erro logar"
})

document.getElementById("btnLogout").addEventListener("click", () => {
	localStorage.clear()
	window.location.reload()
})

const token = localStorage.getItem("token")
const nome = localStorage.getItem("nome")

if (!token) window.location.href = "./html/login.html"

document.getElementById("nomeUsuario").innerText = nome || "Funcionário"

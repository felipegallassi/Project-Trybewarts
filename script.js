window.onload = () => {
 formLogin()
}

function formLogin() {
  document.querySelector("#submitLogin").addEventListener("click", () => {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    
    if (email == "tryber@teste.com" && senha == "123456") {
      alert("Olá, Tryber!")
    }
    else {
      alert("Email ou senha inválidos.")
    }
  })
}
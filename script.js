function formLogin() {
  document.querySelector('#submitLogin').addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    if (email === 'tryber@teste.com' && senha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
window.onload = () => {
  formLogin();
  agreement();
};

// Requisito 18 \/
function agreement() {
  const checkbox = document.querySelector('#agreement');
  const btn = document.querySelector('#submit-btn');

  btn.addEventListener('click', (element) => {
    element.preventDefault();
  });
} const btnEnviar = document.querySelector('#submit-btn');

const checkbox = document.querySelector('#agreement');
checkbox.addEventListener('change', enviar);

function enviar(e) {
  if (e.target.checked === true) {
    btnEnviar.removeAttribute('disabled');
  } else {
    btnEnviar.setAttribute('disabled', 'disabled');
  }
  console.log(e.target.checked);
}

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

function agreement() {
  const checkbox = document.querySelector('#agreement');
  const btn = document.querySelector('#submit-btn');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      btn.removeAttribute('disabled');
    }
  });
}

function counter() {
  const input = document.querySelector('#textarea');
  const paragraph = document.querySelector('#counter');
  const num = parseInt(document.querySelector('#counter').innerHTML, 10);

  input.addEventListener('keyup', (pressedKey) => {
    if (pressedKey.keyCode === 8) {
      paragraph.innerHTML = num - input.value.length + 0;
    } else if (pressedKey.keyCode !== 8) {
      paragraph.innerHTML = num - input.value.length;
    }
  });
}

window.onload = () => {
  formLogin();
  counter();
  agreement();
};

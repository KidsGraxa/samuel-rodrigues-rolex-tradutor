/*JavaScript utlizado no trabalho "Relógios de Pulso*/

// Função para definir a fonte do vídeo com base no tamanho da tela
function setVideoSource () {
  const video = document.getElementById('backgroundVideo')
  const videoSource = document.getElementById('videoSource')

  if (window.innerWidth < 768) {
    // Se a largura da tela for menor que 768 pixels, use um vídeo menor
    videoSource.src = 'img/vbg2.webm'
  } else {
    // Caso contrário, use o vídeo padrão
    videoSource.src = 'img/vbg1.webm'
  }

  // Recarregue o vídeo para aplicar a nova fonte
  video.load()
}
// Chame a função quando a página carregar e quando a janela for redimensionada
window.addEventListener('load', setVideoSource)
window.addEventListener('resize', setVideoSource)

//Botão de Menu Animado
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', () => nav.classList.toggle('active'))

// Transição de Texto 1 - Aparecer

document.addEventListener('DOMContentLoaded', () => {
  const fadeText = document.querySelectorAll('.tt')

  function handleScroll () {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY

    // Ajuste este valor de acordo com a posição em que deseja que a transição comece
    const startTransitionPosition = windowHeight / 2

    // Ajuste este valor para controlar a opacidade máxima
    const maxOpacity = 1

    fadeText.forEach(element => {
      // Calcula a nova opacidade com base na posição de rolagem
      const newOpacity =
        Math.min(
          1,
          (scrollPosition - startTransitionPosition) / (windowHeight / 2)
        ) * maxOpacity

      // Define a opacidade do elemento
      element.style.opacity = newOpacity
    })
  }

  window.addEventListener('scroll', handleScroll)
})

// Transição de Texto 2 - Aparecer

document.addEventListener('DOMContentLoaded', () => {
  const fadeText = document.querySelectorAll('.tt')

  function handleScroll () {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY

    const startTransitionPosition = windowHeight / 3

    const maxOpacity = 1

    fadeText.forEach(element => {
      const newOpacity =
        Math.min(
          1,
          (scrollPosition - startTransitionPosition) / (windowHeight / 2)
        ) * maxOpacity

      element.style.opacity = newOpacity
    })
  }

  window.addEventListener('scroll', handleScroll)
})

//Transição de Texto - Desaparecer

document.addEventListener('DOMContentLoaded', () => {
  const fadeText = document.querySelectorAll('.tt1')
  let lastScrollPosition = 0

  function handleScroll () {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY

    fadeText.forEach(element => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight && elementTop + element.clientHeight > 0) {
        // O elemento está visível na janela
        const opacity =
          1 - Math.abs(scrollPosition - lastScrollPosition) / windowHeight
        element.style.opacity = opacity
      } else {
        // O elemento não está visível
        element.style.opacity = 1
      }
    })

    lastScrollPosition = scrollPosition
  }

  window.addEventListener('scroll', handleScroll)
})


// Validação form
const formulario = document.getElementById('formulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const celularInput = document.getElementById('celular');
const mensagemErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validarNome(nomeInput.value)) {
    exibirErro('Nome inválido.');
    return;
  }

  if (!validarEmail(emailInput.value)) {
    exibirErro('Email inválido.');
    return;
  }

  if (!validarCelular(celularInput.value)) {
    exibirErro('Número de celular inválido.');
    return;
  }

  mensagemErro.textContent = 'Formulário enviado com sucesso!';
  mensagemErro.style.color = 'green';
});

// Adicione um manipulador de eventos para o botão de redefinição
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
  // Use o método reset() para redefinir o formulário
  formulario.reset();
  mensagemErro.textContent = ''; // Limpa qualquer mensagem de erro
});

function exibirErro(mensagem) {
  mensagemErro.textContent = mensagem;
  mensagemErro.style.color = 'red';
}

function validarNome(nome) {
  return nome.length > 0;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regexEmail.test(email);
}

function validarCelular(celular) {
  const regexCelular = /^\d{10,}$/;
  return regexCelular.test(celular);
}

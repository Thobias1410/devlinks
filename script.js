function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/Avatar-light.jpeg")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}

// O que faltou:
// mudar para o modo light clicando no botão
// mostrar outra mensagem de Alt para imagem avatar-light

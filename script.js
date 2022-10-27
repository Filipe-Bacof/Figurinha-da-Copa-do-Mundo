let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}

/*
Link para o Figma do projeto:
https://www.figma.com/file/JkHtHEYRJoEBOokDIWGg1F/NLW-Copa-Card-(Copy)?node-id=4%3A11
*/

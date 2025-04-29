function toogleParagraph(id, button) {
  const paragraph = document.getElementById(id);

  if ( paragraph.style.display === "none" || paragraph.style.display === "" ) {
    paragraph.style.display = "block";
    button.textContent = "Esconder Parágrafo com Spoiler";
  } else {
    paragraph.style.display = "none";
    button.textContent = "Mostrar Parágrafo com Spoiler";
  }
}

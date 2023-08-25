fetch("https://kea-alt-del.dk/t7/superheroes")
  .then((res) => res.json())
  .then(showSuperhero);

function showSuperhero(superhero) {
  superhero.forEach(showSuperhero);
}

function showSuperhero(superhero) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}

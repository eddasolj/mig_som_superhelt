fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showsuperheros);

function showsuperheros(alleMineSuperHelte) {
  alleMineSuperHelte.forEach(showsuperhero);
}

function showsuperhero(superhero) {
  console.log(superhero);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = superhero.alias;
  copy.querySelector("h3").textContent = superhero.realName;
  copy.querySelector("p.powers").textContent = superhero.powers;
  copy.querySelector("p.origin").textContent = superhero.origin;
  copy.querySelector("p.weakness").textContent = superhero.weaknesses;
  copy.querySelector("p.active").textContent = superhero.active;
  copy.querySelector("p.height").textContent = superhero.height;
  copy.querySelector("img").src = superhero.image;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}

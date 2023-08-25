fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showsuperhero);

function showSuperhero(superhero) {
  superhero.forEach(showsuperhero);
}

function showsuperhero(superhero) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = superhero.alians;
  copy.querySelector("h3").textContent = superhero.realName;
  copy.querySelector("p.powers").textContent = superhero.powers;
  copy.querySelector("p.origin").textContent = superhero.origin;
  copy.querySelector("p.weakness").textContent = superhero.weakness;
  copy.querySelector("p.active").textContent = superhero.active;
  copy.querySelector("p.heihgt").textContent = superhero.height;
  copy.querySelector("p.birthday").textContent = superhero.birthday;
  copy.querySelector("img").src = superhero.img;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}

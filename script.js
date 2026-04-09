let input = document.getElementById("input");
let btn = document.getElementById("btn");
let human = document.getElementById("human");
let velik = document.getElementById("velik");
let car = document.getElementById("car");
let plane = document.getElementById("plane");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  human.textContent = `Piyoda: ${input.value / 3.6} soat`;
  velik.textContent = `Velosiped: ${input.value / 20.1} soat`;
  car.textContent = `Mashina: ${input.value / 70} soat`;
  plane.textContent = `Samolyot: ${input.value / 800} soat`;
});

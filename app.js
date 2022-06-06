const output = document.querySelector(".output");
const container = document.querySelector(".container");
const game = { animation: null, inplay: false, x: 0, speed: 5 };

output.addEventListener("click", (e) => {
  if (!game.inplay) {
    game.animation = window.requestAnimationFrame(moveIt);
    game.inplay = true;
  } else {
    window.cancelAnimationFrame(game.animation);
    game.inplay = false;
  }
});

function moveIt() {
  const dimensions = container.getBoundingClientRect();
  game.x += game.speed;
  if (game.x > dimensions.width - 50 || game.x < 0) {
    game.speed *= -1;
  }
  output.style.left = game.x + "px";
  game.animation = window.requestAnimationFrame(moveIt);
}

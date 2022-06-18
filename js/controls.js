export default function Controls({
  buttonPlay,
  buttonPause,
  volumeCoffee,
  volumeRain,
  volumeForest,
  volumeFire,
}) {
  let isActive = false;
  const volumeCard = [volumeRain, volumeCoffee, volumeForest, volumeFire];

  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }
  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  function reset() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  function pausePlay(button, sound) {
    if (isActive) {
      isActive = false;
      sound.pause();
      button.classList.remove("selected");
    } else {
      isActive = true;
      button.classList.add("selected");
      sound.volume = 0.5;
      sound.play();

      volumeCard.forEach(function (item) {
        item.addEventListener("click", function () {
          sound.volume = this.value / 100;
        });
      });
    }
  }
  return {
    reset,
    play,
    pause,
    pausePlay,
    volumeCoffee,
    volumeRain,
    volumeForest,
    volumeFire,
  };
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide the loading screen when the page content is fully loaded
  const loadingScreen = document.querySelector(".loadingScreen");
  loadingScreen.style.display = "none";
});
const btn = document.querySelectorAll(".btn");
const k = document.querySelector(".k");
const d = document.querySelector(".d");
btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    /*Random number*/
    const minRange = 50;
    const maxRange = 150;

    const randomNumber = Math.random();
    const interval = Math.floor(randomNumber * ((maxRange - minRange) / 20));

    const randomValue = minRange + interval * 20;
    console.log(randomValue);

    /*======================*/
    const style = e.currentTarget.classList;
    if (style.contains("k")) {
      alert("Okayy! 😊👍");
    } else if (style.contains("d")) {
      console.log("d is pressed");
      if (randomValue >= 100) {
        d.style.transform = `translateY(${randomValue}px)`;
      } else {
        d.style.transform = `translateX(${randomValue}px)`;
      }
    } else {
      console.log("either k and d is not pressed");
    }
  });
});

import "../scss/style.scss";

const buttonBurger = document.querySelector(".button-burger");
const mobileOverlay = document.querySelector("#mobileOverlay");

buttonBurger.addEventListener("click", () => {
	mobileOverlay.showModal();
});
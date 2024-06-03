const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countButton = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const areAllFilled = () => {
	if (price.value !== "" && people.value !== "" && tip.value !== "1") {
		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
	}
};

countButton.addEventListener("click", areAllFilled);

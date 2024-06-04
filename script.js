const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countButton = document.querySelector(".count");
const clearButton = document.querySelector(".clear");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const areAllFilled = () => {
	if (price.value !== "" && people.value !== "" && tip.value !== "1") {
		error.style.visibility = "hidden";
		count();
	} else {
		error.style.visibility = "visible";
		costInfo.style.visibility = "hidden";
	}
};

const count = () => {
	const enteredPrice = +price.value;
	const enteredPeople = +people.value;
	const enteredTip = +tip.value;

	const sum = (enteredPrice + enteredPrice * enteredTip) / enteredPeople;
	costInfo.style.visibility = "visible";
	cost.textContent = sum.toFixed(2);
};

const clearAllFilled = () => {
	price.value = "";
	people.value = "";
	tip.value = "1";
	error.style.visibility = "hidden";
	costInfo.style.visibility = "hidden";
};

countButton.addEventListener("click", areAllFilled);
clearButton.addEventListener("click", clearAllFilled);

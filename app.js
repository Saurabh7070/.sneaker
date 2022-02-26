const sliderWrapper = document.querySelector(".slider__wrapper");

const menuitems = document.querySelectorAll(".menu__item");

const products = [
	{
		id: 1,
		title: "Air Force",
		price: "8000",
		colors: [
			{
				code: "black",
				img: "./images/air.png",
			},
			{
				code: "darkblue",
				img: "./images/air2.png",
			},
		],
	},
	{
		id: 2,
		title: "Air Jordan",
		price: "12,000",
		colors: [
			{
				code: "lightgray",
				img: "./images/jordan.png",
			},
			{
				code: "green",
				img: "./images/jordan2.png",
			},
		],
	},
	{
		id: 3,
		title: "Blazer",
		price: "8500",
		colors: [
			{
				code: "lightgray",
				img: "./images/blazer.png",
			},
			{
				code: "green",
				img: "./images/blazer2.png",
			},
		],
	},
	{
		id: 4,
		title: "Crater",
		price: "11,999",
		colors: [
			{
				code: "black",
				img: "./images/crater.png",
			},
			{
				code: "lightgray",
				img: "./images/crater2.png",
			},
		],
	},
	{
		id: 5,
		title: "Hippie",
		price: "18000",
		colors: [
			{
				code: "gray",
				img: "./images/hippie.png",
			},
			{
				code: "black",
				img: "./images/hippie2.png",
			},
		],
	},
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".product__img");
const currentProductTitle = document.querySelector(".product__title");
const currentProductPrice = document.querySelector(".product__price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productBuyButton = document.querySelector(".product__button");
const paymentWindow = document.querySelector(".payment");
const paymentCloseBtn = document.querySelector(".close");

menuitems.forEach((item, index) => {
	item.addEventListener("click", () => {
		// change the current slice
		sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

		//change the choosen product
		choosenProduct = products[index];

		// change texts of current product

		currentProductTitle.textContent = choosenProduct.title;
		currentProductPrice.textContent = choosenProduct.price + "/-";
		currentProductImg.src = choosenProduct.colors[0].img;

		//assignning colors
		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = choosenProduct.colors[index].code;
		});
	});
});

currentProductColors.forEach((color, index) => {
	color.addEventListener("click", () => {
		currentProductImg.src = choosenProduct.colors[index].img;
	});
});

currentProductSizes.forEach((size, index) => {
	size.addEventListener("click", () => {
		currentProductSizes.forEach((size) => {
			size.style.backgroundColor = "white";
			size.style.color = "black";
		});
		size.style.backgroundColor = "black";
		size.style.color = "white";
	});
});

productBuyButton.addEventListener("click", () => {
	paymentWindow.style.display = "flex";
});

paymentCloseBtn.addEventListener("click", () => {
	paymentWindow.style.display = "none";
});

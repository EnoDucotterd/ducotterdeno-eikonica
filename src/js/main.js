var filter = document.querySelector(".three-img");
var trigger = document.querySelector(".three-button");

var addClass = function () {
  filter.classList.add("is-active");
};

var removeClass = function () {
  filter.classList.remove("is-active");
};

trigger.addEventListener("mouseenter", addClass);
trigger.addEventListener("mouseleave", removeClass);

//------

var firstFilter = document.querySelector(".four-image-first");
var Firsttrigger = document.querySelector(".four-button-first");

var addfirstClass = function () {
  firstFilter.classList.add("is-grey");
};

var removefirstClass = function () {
  firstFilter.classList.remove("is-grey");
};

Firsttrigger.addEventListener("mouseenter", addfirstClass);
Firsttrigger.addEventListener("mouseleave", removefirstClass);

//----

var secondFilter = document.querySelector(".four-image-second");
var secondtrigger = document.querySelector(".four-button-second");

var addsecondClass = function () {
  secondFilter.classList.add("is-grey");
};

var removesecondClass = function () {
  secondFilter.classList.remove("is-grey");
};

secondtrigger.addEventListener("mouseenter", addsecondClass);
secondtrigger.addEventListener("mouseleave", removesecondClass);

//---

var thirdFilter = document.querySelector(".four-image-third");
var thirdtrigger = document.querySelector(".four-button-third");

var addthirdClass = function () {
  thirdFilter.classList.add("is-grey");
};

var removethirdClass = function () {
  thirdFilter.classList.remove("is-grey");
};

thirdtrigger.addEventListener("mouseenter", addthirdClass);
thirdtrigger.addEventListener("mouseleave", removethirdClass);

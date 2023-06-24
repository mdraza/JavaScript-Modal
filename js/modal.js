// MODAL:-
const openModalBtn = document.querySelectorAll(".ulogin");
const modal = document.querySelector(".custom-modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.forEach((btn) => btn.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

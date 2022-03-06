'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const showModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// Attach click events to all the show modal buttons
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

// Attach click events to close modal button
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

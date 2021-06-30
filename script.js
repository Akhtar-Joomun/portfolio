window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const main = document.querySelector('.main-container');
const menu = document.querySelector('#menu-dropdown');
const modal = document.querySelector('#modal-small');
const overlay = document.querySelector('#overlay');
const btn = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const link = document.querySelector('.btn-link');
const link2 = document.querySelector('.btn-link2');
const link3 = document.querySelector('.btn-link3');
const modalOpenBtn = document.querySelector('.projectBtn');
const modalCloseBtn = document.querySelector('#close-modal-btn');
/* const cardButton = document.querySelectorAll('.cardButton'); */

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

btn.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
link.addEventListener('click', closeMenu);
link2.addEventListener('click', closeMenu);
link3.addEventListener('click', closeMenu);

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
  main.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  main.classList.remove('active');
}

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

const allCards = [
  {
    id: 1,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    id: 2,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    id: 3,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    id: 4,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    id: 5,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },

  {
    id: 6,
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  },
];

function languages(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function workTemplate(work) {
  return `
    <li class="card">
    <ul class="info">
      <li>
        <h3>${work.title}</h3>
      </li>
      <li>
        <p>${work.paragraph}</p>
      </li>
    </ul>
    <ul class="cardTagGroup">
    ${languages(work.list)}
    </ul>
    <div class="bottomBtn">
      <button class="cardButton" type="button">
        See Project
      </button>
    </div>
  </li>
  `;
}

document.getElementById('myCards').innerHTML = `${allCards.map(workTemplate).join('')}`;
document.getElementById('myCardsDesk').innerHTML = `${allCards.map(workTemplate).join('')}`;
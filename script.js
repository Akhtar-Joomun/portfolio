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
let modalCloseBtn = document.querySelector('#close-modal-btn');
const modalTextM = document.querySelector('.modal-text-mobile');
const modalTextD = document.querySelector('.modal-text-desk');
const modalImg = document.querySelector('.modalm-img');
const modalTitle = document.querySelector('.modalm-title');
const modalTags = document.querySelector('.modal-tags');
const modalSource = document.getElementById('source');
const modalLive = document.getElementById('live');

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

const allCards = [
  {
    id: 0,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
  },

  {
    id: 1,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
  },

  {
    id: 2,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
  },

  {
    id: 3,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
  },

  {
    id: 4,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
  },

  {
    id: 5,
    img: 'images/details.png',
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
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
      <button class="cardButton" onclick=customModal(${work.id}) type="button">
        See Project
      </button>
    </div>
  </li>
  `;
}

document.getElementById('myCards').innerHTML = `${allCards.map(workTemplate).join('')}`;
document.getElementById('myCardsDesk').innerHTML = `${allCards.map(workTemplate).join('')}`;

function customModal(id) {
  const projects = allCards[id];
  modalTitle.textContent = projects.title;
  modalTextM.textContent = projects.paragraph;
  modalTextD.textContent = projects.paragraph;
  while (modalTags.hasChildNodes()) {
    modalTags.removeChild(modalTags.lastChild);
  }
  for (let i = 0; i < projects.list.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects.list[i];
    modalTags.appendChild(li);
  }
  modalCloseBtn = document.createElement('i');
  modalCloseBtn.classList.add('fas');
  modalCloseBtn.classList.add('fa-times');
  modalCloseBtn.classList.add('fa-lg');
  modalTitle.appendChild(modalCloseBtn);
  modalCloseBtn.addEventListener('click', closeModal);
  modalSource.href = projects.source;
  modalLive.href = projects.live;
  modalImg.style.backgroundImage = projects.img;
  openModal();
}

function principalModal() {
  customModal(0);
}

modalOpenBtn.addEventListener('click', principalModal);
modalCloseBtn.addEventListener('click', closeModal);

<button class="cardButton" onclick="customModal(` + work.id + `)" type="button"></button>
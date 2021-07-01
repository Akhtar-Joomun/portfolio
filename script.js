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
    title: 'Multi-Post Stories',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    list: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
    live: '#',
    source: '#',
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
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
    para: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
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
    para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
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
    para: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
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
    para: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.",
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
    para: "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
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
  modalTextD.textContent = projects.para;
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
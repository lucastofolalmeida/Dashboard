const capa = document.querySelector(".capa");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const progress = Math.min(scrollY / window.innerHeight, 1);

  const scale = 1 - progress * 0.3;
  const opacity = 1 - progress;
  const translateY = progress * -150;

  capa.style.transform = `
    scale(${scale})
    translateY(${translateY}px)
  `;

  capa.style.opacity = opacity;
});

const playersData = {

  aspas: {
    nome: "Aspas",
    role: "Duelista",
    roleIcon: "assets/duelista_icone.png",
    kd: "1.30",
    hs: "31%",
    acs: "276",
    imagem: "assets/aspas.png",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Raze", imagem: "assets/raze.webp" },
      { nome: "Neon", imagem: "assets/neon.webp" },
    ]
  },

  sacy: {
    nome: "Sacy",
    role: "Iniciador",
    roleIcon: "assets/iniciador_icone.webp",
    kd: "1.14",
    hs: "25%",
    acs: "194",
    imagem: "assets/sacy.png",
    agentes: [
      { nome: "Sova", imagem: "assets/sova.png" },
      { nome: "Fade", imagem: "assets/fade.webp" },
    ]
  },

  less: {
    nome: "Less",
    role: "Sentinela",
    roleIcon: "assets/sentinela_icone.webp",
    kd: "1.16",
    hs: "25%",
    acs: "219.9",
    imagem: "assets/less.png",
    agentes: [
      { nome: "Jett", imagem: "assets/killjoy.webp" },
      { nome: "Reyna", imagem: "assets/chamber.webp" },
      { nome: "Neon", imagem: "assets/cypher.webp" },
    ]
  },

  pancada: {
    nome: "Pancada",
    role: "Controlador",
    roleIcon: "assets/controlador_icone.png",
    kd: "1.02",
    hs: "19%",
    acs: "198",
    imagem: "assets/pancada.png",
    agentes: [
      { nome: "Killjoy", imagem: "assets/killjoy.webp" },
      { nome: "Chamber", imagem: "assets/chamber.webp" },
      { nome: "Cypher", imagem: "assets/cypher.webp" },
    ]
  },

  saadhak: {
    nome: "Saadhak",
    role: "Flex",
    roleIcon: "assets/Flex_icone.JPG",
    kd: "1.05",
    hs: "21%",
    acs: "214",
    imagem: "assets/sad.png",
    agentes: [
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Astra", imagem: "assets/astra.webp" },
      { nome: "Omen", imagem: "assets/omen.webp" },
    ]
  }

};

const modalOverlay = document.getElementById('player-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalRoleImg = document.getElementById('modal-role-img');
const modalRoleText = document.getElementById('modal-role-text');
const modalKd = document.getElementById('modal-kd');
const modalHs = document.getElementById('modal-hs');
const modalAcs = document.getElementById('modal-acs');
const modalAgentsList = document.getElementById('modal-agents-list');

function openModal(playerKey) {
  const data = playersData[playerKey];

  if (!data) return;

  modalImg.src = data.imagem;
  modalImg.alt = data.nome;

  modalNome.textContent = data.nome;

  modalRoleImg.src = data.roleIcon || '';
  modalRoleImg.alt = data.role;

  modalRoleText.textContent = data.role;

  modalKd.textContent = data.kd;
  modalHs.textContent = data.hs;
  modalAcs.textContent = data.acs;

  modalAgentsList.innerHTML = '';

  data.agentes.forEach(agente => {

    const card = document.createElement('div');

    card.classList.add('agent-card');

    const img = document.createElement('img');

    img.src = agente.imagem;
    img.alt = agente.nome;

    const nome = document.createElement('span');

    nome.textContent = agente.nome;

    card.appendChild(img);
    card.appendChild(nome);

    modalAgentsList.appendChild(card);

  });

  modalOverlay.setAttribute('aria-hidden', 'false');

  modalOverlay.classList.add('modal-active');

  document.body.style.overflow = 'hidden';
}

function closeModal() {

  modalOverlay.classList.remove('modal-active');

  modalOverlay.setAttribute('aria-hidden', 'true');

  document.body.style.overflow = '';
}

document.querySelectorAll('.loud-jogador').forEach(card => {

  card.addEventListener('click', () => {

    const playerKey = card.dataset.player;

    openModal(playerKey);

  });

});

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {

  if (e.target === modalOverlay) {

    closeModal();

  }

});

document.addEventListener('keydown', (e) => {

  if (
    e.key === 'Escape' &&
    modalOverlay.classList.contains('modal-active')
  ) {
    closeModal();
  }

});
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
  // LOUD
  aspas: {
    nome: "Aspas",
    role: "Duelista",
    roleIcon: "assets/duelista_icone.png",
    kd: "1.05",
    hs: "24%",
    acs: "215.1",
    imagem: "assets/aspas.png",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Raze", imagem: "assets/raze.png" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
    ],
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
    ],
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
      { nome: "Killjoy", imagem: "assets/killjoy.webp" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
      { nome: "Cypher", imagem: "assets/cypher.png" },
    ],
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
      { nome: "Omen", imagem: "assets/omen.png" },
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Astra", imagem: "assets/astra.png" },
    ],
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
      { nome: "KAY/O", imagem: "assets/KAYO.webp" },
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Skye", imagem: "assets/skye.png" },
    ],
  },

  //OPTIC

  yay: {
    nome: "yay",
    role: "Duelista",
    roleIcon: "assets/duelista_icone.png",
    kd: "1.50",
    hs: "26%",
    acs: "254.6",
    imagem: "assets/yay.webp",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
    ],
  },

  crashies: {
    nome: "crashies",
    role: "Iniciador",
    roleIcon: "assets/iniciador_icone.webp",
    kd: "1.04",
    hs: "26%",
    acs: "195.4",
    imagem: "assets/crashies.webp",
    agentes: [
      { nome: "Sova", imagem: "assets/sova.png" },
      { nome: "Skye", imagem: "assets/skye.png" },
      { nome: "Kayo", imagem: "assets/KAYO.webp" },
    ],
  },

  victor: {
    nome: "Victor",
    role: "Duelista",
    roleIcon: "assets/duelista_icone.png",
    kd: "0.99",
    hs: "25%",
    acs: "203.0",
    imagem: "assets/victor.webp",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Raze", imagem: "assets/raze.png" },
      { nome: "Neon", imagem: "assets/neon.png" },
    ],
  },

  marved: {
    nome: "Marved",
    role: "Flex",
    roleIcon: "assets/flex_icone.png",
    kd: "0.94",
    hs: "29%",
    acs: "188.5",
    imagem: "assets/marverd.webp",
    agentes: [
      { nome: "kayo", imagem: "assets/KAYO.webp" },
      { nome: "Brimstone", imagem: "assets/brimstone.png" },
      { nome: "Astra", imagem: "assets/astra.png" },
    ],
  },

  finesse: {
    nome: "Finesse",
    role: "Flex",
    roleIcon: "assets/flex_icone.png",
    kd: "0.79",
    hs: "21%",
    acs: "188.5",
    imagem: "assets/finesse.webp",
    agentes: [
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Breach", imagem: "assets/breach.png" },
      { nome: "Fade", imagem: "assets/fade.webp" },
    ],
  },

  //FNATIC
    derke: {
    nome: "Derke",
    role: "Duelista",
    roleIcon: "assets/duelista_icone.png",
    kd: "1.39",
    hs: "34%",
    acs: "247.9",
    imagem: "assets/derke.webp",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
    ],
  },

    mistic: {
    nome: "Mistic",
    role: "Flex",
    roleIcon: "assets/flex_icone.JPG",
    kd: "1.08",
    hs: "27%",
    acs: "199.5",
    imagem: "assets/mistic.webp",
    agentes: [
      { nome: "Skye", imagem: "assets/skye.png" },
      { nome: "Breach", imagem: "assets/breach.png" },
      { nome: "Sage", imagem: "assets/sage.png" },
    ],
  },

      enzo: {
    nome: "Enzo",
    role: "Flex",
    roleIcon: "assets/Flex_icone.JPG",
    kd: "0,90",
    hs: "22%",
    acs: "159.1",
    imagem: "assets/enzo  .webp",
    agentes: [
      { nome: "Fade", imagem: "assets/fade.webp" },
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Sova", imagem: "assets/sova.png" },
    ],
  },

    boaster: {
    nome: "Boaster",
    role: "Flex",
    roleIcon: "assets/flex_icone.JPG",
    kd: "0.88",
    hs: "20%",
    acs: "182.2",
    imagem: "assets/boaster.webp",
    agentes: [
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Breach", imagem: "assets/breach.png" },
       { nome: "Astra", imagem: "assets/astra.png" },
    ],
  },

    alfajer: {
    nome: "Alfajer",
    role: "Flex",
    roleIcon: "assets/flex_icone.JPG",
    kd: "1.17",
    hs: "25%",
    acs: "242.5",
    imagem: "assets/alfajer.webp",
    agentes: [
      { nome: "Killjoy", imagem: "assets/killjoy.webp" },
      { nome: "Raze", imagem: "assets/raze.png" },
      { nome: "Neon", imagem: "assets/neon.png" },
    ],
  },
  //LEVIATAN
    meiser: {
    nome: "Meiser",
    role: "controlador",
    roleIcon: "assets/flex_controlador.png",
    kd: "1,10",
    hs: "26%",
    acs: "190,0",
    imagem: "assets/meiser.webp",
    agentes: [
      { nome: "omen", imagem: "assets/omen.webp" },
      { nome: "Brimstone", imagem: "assets/brimstone.png" },
      { nome: "Astra", imagem: "assets/astra.png" },
    ],
  },

      tacolina: {
    nome: "tacolina",
    role: "flex",
    roleIcon: "assets/flex.png",
    kd: "0,98",
    hs: "25%",
    acs: "195,0",
    imagem: "assets/tacolina.webp",
    agentes: [
      { nome: "Chamber", imagem: "assets/chamber.webp" },
      { nome: "Skye", imagem: "assets/skye.png" },
    ],
  },

     shyy: {
    nome: "Shyy",
    role: "iniciador",
    roleIcon: "assets/iniciador_icone.JPG",
    kd: "0,94",
    hs: "25%",
    acs: "179.7",
    imagem: "assets/shyy.webp",
    agentes: [
      { nome: "Fade", imagem: "assets/fade.webp" },
      { nome: "Kayo", imagem: "assets/KAYO.webp" },
    ],
  },
  //KIWOOM
  //XSET
  //LIQUID
  //PHOENIX
  zyppan: {
    nome: "Zyppan",
    role: "Flex",
    roleIcon: "assets/flex_icone.png",
    kd: "1.06",
    hs: "27%",
    acs: "232.1",
    imagem: "assets/aspas.png",
    agentes: [
      { nome: "Jett", imagem: "assets/jett.webp" },
      { nome: "Raze", imagem: "assets/raze.png" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
    ],
  },

  ardiis: {
    nome: "ardiis",
    role: "Flex",
    roleIcon: "assets/flex_icone.webp",
    kd: "1.09",
    hs: "21%",
    acs: "234.5",
    imagem: "assets/sacy.png",
    agentes: [
      { nome: "Sova", imagem: "assets/sova.png" },
      { nome: "Fade", imagem: "assets/fade.webp" },
    ],
  },

  ange1: {
    nome: "ANGE1",
    role: "Controlador",
    roleIcon: "assets/controlador_icone.webp",
    kd: "0.68",
    hs: "31%",
    acs: "159.6",
    imagem: "assets/less.png",
    agentes: [
      { nome: "Killjoy", imagem: "assets/killjoy.webp" },
      { nome: "Chamber", imagem: "assets/chamber.png" },
      { nome: "Cypher", imagem: "assets/cypher.png" },
    ],
  },

  shao: {
    nome: "Shao",
    role: "Flex",
    roleIcon: "assets/flex_icone.png",
    kd: "1.12",
    hs: "30%",
    acs: "194.5",
    imagem: "assets/pancada.png",
    agentes: [
      { nome: "Omen", imagem: "assets/omen.png" },
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Astra", imagem: "assets/astra.png" },
    ],
  },

  suygetsu: {
    nome: "SUYGETSU",
    role: "Sentinela",
    roleIcon: "assets/sentinela_icone.JPG",
    kd: "1.15",
    hs: "36%",
    acs: "209.9",
    imagem: "assets/sad.png",
    agentes: [
      { nome: "KAY/O", imagem: "assets/KAYO.webp" },
      { nome: "Viper", imagem: "assets/viper.webp" },
      { nome: "Skye", imagem: "assets/skye.png" },
    ],
  },
};

const modalOverlay = document.getElementById("player-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImg = document.getElementById("modal-img");
const modalNome = document.getElementById("modal-nome");
const modalRoleImg = document.getElementById("modal-role-img");
const modalRoleText = document.getElementById("modal-role-text");
const modalKd = document.getElementById("modal-kd");
const modalHs = document.getElementById("modal-hs");
const modalAcs = document.getElementById("modal-acs");
const modalAgentsList = document.getElementById("modal-agents-list");

function openModal(playerKey) {
  const data = playersData[playerKey];

  if (!data) return;

  modalImg.src = data.imagem;
  modalImg.alt = data.nome;

  modalNome.textContent = data.nome;

  modalRoleImg.src = data.roleIcon || "";
  modalRoleImg.alt = data.role;

  modalRoleText.textContent = data.role;

  modalKd.textContent = data.kd;
  modalHs.textContent = data.hs;
  modalAcs.textContent = data.acs;

  modalAgentsList.innerHTML = "";

  data.agentes.forEach((agente) => {
    const card = document.createElement("div");

    card.classList.add("agent-card");

    const img = document.createElement("img");

    img.src = agente.imagem;
    img.alt = agente.nome;

    const nome = document.createElement("span");

    nome.textContent = agente.nome;

    card.appendChild(img);
    card.appendChild(nome);

    modalAgentsList.appendChild(card);
  });

  modalOverlay.setAttribute("aria-hidden", "false");

  modalOverlay.classList.add("modal-active");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("modal-active");

  modalOverlay.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

document.querySelectorAll(".loud-jogador").forEach((card) => {
  card.addEventListener("click", () => {
    const playerKey = card.dataset.player;

    openModal(playerKey);
  });
});

modalCloseBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("modal-active")) {
    closeModal();
  }
});


const championBtn = document.getElementById("championBtn");
const mvpCard = document.getElementById("mvpCard");

championBtn.addEventListener("click", () => {

  if (mvpCard.style.display === "block") {
    mvpCard.style.display = "none";
    championBtn.innerText = "Ver MVP da Final";
  } else {
    mvpCard.style.display = "block";
    championBtn.innerText = "Ocultar MVP";
  }

});

window.onload = function() {
    window.scrollTo(0, 0);
};

function refreshPage() {
    window.location.reload();
}

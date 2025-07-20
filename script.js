// Reaplica a animação quando os elementos entram na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
/* ---------- 1. Dados dos projetos ---------- */

const projetos = [
  {
    titulo: "E-commerce Clothing",
    descricao: "Loja virtual de roupas com sistema de carrinho, wishlist e perfil do usuário.",
    tecnologias: ['Flutter'],
    imagens: [
      "assets/projects/projeto_ecommerce_clothing/home_page.png",
      "assets/projects/projeto_ecommerce_clothing/profilepage.png",
      "assets/projects/projeto_ecommerce_clothing/wishlistpage.png"
    ],
    link: "https://seuecommerce.com"
  },
  {
    titulo: "Hera CRM",
    descricao: "Plataforma para gestão de clientes e empresas, com painéis de relatórios.",
    tecnologias: ['Angular', 'Python'],
    imagens: [
      "assets/projects/projeto_hera/hera_login.png",
      "assets/projects/projeto_hera/hera_company_list.png",
      "assets/projects/projeto_hera/hera_see_users.png",
      "assets/projects/projeto_hera/hera_profile_page.png"
    ],
    link: "https://github.com/seuusuario/hera-crm"
  },
  {
    titulo: "IP Address Tracker",
    descricao: "Busca de IP com visualização em mapa responsivo (desktop & mobile).",
    tecnologias: ['Angular'],
    imagens: [
      "assets/projects/projeto_ip_address/ip_address_desktop.png",
      "assets/projects/projeto_ip_address/ip_address_mobile.png"
    ],
    link: "https://iptracker.vercel.app"
  },
  {
    titulo: "SunnySide Landing Page",
    descricao: "Landing page criativa para agência de branding.",
    tecnologias: ['JavaScript', 'CSS', 'HTML'],
    imagens: [
      "assets/projects/projeto_sunnyside_landingpage/sunny1.png",
      "assets/projects/projeto_sunnyside_landingpage/sunny2.png",
      "assets/projects/projeto_sunnyside_landingpage/sunny3.png"
    ],
    link: "https://sunnyside-landingpage.netlify.app"
  }
];

const cardsContainer = document.getElementById("cards");
projetos.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "card glass";
  card.innerHTML = `
    <img src="${p.imagens[0]}" alt="${p.titulo}">
    <h3>${p.titulo}</h3>
    <p>${p.descricao.split(".")[0]}.</p>
  `;
  card.onclick = () => abrirModal(i);
  cardsContainer.appendChild(card);
});

let indiceAtual = 0;

function abrirModal(i) {
  indiceAtual = i;
  const projeto = projetos[i];

  console.log(projeto.tecnologias); 

  // Preencher modal
  document.getElementById("modal-title").textContent = projeto.titulo;
  document.getElementById("modal-description").textContent = projeto.descricao;
  document.getElementById("modal-link").textContent = projeto.linkLabel || "Ver projeto";
  document.getElementById("modal-link").href = projeto.link;

  // Preencher imagens
  const modalImages = document.getElementById("modal-images");
  modalImages.innerHTML = "";
  
  projeto.imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.onload = () => {
      // Cria regra de hover programaticamente
      img.addEventListener("mouseenter", () => {
        img.style.transition = "transform 0.3s ease";
        img.style.transform = img.naturalHeight > img.naturalWidth ? "scale(3)" : "scale(5)";
      });

      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    };

    modalImages.appendChild(img);
  });

  const techContainer = document.getElementById("modal-tecnologias");
  techContainer.innerHTML = "";
  projeto.tecnologias.forEach(tec => {
    const chip = document.createElement("span");
    chip.textContent = tec;
    techContainer.appendChild(chip);
  });

  // Mostrar modal
  document.getElementById("modal").classList.remove("hidden");
}


function preencherModal(projeto) {
  document.getElementById("modal-title").textContent = projeto.titulo;
  document.getElementById("modal-description").textContent = projeto.descricao;

  const imgs = document.getElementById("modal-images");
  imgs.innerHTML = "";
  projeto.imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    imgs.appendChild(img);
  });

  document.getElementById("modal-link").href = projeto.link;
}

function fecharModal() {
  document.getElementById("modal").classList.add("hidden");
}

function proximoProjeto() {
  indiceAtual = (indiceAtual + 1) % projetos.length;
  preencherModal(projetos[indiceAtual]);
}

function fecharModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Fecha o modal ao clicar fora do conteúdo
document.getElementById("modal").addEventListener("click", function (event) {
  const modalContent = document.getElementById("modal-content");
  if (!modalContent.contains(event.target)) {
    fecharModal();
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});


/* 

const projetos = [
  {
    titulo: "E-commerce Clothing",
    descricao: "Loja virtual de roupas com sistema de carrinho, wishlist e perfil do usuário.",
    imagens: [
      "assets/projetos/projeto_ecommerce_clothing/home_page.png",
      "assets/projetos/projeto_ecommerce_clothing/profilepage.png",
      "assets/projetos/projeto_ecommerce_clothing/wishlistpage.png"
    ],
    link: "https://seuecommerce.com"
  },
  {
    titulo: "Hera CRM",
    descricao: "Plataforma para gestão de clientes e empresas, com painéis de relatórios.",
    imagens: [
      "assets/projetos/projeto_hera/hera_company_list.png",
      "assets/projetos/projeto_hera/hera_login.png",
      "assets/projetos/projeto_hera/hera_profile_page.png",
      "assets/projetos/projeto_hera/hera_see_users.png"
    ],
    link: "https://github.com/seuusuario/hera-crm"
  },
  {
    titulo: "IP Address Tracker",
    descricao: "Busca de IP com visualização em mapa responsivo (desktop & mobile).",
    imagens: [
      "assets/projetos/projeto_ip_address/ip_address_desktop.png",
      "assets/projetos/projeto_ip_address/ip_address_mobile.png"
    ],
    link: "https://iptracker.vercel.app"
  },
  {
    titulo: "SunnySide Landing Page",
    descricao: "Landing page criativa para agência de branding.",
    imagens: [
      "assets/projetos/projeto_sunnyside_landingpage/sunny1.png",
      "assets/projetos/projeto_sunnyside_landingpage/sunny2.png",
      "assets/projetos/projeto_sunnyside_landingpage/sunny3.png"
    ],
    link: "https://sunnyside-landingpage.netlify.app"
  }
];

function abrirModal(index) {
  const projeto = projetos[index];
  document.getElementById('modal-title').textContent = projeto.titulo;
  document.getElementById('modal-description').textContent = projeto.descricao;

  const container = document.getElementById('modal-images');
  container.innerHTML = '';
  projeto.imagens.forEach(img => {
    const image = document.createElement('img');
    image.src = img;
    container.appendChild(image);
  });

  const link = document.getElementById('modal-link');
  link.href = projeto.link;

  document.getElementById('modal').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal').classList.add('hidden');
}*/

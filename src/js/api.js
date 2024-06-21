import axios from "axios";

const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroContainer: document.querySelector('.js-hero-container'),
};

refs.formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = e.target.elements.query.value.trim(); // Добавлено trim() для удаления пробелов
  if (!value) {
    console.error("Please enter a search term");
    return;
  }

  const hero = await getHero(value);
  if (hero) {
    refs.heroContainer.innerHTML = heroTemplate(hero);
  }
});

async function getHero(hero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;
  const headers = {
    'x-rapidapi-key': 'abee44a7a8msh90b08298bfd61a9p194735jsn389487ef7d06',
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
  };
  const params = new URLSearchParams({ hero });

  try {
    const response = await axios.request({ url, params, headers });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `
    <div class="hero-card card">
      <div class="image-container">
        <img src="${images.lg}" alt="${name}" class="hero-image" />
      </div>
      <div class="hero-body">
        <h4 class="hero-name">${name}</h4>
        <div class="hero-powerstats">
          <p class="hero-bio">Full Name - ${biography.fullName}</p>
          <p class="hero-bio">Publisher - ${biography.publisher}</p>
          <p class="hero-bio">Alignment - ${biography.alignment}</p>
          <p class="hero-bio">Gender - ${appearance.gender}</p>
          <p class="hero-bio">Race - ${appearance.race}</p>
        </div>
        <div class="hero-powerstats">
          <span>Power: ${powerstats.power}</span>
          <span>Strength: ${powerstats.strength}</span>
          <span>Speed: ${powerstats.speed}</span>
          <span>Combat: ${powerstats.combat}</span>
        </div>
      </div>
    </div>`;
}

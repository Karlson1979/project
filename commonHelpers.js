import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p}from"./assets/vendor-bdb8a163.js";const i={formEl:document.querySelector(".js-hero-form"),heroContainer:document.querySelector(".js-hero-container")};i.formEl.addEventListener("submit",async r=>{r.preventDefault();const a=r.target.elements.query.value.trim();if(!a){console.error("Please enter a search term");return}const e=await c(a);e&&(i.heroContainer.innerHTML=h(e))});async function c(r){const t="https://superhero-search.p.rapidapi.com"+"/api/",o={"x-rapidapi-key":"abee44a7a8msh90b08298bfd61a9p194735jsn389487ef7d06","x-rapidapi-host":"superhero-search.p.rapidapi.com"},s=new URLSearchParams({hero:r});try{return(await p.request({url:t,params:s,headers:o})).data}catch(n){console.error(n)}}function h(r){const{appearance:a,biography:e,images:t,name:o,powerstats:s}=r;return`
    <div class="hero-card card">
      <div class="image-container">
        <img src="${t.lg}" alt="${o}" class="hero-image" />
      </div>
      <div class="hero-body">
        <h4 class="hero-name">${o}</h4>
        <div class="hero-powerstats">
          <p class="hero-bio">Full Name - ${e.fullName}</p>
          <p class="hero-bio">Publisher - ${e.publisher}</p>
          <p class="hero-bio">Alignment - ${e.alignment}</p>
          <p class="hero-bio">Gender - ${a.gender}</p>
          <p class="hero-bio">Race - ${a.race}</p>
        </div>
        <div class="hero-powerstats">
          <span>Power: ${s.power}</span>
          <span>Strength: ${s.strength}</span>
          <span>Speed: ${s.speed}</span>
          <span>Combat: ${s.combat}</span>
        </div>
      </div>
    </div>`}
//# sourceMappingURL=commonHelpers.js.map

import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as f}from"./assets/vendor-bdb8a163.js";const p={formEl:document.querySelector(".js-location-form"),cardEl:document.querySelector(".js-ip-form")};p.formEl.addEventListener("submit",async s=>{s.preventDefault();const a=s.target.elements.userip.value,n=await m(a);u(n)});async function m(s){const i="https://ip-geolocation-ipwhois-io.p.rapidapi.com"+"/json/",o=new URLSearchParams({ip:s}),l={"x-rapidapi-key":"9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4","x-rapidapi-host":"ip-geolocation-ipwhois-io.p.rapidapi.com"};try{return(await f.get(i,{params:o,headers:l})).data}catch(e){console.log(e)}}function u({country:s,ip:a,city:n,country_flag:i,currency:o,timezone:l,completed_requests:e,currency_rates:c,latitude:t,longitude:r}){const d=`
    <div class="info-item">
      <img
        class="flag"
        src="${i}"
        alt="Flag of country"
      />
      <span class="info-label">Country:</span>
      <span class="info-value">${s}</span>
    </div>
    <div class="info-item">
      <span class="info-label">IP Address: </span>
      <span class="info-value">${a}</span>
    </div>
    <div class="info-item">
      <span class="info-label">City: </span> <span class="info-value">${n}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Timezone: </span>
      <span class="info-value">${l}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Currency:</span>
      <span class="info-value">${o}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Currency Rate:</span>
      <span class="info-value">${c}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Completed Requests:</span>
      <span class="info-value">${e}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Google Maps:</span>
      <a href="https://www.google.com.ua/maps/@${t},${r},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
    </div>
  `;p.cardEl.innerHTML=d}
//# sourceMappingURL=commonHelpers3.js.map

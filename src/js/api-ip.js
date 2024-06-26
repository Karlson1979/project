import axios from 'axios';
const refs = {
  formEl: document.querySelector('.js-location-form'),
  cardEl: document.querySelector('.js-ip-form'),
};

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const ip = e.target.elements.userip.value;
  const data = await getIp(ip);
  renderIp(data);

});

async function getIp(userIp) {
  const baseUrl = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const endUrl = '/json/';
  const url = baseUrl+ endUrl;
  const params = new URLSearchParams({
    ip: userIp,

  });
  const headers = {
    'x-rapidapi-key':'9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
  };
  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function renderIp({
  country,
  ip,
  city,
  country_flag,
  currency,
  timezone,
  completed_requests,
  currency_rates,
  latitude,
  longitude,
}) {
  const markup = `
    <div class="info-item">
      <img
        class="flag"
        src="${country_flag}"
        alt="Flag of country"
      />
      <span class="info-label">Country:</span>
      <span class="info-value">${country}</span>
    </div>
    <div class="info-item">
      <span class="info-label">IP Address: </span>
      <span class="info-value">${ip}</span>
    </div>
    <div class="info-item">
      <span class="info-label">City: </span> <span class="info-value">${city}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Timezone: </span>
      <span class="info-value">${timezone}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Currency:</span>
      <span class="info-value">${currency}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Currency Rate:</span>
      <span class="info-value">${currency_rates}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Completed Requests:</span>
      <span class="info-value">${completed_requests}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Google Maps:</span>
      <a href="https://www.google.com.ua/maps/@${latitude},${longitude},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
    </div>
  `;

  refs.cardEl.innerHTML = markup;
}

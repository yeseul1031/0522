const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeatherAll() {
  
  return Promise.all([
    fetch(newsURL).then((res) => res.json()),
    fetch(weatherURL).then((res) => res.json())
  ])
  .then(([news, weather]) => {
    return { news, weather };
  });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  };
}


const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  return fetch(newsURL)
    .then((newsResponse) => newsResponse.json())
    .then((newsData) => {
      return fetch(weatherURL)
        .then((weatherResponse) => weatherResponse.json())
        .then((weatherData) => {
          return {
            news: newsData,
            weather: weatherData
          };
        });
    });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  };
}

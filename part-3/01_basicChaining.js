const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  return fetch(newsURL)
    .then(newsResponse => {
      if (!newsResponse.ok) throw new Error('뉴스 데이터 가져오기 실패');
      return newsResponse.json();
    })
    .then(newsData => {
      return fetch(weatherURL)
        .then(weatherResponse => {
          if (!weatherResponse.ok) throw new Error('날씨 데이터 가져오기 실패');
          return weatherResponse.json();
        })
        .then(weatherData => {
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

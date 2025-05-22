const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeatherAll() {
  return Promise.all([
    fetch(newsURL).then(res => {
      if (!res.ok) throw new Error('뉴스 데이터 가져오기 실패');
      return res.json();
    }),
    fetch(weatherURL).then(res => {
      if (!res.ok) throw new Error('날씨 데이터 가져오기 실패');
      return res.json();
    })
  ])
  .then(([newsData, weatherData]) => {
    return {
      news: newsData,
      weather: weatherData
    };
  });
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  };
}

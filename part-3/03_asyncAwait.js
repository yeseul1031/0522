const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

async function getNewsAndWeatherAsync() {
  try {
    const newsResponse = await fetch(newsURL);
    if (!newsResponse.ok) throw new Error('뉴스 데이터 가져오기 실패');
    const newsData = await newsResponse.json();

    const weatherResponse = await fetch(weatherURL);
    if (!weatherResponse.ok) throw new Error('날씨 데이터 가져오기 실패');
    const weatherData = await weatherResponse.json();

    return {
      news: newsData,
      weather: weatherData
    };
  } catch (error) {
    throw error;
  }
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  };
}

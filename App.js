import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationInput from './Components/LocationInput';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
// Import the API key from the separate file
import { OPEN_WEATHER_MAP_API_KEY } from './config';

export default function App() {

  const APIKEY = OPEN_WEATHER_MAP_API_KEY;
  const [cityName, setCityName] = useState('Tampere');
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    handleFetchWeather();
  });

  const handleInputChange = (text) => {
    setCityName(text);
  }

  const handleFetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`);
      const json = await response.json();
      const weatherData = {
        main: json.weather[0].main,
        temperature: json.main.temp,
        windSpeed: json.wind.speed,
      };
      // Pass the weatherData to MainPage component
      setWeatherData(weatherData);
    } catch (error) {
      //console.error('Error fetching weather data:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Header cityName={cityName} />
      <MainPage weatherData={weatherData==null?{main: "hey",temperature: "hey", windSpeed: "hey"}:weatherData}/>
      <LocationInput
        cityName={cityName}
        onInputChange={handleInputChange}
        onFetchWeather={handleFetchWeather}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    flexDirection: 'column'
  },
});

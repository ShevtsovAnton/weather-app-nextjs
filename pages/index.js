import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [cityInput, setCityInput] = useState('Kyiv');
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState('metric');

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cityInput }),
      });
      const data = await res.json();
      setWeatherData({ ...data });
      setCityInput('');
    };
    getData();
  }, [triggerFetch, cityInput]);

  return (
    <div className={styles.wrapper}>
      <p>Weather App wrapper</p>
    </div>
  );
};

export default App;

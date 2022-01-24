import { useCallback, useEffect, useState } from 'react';
import { api } from '../../services/api';

export const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');

  const getCovidData = useCallback((country) => {
    api.get(country)
      .then(data => setData(data))
  }, []);

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <div>

    </div>
  )
}


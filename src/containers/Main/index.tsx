import { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import Board from './components/Board';
import Panel from './components/Panel';

import {IData} from '../../common/types';

import {
  Container
} from './style'

export const Main = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    api(country)
      .then((response) => setData(response.data))
  }, []);

  useEffect(() => {
    getCovidData(country)

  }, [getCovidData, country])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const country = event.target.value
    setCountry(country || '')
  }

  return (
    <Container>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </Container>
  )
}


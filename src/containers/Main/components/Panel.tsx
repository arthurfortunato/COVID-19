import React, { memo } from 'react';
import COUNTRIES from '../../../common/constants/countries';
import { Button, Card, Typography, Select, MenuItem } from '../../../components';
import { CardPanelContentStyled, ItemStyled } from './style';
import { IPanel, ICountry } from '../../../common/types';

function Panel({ updateAt, onChange, data, country, getCovidData }: IPanel) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  function detectarMobile() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true
    } else {
      return false
    }
  }

  const renderCountries = (country: ICountry, index: number) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 =
    `País: ${country} - 
     Total de Casos: ${cases},
     Recuperados: ${recovered},
     Total de Mortos: ${deaths},
     Casos Hoje: ${todayCases},
     Mortes Hoje: ${todayDeaths}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: ''
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select
              onChange={(event) =>
                onChange(event as React.ChangeEvent<HTMLInputElement>)
              }
              value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {detectarMobile() ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);
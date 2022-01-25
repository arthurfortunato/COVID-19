import { Grid, Skeleton } from '../../../components/index';
import Card from './Card';

import { IData } from '../../../common/types'

function Board({ data }: any) {
  const { cases, todayDeaths, recovered, deaths, todayCases }: IData = data;

  const getValue = (value: number) => value ? value.toLocaleString('pt-BR') : <Skeleton variant="text" width={222} height={45} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deaths)} label="Total de mortos"  color="#000"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default Board;
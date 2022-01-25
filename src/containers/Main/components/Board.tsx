import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components/index';
import Card from './Card';

type BoardProps = {
    cases: number;
    todayDeaths: any;
    recovered: any;
    deaths: any;
    todayCases: any;
}

function Board({ data }: any) {
  const {cases, todayDeaths, recovered, deaths, todayCases}: BoardProps = data ;

  const getValue = (value: any) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default Board;
export interface IData {
  cases: number;
  todayDeaths: number;
  recovered: number;
  deaths: number;
  todayCases: number;
}

export interface IPanel {
  updateAt: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  data: IData;
  country: string;
  getCovidData(country: string): void;
}

export interface ICountry {
  label: string;
  value: string;
  flag: string;
}

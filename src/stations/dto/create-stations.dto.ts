export class CreateStationsDto {
  stationCode: number;
  wayCode: number;
  stationName: string;
  shortName: string;
  stationKm: number;
  stationType: 'Division' | 'Technical';
  stationOwnId: number;
  stationChildId: number;
  stationOwnKm: number;
  railCode: number;
}

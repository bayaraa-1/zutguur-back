export class CreateDepoDto {
  id: number;
  name: string;
  shortName: string | null;
  stationId: number;
  bossName: string;
  mainId: number | null;
}

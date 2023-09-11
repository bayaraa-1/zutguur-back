export class CreateComponentHistoryDto {
  componentId: number;
  locomotiveId: number;
  seriRepairId: number;
  componentDate: string;
  runKm: number;
  depoId: number;
  type: 'Placed' | 'Removed';
  reason: string | null;
  respondent: string | null;
}

export class CreateSeriComponentDto {
  id: number;
  locomotiveSeri: number;
  nameMn: string;
  nameRu: string;
  type: 't1' | 't2' | 't3' | 't4' | 't5' | 't6';
  barCode: string;
  userInsertedId: number;
  userUpdatedId: number;
}

export class CreateLocomotiveDto {
  id: number;
  seriId: number;
  number: string;
  depoId: number;
  sects: 'A' | 'B';
  useDate: string;
  outDate: string | null;
  befRunKm: number;
  userInsertedId: number;
  userUpdatedId: number;
}

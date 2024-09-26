import { Dancer } from '../../domain/dancer';

export interface DancerRepository {
  // seu código aqui
  save(dancer: Dancer): void;
  findAll(): Dancer[];
}

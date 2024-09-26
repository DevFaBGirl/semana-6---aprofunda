import { Dancer } from '../../domain/dancer';

export interface DancerRepository {
  save(dancer: Dancer): void;
  findAll(): Dancer[];
}

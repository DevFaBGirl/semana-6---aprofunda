import { Dancer } from '../../domain/dancer';



export interface DancerRepository {
  save(dancer: Dancer): void;
  findAll(): Dancer[];
  update(id: string, bodyParams: any): Dancer | undefined;
  delete(id: string): Dancer[];
  
  
  
}

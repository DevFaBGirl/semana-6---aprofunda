import { DancerRepository } from '../../application/repositories/dancer-repository';
import { Dancer } from '../../domain/dancer';

export class Repository implements DancerRepository {
  private dancers: Dancer[] = []; 

  save(dancer: Dancer): void { 
    this.dancers.push(dancer); 
  }

  findAll(): Dancer[] { 
    return this.dancers;
  }

  delete(id: string): Dancer[] {
    const filteredDancers = this.dancers.filter(item => item.id !== id)
    return filteredDancers

  }
 
}

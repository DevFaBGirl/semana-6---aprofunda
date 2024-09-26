import { DancerRepository } from '../../application/repositories/dancer-repository';
import { Dancer } from '../../domain/dancer';

export class Repository implements DancerRepository {
  private dancers: Dancer[] = []; // Alterado de books para dancers

  save(dancer: Dancer): void { // Alterado de book para dancer
    this.dancers.push(dancer); // Alterado de books para dancers
  }

  findAll(): Dancer[] { // Alterado de Book[] para Dancer[]
    return this.dancers; // Alterado de books para dancers
  }
}

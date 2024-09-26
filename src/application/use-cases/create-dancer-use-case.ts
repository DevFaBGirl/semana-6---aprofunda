import { Dancer } from '../../domain/dancer';
import { DancerRepository } from '../repositories/dancer-repository';
import { IdGenerator } from '../repositories/id-generator-interface';

export interface Params {
  name: string;
  style: string;
  crew: string;
  country: string;
  rank?: string;
  status: 'active' | 'inactive' | 'retired'; // Adicionando status
}

export class CreateDancerUseCase {
  constructor(
    private dancerRepository: DancerRepository,
    private idGenerator: IdGenerator
  ){}

  execute(bodyParams: Params): Dancer {
    const dancer: Dancer = {
      id: this.getId(),
      createdAt: this.getDate(),
      ...bodyParams
    };

    this.dancerRepository.save(dancer);
    return dancer;
  }

  private getDate() {
    return new Date().toLocaleDateString('pt-BR');
  }

  private getId() {
    return this.idGenerator.generate();
  }
}

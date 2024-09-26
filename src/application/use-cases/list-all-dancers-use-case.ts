import { DancerRepository } from '../repositories/dancer-repository';

export class ListAllDancersUseCase {
  // seu código aqui

  constructor(
    private dancerRepository: DancerRepository
  ){}

  execute() {
    const dancers = this.dancerRepository.findAll();
    return dancers;
  }
}

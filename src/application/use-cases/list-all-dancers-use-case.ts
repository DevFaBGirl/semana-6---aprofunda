import { DancerRepository } from '../repositories/dancer-repository';

export class ListAllDancersUseCase {
 
  constructor(
    private dancerRepository: DancerRepository
  ){}

  execute() {
    const dancers = this.dancerRepository.findAll();
    return dancers;
  }
}

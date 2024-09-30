import { DancerRepository } from '../repositories/dancer-repository';


export class DeleteDancerUseCase {
  constructor(
    private dancerRepository: DancerRepository
  ) {}

  execute(id: string) {
    return this.dancerRepository.delete(id);
  }
}

import { Repository } from '../../infrastructure/database/repository';
import { CreateDancerUseCase } from '../../application/use-cases/create-dancer-use-case';
import { IdentifierGenerator } from './id-generator';
import { DancerController } from '../../interface/dancer-controller'; 
import { ListAllDancersUseCase } from '../../application/use-cases/list-all-dancers-use-case';
import { DeleteDancerUseCase } from '../../application/use-cases/delete-dancer-use-case';


export function configureDependencies() {
  const dancerRepository = new Repository(); 
  const idGenerator = new IdentifierGenerator();
  const createDancerUseCase = new CreateDancerUseCase(dancerRepository, idGenerator); 
  const listAllDancersUseCase = new ListAllDancersUseCase(dancerRepository); 
  const deleteDancerUseCase = new DeleteDancerUseCase(dancerRepository);
  const dancerController = new DancerController(createDancerUseCase, listAllDancersUseCase, deleteDancerUseCase); 

  return {
    dancerController 
  }
}

import { Request, Response } from 'express';
import { CreateDancerUseCase } from '../application/use-cases/create-dancer-use-case';
import { ListAllDancersUseCase } from '../application/use-cases/list-all-dancers-use-case';
import { DeleteDancerUseCase } from '../application/use-cases/delete-dancer-use-case';


export interface CreateDancerDTO {
  name: string;
  style: string;
  crew: string;
  country: string;
  rank?: string;
}

export interface DancerDTO {
  id: string;
  name: string;
  style: string;
  crew: string;
  country: string;
  rank?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'retired'; 
}


export class DancerController {
  constructor(
    private createDancerUseCase: CreateDancerUseCase,
    private listAllDancersUseCase: ListAllDancersUseCase,
    private deleteDancerUseCase: DeleteDancerUseCase
  ){}

  create(req: Request, res: Response) {
    const dancerDTO: DancerDTO = req.body;
    const dancer = this.createDancerUseCase.execute(dancerDTO);
    res.status(201).json(dancer);
  }
   
  listAll(req: Request, res: Response) {
    const dancers = this.listAllDancersUseCase.execute();
    res.json(dancers);
  }

  delete(req: Request, res: Response) {
      const {id} = req.params
    const dancersFiltered = this.deleteDancerUseCase.execute(id)
    
    res.json({message: `Dancer com ${id} deletado com sucesso`, dancersFiltered});
  }
}

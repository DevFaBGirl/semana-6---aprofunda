import { Request, Response } from 'express';
import { CreateDancerUseCase } from '../application/use-cases/create-dancer-use-case';
import { ListAllDancersUseCase } from '../application/use-cases/list-all-dancers-use-case';
import { UpdateDancerUseCase } from '../application/use-cases/update-dancer-use-controller';
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
    private updateDancerUseCase: UpdateDancerUseCase,
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

  update (req: Request, res: Response) {
    const params = req.body;
    const { id } = req.params;
  
    // Adicionando log para verificar o conteúdo do body
    console.log(params);
  
    const dancerUpdated = this.updateDancerUseCase.execute(id, params);
  
    res.json({ message: `Dancer com ${id} alterado com sucesso`, dancerUpdated });
  }

  delete(req: Request, res: Response) {
      const {id} = req.params
    const dancersFiltered = this.deleteDancerUseCase.execute(id)
    
    res.json({message: `Dancer com ${id} deletado com sucesso`, dancersFiltered});
  }
}

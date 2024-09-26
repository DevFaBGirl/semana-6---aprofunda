import { Request, Response } from 'express';
import { CreateDancerUseCase } from '../application/use-cases/create-dancer-use-case';
import { ListAllDancersUseCase } from '../application/use-cases/list-all-dancers-use-case';

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
    private listAllDancersUseCase: ListAllDancersUseCase
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
}

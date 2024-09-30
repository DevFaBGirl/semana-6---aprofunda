import { DancerRepository } from './../repositories/dancer-repository';
import { Dancer } from './../../domain/dancer';
export class UpdateDancerUseCase {
    constructor (
        private dancerRepository: DancerRepository,
    ){}

    execute(id: string, bodyParams: any){
        return this.dancerRepository.update(id, bodyParams);
    }

    
}
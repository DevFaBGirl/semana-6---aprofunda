import { DancerRepository } from '../../application/repositories/dancer-repository';
import { Dancer } from '../../domain/dancer';

export class Repository implements DancerRepository {
  private dancers: Dancer[] = []; 

  save(dancer: Dancer): void { 
    this.dancers.push(dancer); 
  }

  findAll(): Dancer[] { 
    return this.dancers;
  }

  update(id: string, bodyParams: any): Dancer | undefined {
    const dancerFound = this.dancers.find(item => item.id === id);;
    if (dancerFound) {
      if( bodyParams.name !== null){
          dancerFound.name = bodyParams.name
        }
        if( bodyParams.style !== null){
          dancerFound.style  = bodyParams.style
        }
        if( bodyParams.crew !== null){
          dancerFound.crew = bodyParams.crew
        }
          if( bodyParams.country!== null){
            dancerFound.country = bodyParams.country
        }
        if( bodyParams.rank !== null){
          dancerFound.rank = bodyParams.rank
        }
        if( bodyParams.status !== null){
          dancerFound.status = bodyParams.status
        }
    }

    return dancerFound;
       
  }

  
  delete(id: string): Dancer[] {
    const filteredDancers = this.dancers.filter(item => item.id !== id)
    return filteredDancers
  }
 

}

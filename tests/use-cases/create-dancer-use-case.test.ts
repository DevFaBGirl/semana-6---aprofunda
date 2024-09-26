import { CreateDancerUseCase, Params } from '../../src/application/use-cases/create-dancer-use-case';
import { DancerRepository } from '../../src/application/repositories/dancer-repository';
import { IdGenerator } from '../../src/application/repositories/id-generator-interface';

// Mocks
const dancerRepositoryMock = {
  save: jest.fn()
};

const idGeneratorMock = {
  generate: jest.fn().mockReturnValue('unique-id-123')
};

// Teste unitário
describe('CreateDancerUseCase', () => {
  let createDancerUseCase: CreateDancerUseCase;

  beforeEach(() => {
    createDancerUseCase = new CreateDancerUseCase(
      dancerRepositoryMock as unknown as DancerRepository,
      idGeneratorMock as unknown as IdGenerator
    );
  });

  it('should create a dancer and save it', () => {
    const dancerParams: Params = {
      name: 'Fabiana FaBGirl Balduína',
      style: 'Breaking',
      crew: 'Brasil Style Bgirls',
      country: 'Brazil',
      rank: 'Master advanced',
      status: 'active'
    };

    const result = createDancerUseCase.execute(dancerParams);

    expect(idGeneratorMock.generate).toHaveBeenCalled();
    expect(dancerRepositoryMock.save).toHaveBeenCalledWith({
      id: 'unique-id-123',
      createdAt: expect.any(String), 
      ...dancerParams
    });
    expect(result).toEqual({
      id: 'unique-id-123',
      createdAt: expect.any(String),
      ...dancerParams
    });
  });
});

import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-ongo-repository'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { Controller } from '../../../presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}

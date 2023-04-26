import { LoadSurveyController } from './load-surveys-controller'
import { LoadSurveys, SurveyModel } from './load-surveys-controller-protocols'
import MockDate from 'mockdate'

const makeFakeSurveys = (): SurveyModel[] => {
  return [{
    id: 'any_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  },
  {
    id: 'other_id',
    question: 'other_question',
    answers: [{
      image: 'other_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }]
}

describe('LoadSurveys Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  beforeAll(() => {
    MockDate.reset()
  })

  it('Should call LoadSurveys', async () => {
    class LoadSurveyStub implements LoadSurveys {
      async load (): Promise<SurveyModel[]> {
        return new Promise(resolve => resolve(makeFakeSurveys()))
      }
    }
    const loadSurveyStub = new LoadSurveyStub()
    const loadSty = jest.spyOn(loadSurveyStub, 'load')
    const sut = new LoadSurveyController(loadSurveyStub)
    await sut.handle({})
    expect(loadSty).toHaveBeenCalled()
  })
})

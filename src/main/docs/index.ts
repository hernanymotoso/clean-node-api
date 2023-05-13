import { loginPath, surveyPath, signUpPath } from './paths'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'
import { accountSchema, errorSchema, loginParamsSchema, surveyAnswerSchema, surveySchema, surveysSchema, apiKeyAuthSchema, signUpParamsSchema, addSurveyParamsSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean api',
    description: 'Api teste',
    version: '1.0.1'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}

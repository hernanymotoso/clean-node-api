import { SignUpcontroller } from './signup'

describe('SignUp Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignUpcontroller()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})

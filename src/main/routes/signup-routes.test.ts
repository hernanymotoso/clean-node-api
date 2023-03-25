import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  it('Should return a account on success ', async () => {
    await request(app).post('/api/signup')
      .send({
        name: 'Hernany',
        email: 'hernanymotoso@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})

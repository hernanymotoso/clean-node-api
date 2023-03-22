
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@self/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/*.{js,ts}',
    '!<rootDir>/src/db/**/*.{js,ts}',
    '!<rootDir>/src/presentation/protocols/*.{js,ts}',
    '!<rootDir>/src/factories/**/*.{js,ts}',
    '!<rootDir>/src/repository/userRepository.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  roots: ['<rootDir>/tests'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'report',
        outputName: 'sonar-report.xml'
      }
    ]
  ]
}

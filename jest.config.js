module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testMatch: ['**/*.spec.ts'],
  roots: ['<rootDir>/src'],
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

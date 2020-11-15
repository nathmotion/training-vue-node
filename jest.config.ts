module.exports = {
  moduleFileExtensions: ['ts', 'js', 'vue'],
  transform: {
    '^.+\\.(vue)$': 'vue-jest'
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTittle: 'Test Report'
      }
    ]
  ]
}

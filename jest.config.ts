module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'vue'],
  transform: {
    '^.+\\.(vue)$': 'vue-jest'
  },
  testMatch: ['<rootDir>/tests/*.test.ts'],
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

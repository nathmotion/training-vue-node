module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  globals: {
    'vue-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'vue'],
  transform: {
    '^.+\\.(ts)$': 'vue-jest'
  },
  testMatch: ['<rootDir>/src/*.spec.ts'],
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

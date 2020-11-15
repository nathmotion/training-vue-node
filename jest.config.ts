module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(vue)$': 'vue-jest'
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testEnvironment: 'node'
}

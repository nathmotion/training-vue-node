module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**']
}

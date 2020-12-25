module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testPathIgnorePatterns: ['/node_modules/', 'lib'],
    testMatch: ['**/tests/*.test.js'],
    collectCoverage: true,
}
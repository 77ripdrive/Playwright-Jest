module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testPathIgnorePatterns: ['/node_modules/', 'lib'],
    testMatch: ['**/tests/*.test.js'],
    collectCoverage: true,
    reporters: [
        "default", ["jest-html-reporters", {
            "publicPath": "./artifacts",
            "filename": "report.html",
            "expand": true
        }]
    ],

}
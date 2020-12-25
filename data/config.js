module.exports = {
    webBaseUrl: process.env.URL || 'http://todomvc-app-for-testing.surge.sh/',
    webHeadless: process.env.HEADLESS || false,
    webNetworkSubscription: process.env.NETWORK || false,
}
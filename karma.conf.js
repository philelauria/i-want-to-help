// Karma configuration
// Generated on %DATE%

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'components/data-fetch/data-fetch.js',
      'components/data-fetch/data-fetch-service.js',
      'components/data-fetch/data-fetch_test.js',
      'components/qa-store/qa-store.js',
      'components/qa-store/qa-store-service.js',
      'components/qa-store/qa-store_test.js',
      'questions/questions.js',
      'questions/*.js',
      'questions/pr-flags/pr-flags.js',
      'questions/pr-flags/*.js',
      'questions/support-components/support-components.js',
      'questions/support-components/*.js'
      'questions/share-resources/share-resources.js',
      'questions/share-resources/share-resources-controller.js',
      'questions/share-resources/share-resources_test.js'
    ],
    exclude: [
    ],
    preprocessors: undefined,
    browsers: ['Chrome']
  });
};
function routing($routeProvider, $locationProvider) {
  $locationProvider
      .html5Mode({
        enabled: false,
        requireBase: false
      });

  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      controllerAs: 'ctrl',
      template: require('./views/home.html')
    })
}

export default routing;

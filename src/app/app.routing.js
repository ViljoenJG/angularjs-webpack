// export default class Routing {
//   constructor($routeProvider, $locationProvider) {
//     this.$locationProvider = $locationProvider;
//     this.$routeProvider = $routeProvider;
//   }
//
//   $locationProvider
//       .html5Mode({
//         enabled: false,
//         requireBase: false
//       });
//
//   $routeProvider
//     .when('/', {
//       controller: 'HomeCtrl',
//       controllerAs: 'ctrl',
//       template: require('./views/home.html')
//     })
// }

function Routing($routeProvider, $locationProvider) {
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
};

Routing.$inject = ['$routeProvider', '$locationProvider']

export default Routing;

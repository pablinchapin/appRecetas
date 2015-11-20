angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,  ionicMaterialInk, ionicMaterialMotion) {
  

  // Activate ink for controller
   /* ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
*/

  $scope.playlists = [
    { title: 'Reggae', subtitle: 'Best Reggae in the world', image: 'img/reggae.jpg', id: 1 },
    { title: 'Chill', subtitle: 'Best Chill in the world', image: 'img/chill.jpg', id: 2 },
    { title: 'Dubstep', subtitle: 'Best Dubstep in the world', image: 'img/dubstep.jpg', id: 3 },
    { title: 'Indie', subtitle: 'Best Indie in the world', image: 'img/indie.jpg', id: 4 },
    { title: 'Rap', subtitle: 'Best Rap in the world', image: 'img/rap.jpg', id: 5 },
    { title: 'Cowbell', subtitle: 'Best Cowbell in the world', image: 'img/cowbell.jpg', id: 6 }
  ];






})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

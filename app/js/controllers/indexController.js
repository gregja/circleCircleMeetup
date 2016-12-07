app.controller('indexController', ['$scope', '$route', 'p5', function($scope, $route, p5) {

    // Liste des effets présentés
    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'},
        {name: 'Flip', className: 'flip'},
        {name: 'Rotate', className: 'rotate'},
        {name: 'Slide + Pop in', className: 'slide-pop'}
    ];
    $scope.effect = $scope.effects[0].className;

    // Liste des sources présentés
    $scope.sources = [
        {name: 'Cercle01 P5', sourceName: 'cercle01'},                
        {name: 'Cercle02 P5', sourceName: 'cercle02'},                
        {name: 'Cercle02 Processing', sourceName: 'cercle02b'},                
        {name: 'Cercle03 P5', sourceName: 'cercle03'},                
        {name: 'Cercle04 P5', sourceName: 'cercle04'},                
        {name: 'Cercle05 P5', sourceName: 'cercle05'},                
        {name: 'Cercle06 P5', sourceName: 'cercle06'},                
        {name: 'Cercle07 P5', sourceName: 'cercle07'},                
        {name: 'P5 et Angular', sourceName: 'p5-angular'},                
    ];

    $scope.source = $scope.sources[0].className;

    // Current menu item
    $scope.isActive = function(path) {
        if ($route.current && $route.current.regexp) {
            return $route.current.regexp.test(path);
        }
        return false;
    };
}]);
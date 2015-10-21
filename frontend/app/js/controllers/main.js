pokedexApp.controller('MainCtrl', function ($scope, $http) {

    $http.get('../pokemons/pokemons.json').success(function (data) {
        $scope.pokemons = data;
    });

    $scope.ordem = 'numero';
});
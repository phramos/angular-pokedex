pokedexApp.controller('MainCtrl', function ($scope) {
    $scope.pokemons = [
        {'nome': 'Bulbasaur',
            'descricao': 'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.'},
        {'nome': 'Ivysaur',
            'descricao': 'The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.'},
        {'nome': 'Venusaur',
            'descricao': 'It is able to con vert sunlight into energy. As a result, it is more powerful in the summertime.'}
    ];
});
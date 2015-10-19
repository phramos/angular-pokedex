pokedexApp.controller('MainCtrl', function ($scope) {
    $scope.pokemons = [
        {
            'numero': 1,
            'nome': 'Bulbasaur',
            'descricao': 'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.'
        },
        {
            'numero': 2,
            'nome': 'Ivysaur',
            'descricao': 'The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.'
        },
        {
            'numero': 3,
            'nome': 'Venusaur',
            'descricao': 'It is able to con vert sunlight into energy. As a result, it is more powerful in the summertime.'
        }
    ];
});
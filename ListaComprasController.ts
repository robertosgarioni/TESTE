function ListaComprasController($scope: { itens: { produto: string; descricao: string; }[]; }) {
    $scope.itens = [
        {produto: 'Leite', descricao: 'um leite muito bonito e de marca.', }, 
    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto,
                           descricao: $scope.item.descricao,});
            };




}


describe('Lista Compras Unitário', function () {
    describe('ListaComprasController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ListaComprasController(this.$scope);
        });

        it('deve criar "itens" com 1 ítens', function () {
            expect(this.$scope.itens.length).toBe(1);
        });

        describe('adicionaItem', function () {
            it('deve adicionar um novo ítem à lista com dados do escopo', function () {
                this.$scope.item = {};
                this.$scope.item.produto = 'Leite';
                this.$scope.item.descricao = 'Um leito muito bonito e muito gostoso';
                this.$scope.adicionaItem();
                expect(this.$scope.itens.length).toBe(3);
                expect(this.$scope.itens[1].produto).toBe('Leite');
                expect(this.$scope.itens[1].descricao).toBe('Um leite muito bonito e muito gostoso');
                
            });
        });
    });
});
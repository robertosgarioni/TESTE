<div ng-controller="ListaComprasController">
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Descricao</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in itens">
          <td><strong>{{ item.produto }}</strong></td>
          <td>{{ item.descricao }}</td>
        </tr>
      </tbody>
    </table>
</div>
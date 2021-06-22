import './TabelaProdutos.css'
import React from "react";
import "../../data/produtos";
import produtos from "../../data/produtos";

export default (props) => {
  const linhaProdutos = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 === 0 ? "Par" : "Impar"} key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      Tabela de Produtos
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{linhaProdutos}</tbody>
      </table>
    </div>
  );
};

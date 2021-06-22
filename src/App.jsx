import "./App.css";
import React from "react";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Desafio Megasena" color="#B9006E">
        <Mega qtde={8}/>
      </Card>
      <Card titulo="#12 - Component Controlado (Input)" color="#424242">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Component Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#594F4F">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#A7226E">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Component com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Alexandre" />
          <FamiliaMembro nome="Adriano" />
          <FamiliaMembro nome="Julia" sobrenome="Nappo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parâmetro" color="#E8B71A">
        <ComParametro titulo="Situação do aluno" aluno="Alexandre" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

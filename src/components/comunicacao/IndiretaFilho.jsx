import React from "react";

export default (props) => {
    const cb = props.quandoClicar
    const geraIdade = () => parseInt(Math.random() * 20 + 50)
    const geraNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => cb("João", geraIdade(), geraNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};

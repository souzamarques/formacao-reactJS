import React from "react";

class FormularioCadastro extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button> Criar Nota </button>
      </form>
    );
  }
}

export default FormularioCadastro;

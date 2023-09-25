import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou realizar alguma ação com eles
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="assunto">Assunto:</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={this.state.assunto}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={this.state.mensagem}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default ContactForm;

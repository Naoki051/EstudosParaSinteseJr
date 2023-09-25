import React, { Component } from "react";
import axios from "axios";

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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, assunto, mensagem } = this.state;
    if (!nome || !email || !assunto || !mensagem) {
      console.error("Todos os campos devem ser preenchidos.", this.state);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/envia-email", {
        nome,
        email,
        assunto,
        mensagem,
      });
      const data = response.data;
      console.log("Email enviado com sucesso!", data);
    } catch (error) {
      console.error("Erro ao fazer POST:", error);
    }
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

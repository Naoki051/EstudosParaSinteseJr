import "./App.css";
import React from "react";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulário de Contato</h1>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;

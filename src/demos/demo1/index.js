import React, { Component } from "react";

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      predefinedUsername: "",
      predefinedPassword: "",
      showPassword: false,
    };
  }

  togglePasswordVisibility = (event) => {
    event.preventDefault(); // Previene el envío del formulario
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validateLogin();
  };


  setPredefinedUser = () => {
    const { predefinedUsername, predefinedPassword } = this.state;
    this.setState({
      username: predefinedUsername,
      password: predefinedPassword,
    });
  };

  validateLogin = () => {
    const { username, password, predefinedUsername, predefinedPassword } =
      this.state;
    if (username === predefinedUsername && password === predefinedPassword) {
      console.log("Inicio de sesión exitoso");
    } else {
      console.log("Datos incorrectos");
    }
  };

  render() {
    const { showPassword } = this.state;
    return (
      <div>
        <h2>Formulario de Inicio de Sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>

        {/* Botón para mostrar/ocultar la contraseña fuera del formulario */}
        <button onClick={this.togglePasswordVisibility}>
          {showPassword ? "Ocultar" : "Mostrar"} Contraseña
        </button>

        <h2>Configurar Usuario Predefinido</h2>
        <label>
          Usuario Predefinido:
          <input
            type="text"
            name="predefinedUsername"
            value={this.state.predefinedUsername}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Contraseña Predefinida:
          <input
            type="password"
            name="predefinedPassword"
            value={this.state.predefinedPassword}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.setPredefinedUser}>
          Establecer Usuario Predefinido
        </button>
      </div>
    );
  }
}

export default Demo1;

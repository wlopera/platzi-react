import React from "react";

class BadgeForm extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Asistente</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre: </label>
            <input
              type="text"
              onChange={this.props.onChange}
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Apellido: </label>
            <input
              type="text"
              onChange={this.props.onChange}
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Correo: </label>
            <input
              type="email"
              onChange={this.props.onChange}
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Profesión: </label>
            <input
              type="text"
              onChange={this.props.onChange}
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter: </label>
            <input
              type="text"
              onChange={this.props.onChange}
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
      </React.Fragment>
    );
  }

  // handleChange = (e) => {
  //   // console.log({
  //   //   clave: e.target.name,
  //   //   valor: e.target.value
  //   // });

  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleClick = (e) => {
    console.log("Se presiono el boton Guardar");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit del Formulario");
    console.log(this.props.formValues);
  };
}

export default BadgeForm;

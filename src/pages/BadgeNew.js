import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import avatarUrl from "../images/react.png";

import api from "../api";
import md5 from "md5";

import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    form: {
      loading: false,
      error: null,
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      console.log("##=> Form a guardar: %o", this.state.form);

      const hash = await md5(this.state.form.email);
      this.setState({
        form: {
          ...this.state.form,
          avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
        }
      });

      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "NOMBRE"}
                lastName={this.state.form.lastName || "APELLIDO"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "PROFESION"}
                email={this.state.form.email || "CORREO"}
                avatarUrl={avatarUrl}
              />
            </div>
            <div className="col-6">
              <h1>Agregar Asistente</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;

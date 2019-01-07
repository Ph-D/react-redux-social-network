import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExperience } from "../../actions/profileActions";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='add-experience'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto jumbotron'>
              <Link to='/dashboard' className='btn btn-light fb-border'>
                Retour
              </Link>
              <h1 className='font-weight-bold fb-title text-center mb-5'>
                Ajouter Expérience
              </h1>
              <p className='lead text-center'>
                Indiquez vos différentes expériences (emploi, mission)
              </p>
              <small className='d-block pb-3'>*= champs requis</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='Entreprise'
                  name='company'
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder='Intitulé du Poste'
                  name='title'
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder='Lieu'
                  name='location'
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <h6>A partir du</h6>
                <TextFieldGroup
                  name='from'
                  type='date'
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>Jusqu'au</h6>
                <TextFieldGroup
                  name='to'
                  type='date'
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <div className='form-check mb-4'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    name='current'
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id='current'
                  />
                  <label htmlFor='current' className='form-check-label'>
                    Emploi actuel
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder='Description du poste'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info='Décrivez votre expérience'
                />
                <input
                  type='submit'
                  value='Valider'
                  className='btn blue-fb btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));

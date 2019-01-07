import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder='Twitter URL'
            name='twitter'
            icon='fab fa-twitter'
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder='Facebook URL'
            name='facebook'
            icon='fab fa-facebook'
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder='Linkedin URL'
            name='linkedim'
            icon='fab fa-linkedin'
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder='YouTube URL'
            name='youtube'
            icon='fab fa-youtube'
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder='Instagram URL'
            name='instagram'
            icon='fab fa-instagram'
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    } else {
    }

    // Select options for status
    const options = [
      { label: "* Statut", value: 0 },
      { label: "Développeur", value: "Développeur" },
      { label: "Développeur Junior", value: "Développeur Junior" },
      { label: "Développeur Sénior", value: "Développeur Sénior" },
      { label: "Manager", value: "Manager" },
      { label: "Étudiant", value: "Étudiant" },
      { label: "Enseignant", value: "Enseignant" },
      { label: "Stagiaire", value: "Stagiaire" },
      { label: "Autre", value: "Autre" }
    ];

    return (
      <div className='create-profile'>
        <div className='container'>
          <div className='row' />
          <div className='col-md-8 m-auto jumbotron'>
            <h1 className='font-weight-bold fb-title text-center mb-5'>
              Créez votre Profil
            </h1>
            <p className='lead text-center'>Merci de renseigner les champs.</p>
            <small className='d-block pb-3'>* = champs requis</small>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder='* Nom profil page'
                name='handle'
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="Ce champ sera utilisé pour générer l'url de votre profil"
              />
              <SelectListGroup
                placeholder='Status'
                name='status'
                value={this.state.status}
                onChange={this.onChange}
                options={options}
                error={errors.status}
              />
              <TextFieldGroup
                placeholder='Entreprise'
                name='company'
                value={this.state.company}
                onChange={this.onChange}
                error={errors.company}
              />
              <TextFieldGroup
                placeholder='Website'
                name='website'
                value={this.state.website}
                onChange={this.onChange}
                error={errors.website}
                info='Website ou Portfolio'
              />
              <TextFieldGroup
                placeholder='Lieu'
                name='location'
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
                info='Ville ou Pays'
              />
              <TextFieldGroup
                placeholder='Compétences'
                name='skills'
                value={this.state.skills}
                onChange={this.onChange}
                error={errors.skills}
                info='Ajouter une virgule entre chaque compétence'
              />
              <TextFieldGroup
                placeholder='Nom utilisateur Github'
                name='githubusername'
                value={this.state.githubusername}
                onChange={this.onChange}
                error={errors.githubusername}
                info='Afficher Github repos'
              />
              <TextAreaFieldGroup
                placeholder='Description'
                name='bio'
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
                info='Décrivez vous'
              />

              <div className='mb-3'>
                <button
                  type='button'
                  onClick={() => {
                    this.setState(prevState => ({
                      displaySocialInputs: !prevState.displaySocialInputs
                    }));
                  }}
                  className='btn btn-light'
                >
                  Ajoutez vos réseaux sociaux
                </button>
                <span className='text-muted'> Optionnel</span>
              </div>
              {socialInputs}
              <input
                type='submit'
                value='Valider'
                className='btn blue-fb btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));

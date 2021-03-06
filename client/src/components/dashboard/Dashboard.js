import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";
import isEmpty from "../../validation/is-empty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick() {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className='lead text-muted'>
              Bienvenue <span className='font-weight-bold'>{user.name}</span>
            </p>
            <ProfileActions />
            <h4 className='mb-4'>Expériences Profesionnelles</h4>
            {isEmpty(profile.experience) ? (
              <p>Pas d'expériences listées</p>
            ) : (
              <Experience experience={profile.experience} />
            )}
            <h4 className='mb-4'>Parcours</h4>

            {isEmpty(profile.education) ? (
              <p>Pas de parcours listés</p>
            ) : (
              <Education education={profile.education} />
            )}
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className='btn btn-danger'
            >
              Supprimer mon compte
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div className='lead text-muted'>
            <p>
              Bienvenue <span className='font-weight-bold'>{user.name}</span>
            </p>
            <p>Aucun profil enregistré</p>
            <Link to='/create-profile' className='btn  blue-fb btn-block mt-4'>
              Créer Profil
            </Link>
          </div>
        );
      }
    }

    return (
      <div className='dashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 m-auto fb-grey text-center'>
              <h1 className='display-5 font-weight-bold fb-title text-center'>
                Dashboard
              </h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);

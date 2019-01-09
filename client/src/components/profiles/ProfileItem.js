import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='card'>
        <img src={profile.user.avatar} alt='' className='rounded p-1' />
        <div className='card-body'>
          <h5 className='fb-title'>{profile.user.name}</h5>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span> à {profile.company}</span>
            )}
          </p>
          <p className='font-weight-bold'>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
        </div>

        <ul className='list-group m-1'>
          {profile.skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='list-group-item'>
              <i className='fa fa-check pr-1' />
              {skill}
            </li>
          ))}
        </ul>
        <div className='card-body'>
          <Link to={`/profile/${profile.handle}`} className='btn blue-fb'>
            Voir le profil
          </Link>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='row mb-5'>
        <div className='col-md-3'>
          <img
            src={profile.user.avatar}
            alt={profile.user.name}
            className='rounded mb-3'
          />
        </div>
        <div className='col-md-9 details '>
          <h2 className='display-5 fb-title'>{profile.user.name}</h2>

          <p className='lead'>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span> / {profile.company}</span>
            )}
          </p>

          {isEmpty(profile.location) ? null : <p> {profile.location}</p>}

          <p>
            {isEmpty(profile.website) ? null : (
              <a
                className='text-white p-2'
                href={profile.website}
                rel='noopener noreferrer'
              >
                <i className='fas fa-globe fb-title fa-1x' />
              </a>
            )}

            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <a
                className='text-white p-2'
                href={profile.social.twitter}
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter fb-title fa-1x' />
              </a>
            )}

            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <a
                className='text-white p-2'
                href={profile.social.facebook}
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook fb-title fa-1x' />
              </a>
            )}

            {isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a
                className='text-white p-2'
                href={profile.social.linkedin}
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin fb-title fa-1x' />
              </a>
            )}

            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <a
                className='text-white p-2'
                href={profile.social.instagram}
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram fb-title fa-1x' />
              </a>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;

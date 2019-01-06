import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      // <div className="card card-body bg-light mb-3">
      //   <div className="row">
      //     <div className="col-2">
      //       <img src={profile.user.avatar} alt="" className="rounded-circle" />
      //     </div>
      //     <div className="col-lg-6 col-md-4 col-8">
      //       <h3>{profile.user.name}</h3>
      //       <p>
      //         {profile.status}
      //         {isEmpty(profile.company) ? null : (
      //           <span>at {profile.company}</span>
      //         )}
      //       </p>
      //       <p>
      //         {isEmpty(profile.location) ? null : (
      //           <span>{profile.location}</span>
      //         )}
      //       </p>
      //       <Link to={`/profile/${profile.handle}`} className="btn btn-info">
      //         View Profile
      //       </Link>
      //     </div>
      //     <div className="col-md-4 d-none d-md-block">
      //       <h4>Skill Set</h4>
      //       <ul className="list-group">
      //         {profile.skills.slice(0, 4).map((skill, index) => (
      //           <li key={index} className="list-group-item">
      //             <i className="fa fa-check pr-1" />
      //             {skill}
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
      <div class="col-sm-6 mb-4">
        <div className="card">
          <img
            src={profile.user.avatar}
            alt=""
            className="rounded-circle p-5"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body" />
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
